import { NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabaseServer';
import { sendSms } from '../../../lib/smsmode';
import { randomUUID } from 'crypto';

export async function POST(request) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ ok: false, error: 'Non autorisé' }, { status: 401 });

    const { data: profile } = await supabase
      .from('profiles')
      .select('cabinet_name, google_review_url, sms_template, star_threshold, credits, subscription_status')
      .eq('id', user.id)
      .single();

    if (!profile) return NextResponse.json({ ok: false, error: 'Profil introuvable' }, { status: 404 });

    if ((profile.credits || 0) <= 0) {
      return NextResponse.json({ ok: false, error: 'Crédits insuffisants. Rechargez votre compte.' }, { status: 402 });
    }

    const body = await request.json();
    const { phone, patient_name } = body;
    if (!phone) return NextResponse.json({ ok: false, error: 'Numéro requis' }, { status: 400 });

    // Create feedback token
    const token = randomUUID();
    const feedbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/feedback/${token}`;

    // Build SMS message
    const template = profile.sms_template ||
      `Bonjour{PATIENT}, merci pour votre visite au {CABINET}. Comment s'est passée votre consultation ? {FEEDBACK_URL}`;

    const message = template
      .replace('{PATIENT}', patient_name ? ` ${patient_name}` : '')
      .replace('{CABINET}', profile.cabinet_name)
      .replace('{FEEDBACK_URL}', feedbackUrl)
      .replace('{GOOGLE_URL}', feedbackUrl); // legacy support

    // Send SMS
    let numNorm = phone.replace(/[\s\-\.]/g, '');
    if (numNorm.startsWith('0')) numNorm = '+33' + numNorm.slice(1);

    const result = await sendSms({ phone: numNorm, message });

    const status = result.ok ? 'sent' : 'failed';

    // Save feedback token
    if (result.ok) {
      await supabase.from('feedback_tokens').insert({
        token,
        user_id: user.id,
        patient_name: patient_name || null,
        phone: numNorm,
        star_threshold: profile.star_threshold || 4,
        google_url: profile.google_review_url || '',
        cabinet_name: profile.cabinet_name,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
      });

      // Deduct 1 credit
      await supabase
        .from('profiles')
        .update({ credits: (profile.credits || 0) - 1 })
        .eq('id', user.id);
    }

    // Log SMS
    await supabase.from('sms_logs').insert({
      user_id: user.id,
      phone: numNorm,
      patient_name: patient_name || null,
      message,
      status,
      token: result.ok ? token : null,
      sent_at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: result.ok, error: result.ok ? null : 'Échec envoi SMS' });

  } catch (err) {
    console.error('send-sms error:', err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
