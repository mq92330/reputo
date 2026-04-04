const SMSMODE_API = 'https://api.smsmode.com/http/1.6/';

async function getToken() {
  const res = await fetch(
    `${SMSMODE_API}createSubAccount.do?login=${encodeURIComponent(process.env.SMSMODE_LOGIN)}&pwd=${encodeURIComponent(process.env.SMSMODE_PASSWORD)}`,
    { method: 'GET' }
  );
  const text = await res.text();
  if (text.startsWith('0 ')) return text.split(' ')[1].trim();
  throw new Error(`smsmode auth error: ${text}`);
}

// Send a single SMS via smsmode REST API
export async function sendSms({ phone, message, sender }) {
  const accessToken = process.env.SMSMODE_ACCESS_TOKEN;

  // Normalize phone: 06XXXXXXXX → 336XXXXXXXX
  let num = phone.replace(/[\s\-\.]/g, '');
  if (num.startsWith('0')) num = '33' + num.slice(1);
  if (num.startsWith('+')) num = num.slice(1);

  const params = new URLSearchParams({
    accessToken,
    message,
    numero: num,
    ...(sender ? { emetteur: sender } : {}),
  });

  const res = await fetch(`${SMSMODE_API}sendSMS.do`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const text = await res.text();
  // smsmode returns "0 ticket_id" on success
  const ok = text.startsWith('0 ');
  return { ok, raw: text, ticket: ok ? text.split(' ')[1]?.trim() : null };
}

// Get remaining credits
export async function getCredits() {
  const accessToken = process.env.SMSMODE_ACCESS_TOKEN;
  const res = await fetch(`${SMSMODE_API}credit.do?accessToken=${accessToken}`);
  const text = await res.text();
  const match = text.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
}
