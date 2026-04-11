export async function sendSms({ phone, message }) {
  try {
    const account = process.env.OVH_SMS_SERVICE;
    const login = process.env.OVH_SMS_LOGIN;
    const password = process.env.OVH_SMS_PASSWORD;

    const params = new URLSearchParams({
      account,
      login,
      password,
      message,
      to: phone,
      noStop: '1',
      smsCoding: '1',
    });

    const url = `https://www.ovh.com/cgi-bin/sms/http2sms.cgi?${params.toString()}`;
    const res = await fetch(url);
    const text = await res.text();
    console.log('OVH SMS response:', text);
    const ok = text.includes('OK') || text.startsWith('0 ');
    return { ok, raw: text };
  } catch (err) {
    console.error('OVH SMS error:', err);
    return { ok: false, error: err.message };
  }
}
