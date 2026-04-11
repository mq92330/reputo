'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase';
import styles from '../dash.module.css';

export default function EnvoisPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('sms_logs').select('*').eq('user_id', user.id).order('sent_at', { ascending: false });
      setLogs(data || []);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Derniers envois</h1>
          <p className={styles.sub}>Historique complet de tous vos SMS envoyés.</p>
        </div>
      </div>
      <div className={styles.card}>
        {loading ? (
          <p style={{color:'var(--muted)', fontSize:'14px'}}>Chargement...</p>
        ) : logs.length === 0 ? (
          <p style={{color:'var(--muted)', fontSize:'14px'}}>Aucun SMS envoyé pour l'instant.</p>
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
                    <td>{new Date(l.sent_at).toLocaleDateString('fr-FR', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</td>
                    <td>
                      {l.feedback_type === 'google' && <span className={styles.badgeGreen}>→ Google</span>}
                      {l.feedback_type === 'private' && <span className={styles.badgeAmber}>→ Privé</span>}
                      {!l.feedback_type && <span className={styles.badgeGray}>En attente</span>}
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
