export async function sendSms({ phone, message }) {
  try {
    const serviceName = process.env.OVH_SMS_SERVICE;
    const login = process.env.OVH_SMS_LOGIN;
    const password = process.env.OVH_SMS_PASSWORD;

    const params = new URLSearchParams({
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
    const ok = text.includes('OK') || text.includes('100');
    return { ok, raw: text };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
