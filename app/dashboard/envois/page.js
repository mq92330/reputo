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
          <div style={{background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'var(--radius-lg)', overflow:'hidden'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr 1.2fr 1fr 1fr', padding:'0 16px 10px', borderBottom:'1px solid var(--border)', marginTop:'12px'}}>
              {['Patient','Téléphone','Envoyé le','Résultat','Statut'].map(h => (
                <span key={h} style={{fontSize:'11px', fontWeight:600, color:'var(--muted2)', textTransform:'uppercase', letterSpacing:'0.5px'}}>{h}</span>
              ))}
            </div>
            {logs.map(l => {
              const initials = (l.patient_name || '?').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
              return (
                <div key={l.id} style={{display:'grid', gridTemplateColumns:'1fr 1.2fr 1.2fr 1fr 1fr', padding:'12px 16px', borderBottom:'1px solid var(--border)', alignItems:'center', fontSize:'13px', color:'var(--muted)'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <div style={{width:'28px', height:'28px', borderRadius:'50%', background:'var(--blue-dim)', color:'var(--blue)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:600, flexShrink:0}}>{initials}</div>
                    <span style={{fontWeight:500, color:'var(--text)'}}>{l.patient_name || '—'}</span>
                  </div>
                  <span style={{fontFamily:'monospace', fontSize:'12px'}}>{l.phone}</span>
                  <span style={{fontSize:'12px'}}>{new Date(l.sent_at).toLocaleDateString('fr-FR', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                  <span>
                    {l.feedback_type === 'google' && <span style={{background:'#DCFCE7', color:'#166534', padding:'3px 10px', borderRadius:'100px', fontSize:'11px', fontWeight:500}}>Google</span>}
                    {l.feedback_type === 'private' && <span style={{background:'#FEF9C3', color:'#713F12', padding:'3px 10px', borderRadius:'100px', fontSize:'11px', fontWeight:500}}>Privé</span>}
                    {!l.feedback_type && <span style={{background:'var(--surface)', color:'var(--muted)', padding:'3px 10px', borderRadius:'100px', fontSize:'11px', border:'1px solid var(--border)'}}>En attente</span>}
                  </span>
                  <span>
                    {l.status === 'sent'
                      ? <span style={{background:'#DCFCE7', color:'#166534', padding:'3px 10px', borderRadius:'100px', fontSize:'11px', fontWeight:500}}>Envoyé</span>
                      : <span style={{background:'#FEE2E2', color:'#7F1D1D', padding:'3px 10px', borderRadius:'100px', fontSize:'11px', fontWeight:500}}>Échec</span>}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
