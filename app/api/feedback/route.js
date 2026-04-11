import { NextResponse } from 'next/server';
import { createClient as createServerClient } from '../../../lib/supabaseServer';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// GET — load token data for the feedback page
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) return NextResponse.json({ ok: false }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from('feedback_tokens')
    .select('cabinet_name, star_threshold, google_url, used, expires_at')
    .eq('token', token)
    .single();

  if (error || !data) return NextResponse.json({ ok: false, error: 'Lien invalide' });
  if (data.used) return NextResponse.json({ ok: false, error: 'Lien déjà utilisé' });
  if (new Date(data.expires_at) < new Date()) return NextResponse.json({ ok: false, error: 'Lien expiré' });

  // Trace l'ouverture du lien
  await supabaseAdmin.from('feedback_tokens')
    .update({ opened_at: new Date().toISOString() })
    .eq('token', token).is('opened_at', null);

  return NextResponse.json({
    ok: true,
    cabinet_name: data.cabinet_name,
    threshold: data.star_threshold,
    google_url: data.google_url,
  });
}

// POST — submit rating or private feedback
export async function POST(request) {
  try {
    const body = await request.json();
    const { token, stars, feedback, type } = body;

    if (!token || !stars) return NextResponse.json({ ok: false }, { status: 400 });

    // Get token data
    const { data: tokenData } = await supabaseAdmin
      .from('feedback_tokens')
      .select('*')
      .eq('token', token)
      .single();

    if (!tokenData) return NextResponse.json({ ok: false, error: 'Token invalide' }, { status: 404 });

    // Save feedback
    if (type === 'feedback' && feedback) {
      await supabaseAdmin.from('patient_feedbacks').insert({
        user_id: tokenData.user_id,
        token,
        stars,
        feedback_text: feedback,
        patient_name: tokenData.patient_name,
        phone: tokenData.phone,
        created_at: new Date().toISOString(),
      });
    }

    // Update sms_log with stars
    await supabaseAdmin
      .from('sms_logs')
      .update({ stars, feedback_type: type === 'feedback' ? 'private' : 'google' })
      .eq('token', token);

    // Mark token as used
    await supabaseAdmin
      .from('feedback_tokens')
      .update({ used: true, stars, responded_at: new Date().toISOString() })
      .eq('token', token);

    return NextResponse.json({ ok: true });

  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
