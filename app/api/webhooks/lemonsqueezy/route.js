import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Credits per product
const CREDITS_MAP = {
  'starter': 50,
  'pro': 150,
};

function verify(raw, sig) {
  const hmac = crypto.createHmac('sha256', process.env.LEMONSQUEEZY_WEBHOOK_SECRET)
    .update(raw).digest('hex');
  return hmac === sig;
}

export async function POST(request) {
  const raw = await request.text();
  const sig = request.headers.get('x-signature');

  if (!verify(raw, sig)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const payload = JSON.parse(raw);
  const event = payload.meta?.event_name;
  const attrs = payload.data?.attributes;
  const email = attrs?.user_email;

  if (!email || event !== 'order_created') {
    return NextResponse.json({ ok: true });
  }

  // Identify pack from product name
  const productName = (attrs?.product_name || '').toLowerCase();
  let credits = 0;
  for (const [key, val] of Object.entries(CREDITS_MAP)) {
    if (productName.includes(key)) { credits = val; break; }
  }

  if (credits === 0) {
    console.warn(`[LS] Unknown product: ${productName}`);
    return NextResponse.json({ ok: true });
  }

  // Find user by email
  const { data: { users } } = await supabaseAdmin.auth.admin.listUsers();
  const user = users?.find(u => u.email === email);

  if (user) {
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('credits')
      .eq('id', user.id)
      .single();

    const currentCredits = profile?.credits || 0;

    await supabaseAdmin.from('profiles')
      .update({ credits: currentCredits + credits })
      .eq('id', user.id);

    // Log purchase
    await supabaseAdmin.from('credit_purchases').insert({
      user_id: user.id,
      credits_added: credits,
      product_name: attrs?.product_name,
      amount_paid: attrs?.total,
      purchased_at: new Date().toISOString(),
    });

    console.log(`[LS] +${credits} crédits → ${email} (total: ${currentCredits + credits})`);
  }

  return NextResponse.json({ ok: true });
}
