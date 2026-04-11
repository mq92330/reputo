'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase';
import styles from '../dash.module.css';

export default function FeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('patient_feedbacks').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      setFeedbacks(data || []);
      const unread = (data || []).filter(f => !f.read).map(f => f.id);
      if (unread.length > 0) await supabase.from('patient_feedbacks').update({ read: true }).in('id', unread);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Feedbacks privés</h1>
          <p className={styles.sub}>Patients ayant laissé une note inférieure à votre seuil. Visible uniquement par vous.</p>
        </div>
      </div>
      <div className={styles.card}>
        {loading ? (
          <p style={{color:'var(--muted)', fontSize:'14px'}}>Chargement...</p>
        ) : feedbacks.length === 0 ? (
          <p style={{color:'var(--muted)', fontSize:'14px'}}>Aucun feedback privé pour l'instant. Les patients insatisfaits apparaîtront ici.</p>
        ) : (
          <div className={styles.feedbacks}>
            {feedbacks.map(fb => (
              <div key={fb.id} className={`${styles.feedbackItem} ${!fb.read ? styles.feedbackUnread : ''}`}>
                <div className={styles.feedbackHeader}>
                  <span className={styles.feedbackStars}>{'★'.repeat(fb.stars)}{'☆'.repeat(5 - fb.stars)}</span>
                  <span className={styles.feedbackDate}>{new Date(fb.created_at).toLocaleDateString('fr-FR', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'})}</span>
                  {fb.patient_name && <span className={styles.feedbackName}>{fb.patient_name}</span>}
                  {!fb.read && <span className={styles.badgeAmber}>Nouveau</span>}
                </div>
                <p className={styles.feedbackText}>{fb.feedback_text || '(aucun message)'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
