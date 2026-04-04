import { NextResponse } from 'next/server';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { sendSms } from '../../../lib/smsmode';
import { randomUUID } from 'crypto';

export async function POST(request) {
  try {
    const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
    const authHeader = request.headers.get('authorization');
    const authToken = authHeader?.replace('Bearer ', '');
    const { data: { user } } = await supabase.auth.getUser(authToken);
if (!user) return NextResponse.json({ ok: false, error: 'Non autorisé' }, { status: 401 });

    const { data: profile } = await supabase
      .from('profiles')
      .select('cabinet_name, praticien_name, profession, google_review_url, sms_template, greeting_format, star_threshold, credits')
      .eq('id', user.id)
      .single();

    if (!profile) return NextResponse.json({ ok: false, error: 'Profil introuvable' }, { status: 404 });

    if ((profile.credits || 0) <= 0) {
      return NextResponse.json({ ok: false, error: 'Crédits insuffisants. Rechargez votre compte.' }, { status: 402 });
    }

    const body = await request.json();
    const { phone, patient_first_name, patient_last_name, patient_civility } = body;

    if (!phone) return NextResponse.json({ ok: false, error: 'Numéro requis' }, { status: 400 });

    // Normalize phone
    let num = phone.replace(/[\s\-\.]/g, '');
    if (num.startsWith('0')) num = '+33' + num.slice(1);
    if (!num.startsWith('+')) num = '+33' + num;

    // Resolve civilité longue
    const civiliteLong = patient_civility === 'Mme' ? 'Madame'
      : patient_civility === 'M.' ? 'Monsieur'
      : patient_civility || '';

    // Create feedback token
    const token = randomUUID();
    const feedbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/feedback/${token}`;

    // Build message from template
    const tpl = profile.sms_template ||
      `Bonjour{PRENOM}, merci pour votre visite. Comment s'est passée votre consultation ? {FEEDBACK_URL}`;

    const message = tpl
      // Named-person greetings
      .replace('{PRENOM}', patient_first_name ? ` ${patient_first_name}` : '')
      .replace('{CIVILITE} {NOM}', patient_civility && patient_last_name
        ? `${patient_civility} ${patient_last_name}` : '')
      .replace('{CIVILITE_LONG} {NOM}', civiliteLong && patient_last_name
        ? `${civiliteLong} ${patient_last_name}` : '')
      .replace('{CIVILITE}', patient_civility || '')
      .replace('{CIVILITE_LONG}', civiliteLong)
      .replace('{NOM}', patient_last_name || '')
      // Links
      .replace('{FEEDBACK_URL}', feedbackUrl)
      .replace('{GOOGLE_URL}', feedbackUrl)
      // Legacy
      .replace('{PATIENT}', patient_first_name ? ` ${patient_first_name}` : '')
      .replace('{CABINET}', profile.cabinet_name || 'votre cabinet')
      // Clean double spaces
      .replace(/  +/g, ' ')
      .trim();

    // Hard limit 160 chars — tronquer si dépassé
    const finalMessage = message.length > 160 ? message.slice(0, 157) + '...' : message;

    // Send via smsmode
    const result = await sendSms({ phone: num, message: finalMessage });
    const status = result.ok ? 'sent' : 'failed';

    const patientDisplay = patient_first_name ||
      (patient_civility && patient_last_name ? `${patient_civility} ${patient_last_name}` : null);

    // Save feedback token
    if (result.ok) {
      await supabase.from('feedback_tokens').insert({
        token,
        user_id: user.id,
        patient_name: patientDisplay,
        phone: num,
        star_threshold: profile.star_threshold || 4,
        google_url: profile.google_review_url || '',
        cabinet_name: profile.cabinet_name,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      });

      // Deduct 1 credit
      await supabase.from('profiles')
        .update({ credits: (profile.credits || 0) - 1 })
        .eq('id', user.id);
    }

    // Log
    await supabase.from('sms_logs').insert({
      user_id: user.id,
      phone: num,
      patient_name: patientDisplay,
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
