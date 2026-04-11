'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../lib/supabase';
import styles from './dash.module.css';

export default function DashboardPage() {
  const [profile, setProfile] = useState(null);
  const [logs, setLogs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState({ month: 0, total: 0, googleRate: 0, feedbackCount: 0 });
  const supabase = createClient();

  useEffect(() => { load(); }, []);

  useEffect(() => {
    const onFocus = () => load();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  async function load() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(p);

    const { data: l } = await supabase.from('sms_logs').select('*').eq('user_id', user.id).order('sent_at', { ascending: false }).limit(25);
    setLogs(l || []);

    const { data: fb } = await supabase.from('patient_feedbacks').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10);
    setFeedbacks(fb || []);
    // Marquer les feedbacks non lus comme lus
    const unreadIds = (fb || []).filter(f => !f.read).map(f => f.id);
    if (unreadIds.length > 0) {
      await supabase.from('patient_feedbacks').update({ read: true }).in('id', unreadIds);
    }

    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();
    const { count: monthCount } = await supabase.from('sms_logs').select('*', { count: 'exact', head: true }).eq('user_id', user.id).gte('sent_at', startOfMonth);
    const { count: totalCount } = await supabase.from('sms_logs').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
    const googleCount = (l || []).filter(x => x.feedback_type === 'google').length;
    const privateCount = (l || []).filter(x => x.feedback_type === 'private').length;
    const responded = googleCount + privateCount;
    setStats({
      month: monthCount || 0,
      total: totalCount || 0,
      googleRate: responded > 0 ? Math.round((googleCount / responded) * 100) : 0,
      feedbackCount: (fb || []).filter(f => !f.read).length,
    });
  }

  const [civility, setCivility] = useState('M.');
  const [lastName, setLastName] = useState('');

  async function handleSend(e) {
    e.preventDefault();
    setSending(true);
    setResult(null);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch('/api/send-sms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session?.access_token}` },
      body: JSON.stringify({
        phone,
        patient_first_name: name,
        patient_last_name: lastName,
        patient_civility: civility,
        user_id: (await supabase.auth.getUser()).data.user?.id,
      }),
    });
    const data = await res.json();
    setResult(data);
    setSending(false);
    if (data.ok) { setPhone(''); setName(''); setLastName(''); load(); }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Tableau de bord</h1>
          <p className={styles.sub}>{profile?.cabinet_name}</p>
        </div>
        <div className={styles.creditsBox}>
          <span className={styles.creditsLabel}>Crédits restants</span>
          <span className={styles.creditsVal} style={{color: (profile?.credits || 0) < 10 ? 'var(--red)' : 'var(--green)'}}>
            {profile?.credits ?? '—'}
          </span>
          <a href="/tarifs" className="btn-primary" style={{fontSize:'12px', padding:'6px 14px'}}>Recharger</a>
        </div>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.stat}><span className={styles.statL}>SMS ce mois</span><span className={styles.statV}>{stats.month}</span></div>
        <div className={styles.stat}><span className={styles.statL}>SMS total</span><span className={styles.statV}>{stats.total}</span></div>
        <div className={styles.stat}><span className={styles.statL}>Taux → Google</span><span className={styles.statV} style={{color:'var(--green)'}}>{stats.googleRate}%</span></div>
        <div className={styles.stat}><span className={styles.statL}>Feedbacks privés</span><span className={styles.statV} style={{color: stats.feedbackCount > 0 ? 'var(--amber)' : 'var(--text)'}}>{stats.feedbackCount}</span></div>
      </div>

      {/* LOW CREDITS WARNING */}
      {(profile?.credits || 0) < 10 && (
        <div className={styles.warning}>
          Il vous reste seulement {profile?.credits} crédit(s). <a href="/tarifs" style={{color:'var(--amber)', fontWeight:600}}>Rechargez maintenant →</a>
        </div>
      )}

      {/* SEND SMS */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Envoyer un SMS</h2>
        <p className={styles.cardSub}>Le patient recevra un lien pour noter sa consultation. Les avis positifs vont sur Google, les négatifs vous reviennent en privé.</p>

        <form onSubmit={handleSend} className={styles.sendForm}>
          <div className={styles.formRow}>
            {profile?.greeting_format === 'prenom' && (
              <div className={styles.field}>
                <label>Prénom du patient <span style={{color:'var(--muted2)',fontSize:'11px'}}>(optionnel)</span></label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ex : Marie" />
              </div>
            )}
            {['civilite_nom','madame_monsieur_nom'].includes(profile?.greeting_format) && (
              <>
                <div className={styles.field}>
                  <label>Civilité</label>
                  <select value={civility} onChange={e => setCivility(e.target.value)}>
                    <option value="M.">M.</option>
                    <option value="Mme">Mme</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Pr.">Pr.</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Nom du patient</label>
                  <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Ex : Dupont" />
                </div>
              </>
            )}
            <div className={styles.field}>
              <label>Numéro de téléphone</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ex : 06 12 34 56 78" required />
            </div>
          </div>
          <button type="submit" className="btn-primary" disabled={sending || (profile?.credits || 0) <= 0} style={{padding:'12px 24px'}}>
            {sending ? 'Envoi en cours...' : 'Envoyer le SMS →'}
          </button>
        </form>

        {result && (
          <div className={result.ok ? styles.resultOk : styles.resultErr}>
            {result.ok ? `✓ SMS envoyé avec succès` : `✗ ${result.error}`}
          </div>
        )}

        {/* PREVIEW */}
        {profile?.sms_template && (
          <div className={styles.preview}>
            <span className={styles.previewLabel}>Aperçu du SMS</span>
            <div className={styles.bubble}>
              {(() => {
                const civLong = civility === 'Mme' ? 'Madame' : civility === 'M.' ? 'Monsieur' : civility || '';
                const preview = (profile.sms_template || '')
                  .replace('{PRENOM}', name ? ` ${name}` : ' Marie')
                  .replace('{CIVILITE} {NOM}', civility && lastName ? `${civility} ${lastName}` : 'M. Dupont')
                  .replace('{CIVILITE_LONG} {NOM}', civLong && lastName ? `${civLong} ${lastName}` : 'Monsieur Dupont')
                  .replace('{CIVILITE}', civility || 'M.')
                  .replace('{NOM}', lastName || 'Dupont')
                  .replace('{FEEDBACK_URL}', 'reputo.fr/f/abc...')
                  .replace('{PATIENT}', name ? ` ${name}` : ' Marie')
                  .replace('{CABINET}', profile.cabinet_name || 'votre cabinet');
                const hasAccents = /[àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]/.test(preview);
                return (
                  <>
                    <span>{preview}</span>
                    {hasAccents && (
                      <div style={{marginTop:'8px', fontSize:'11px', color:'var(--amber)', background:'var(--amber-dim)', padding:'6px 10px', borderRadius:'var(--radius)'}}>
                        ⚠ Votre message contient des accents — comptera comme {Math.ceil(preview.length / 70)} SMS au lieu de 1
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>

      {/* PRIVATE FEEDBACKS */}
      <div className={styles.card}>
          <h2 className={styles.cardTitle}>Feedbacks privés reçus</h2>
          <p className={styles.cardSub}>Ces patients ont laissé une note inférieure à votre seuil. Uniquement visible par vous.</p>
          {feedbacks.length === 0 ? (
            <p style={{color:'var(--muted)', fontSize:'14px'}}>Aucun feedback privé pour l'instant. Les patients insatisfaits apparaîtront ici.</p>
          ) : (
          <div className={styles.feedbacks}>
            {feedbacks.map(fb => (
              <div key={fb.id} className={`${styles.feedbackItem} ${!fb.read ? styles.feedbackUnread : ''}`}>
                <div className={styles.feedbackHeader}>
                  <span className={styles.feedbackStars}>{'★'.repeat(fb.stars)}{'☆'.repeat(5 - fb.stars)}</span>
                  <span className={styles.feedbackDate}>{new Date(fb.created_at).toLocaleDateString('fr-FR')}</span>
                  {fb.patient_name && <span className={styles.feedbackName}>{fb.patient_name}</span>}
                </div>
                <p className={styles.feedbackText}>{fb.feedback_text}</p>
              </div>
            ))}
          </div>
          )}
        </div>

      {/* LOGS */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Derniers envois</h2>
        {logs.length === 0 ? (
          <p style={{color:'var(--muted)', fontSize:'14px'}}>Aucun SMS envoyé. Commencez ci-dessus.</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr>
                <th>Patient</th><th>Téléphone</th><th>Envoyé le</th><th>Résultat</th><th>Statut</th>
              </tr></thead>
              <tbody>
                {logs.map(l => (
                  <tr key={l.id}>
                    <td>{l.patient_name || '—'}</td>
                    <td style={{fontFamily:'monospace', fontSize:'12px'}}>{l.phone}</td>
                    <td>{new Date(l.sent_at).toLocaleDateString('fr-FR', {day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</td>
                    <td>
                      {l.feedback_type === 'google' && <span className={styles.badgeGreen}>→ Google</span>}
                      {l.feedback_type === 'private' && <span className={styles.badgeAmber}>→ Privé</span>}
                      {!l.feedback_type && l.stars && <span className={styles.badgeGray}>{'★'.repeat(l.stars)}</span>}
                      {!l.feedback_type && !l.stars && <span className={styles.badgeGray}>En attente</span>}
                    </td>
                    <td>
                      <span className={l.status === 'sent' ? styles.badgeGreen : styles.badgeRed}>
                        {l.status === 'sent' ? '✓ Envoyé' : '✗ Échec'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
