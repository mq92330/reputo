'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase';
import styles from './settings.module.css';

export default function SettingsPage() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ cabinet_name:'', google_review_url:'', sms_template:'', star_threshold:4 });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      if (data) {
        setProfile(data);
        setForm({
          cabinet_name: data.cabinet_name || '',
          google_review_url: data.google_review_url || '',
          sms_template: data.sms_template || '',
          star_threshold: data.star_threshold || 4,
        });
      }
    }
    load();
  }, []);

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('profiles').update(form).eq('id', user.id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const defaultTemplate = `Bonjour{PATIENT}, merci pour votre visite au {CABINET}. Comment s'est passée votre consultation ? {FEEDBACK_URL}`;
  const previewMsg = (form.sms_template || defaultTemplate)
    .replace('{PATIENT}', ' Marie')
    .replace('{CABINET}', form.cabinet_name || 'votre cabinet')
    .replace('{FEEDBACK_URL}', 'https://app.reputo.fr/feedback/abc123')
    .replace('{GOOGLE_URL}', 'https://app.reputo.fr/feedback/abc123');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Paramètres</h1>
      <p className={styles.sub}>Configurez votre cabinet, votre seuil de filtre et votre SMS</p>

      <form onSubmit={save} className={styles.form}>

        {/* CABINET */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Cabinet</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>Nom du cabinet</label>
              <input type="text" value={form.cabinet_name} onChange={e => setForm({...form, cabinet_name:e.target.value})} placeholder="Cabinet Médical Martin" />
            </div>
            <div className={styles.field}>
              <label>Lien Google Reviews</label>
              <input type="url" value={form.google_review_url} onChange={e => setForm({...form, google_review_url:e.target.value})} placeholder="https://g.page/votre-cabinet/review" />
              <span className={styles.hint}>Google Maps → votre fiche → "Demander des avis" → copiez le lien</span>
            </div>
          </div>
        </div>

        {/* STAR THRESHOLD */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Seuil de filtre</h2>
          <p className={styles.cardSub}>Les patients qui donnent cette note ou plus sont redirigés vers Google. En dessous, ils vous envoient un feedback privé.</p>

          <div className={styles.thresholdPicker}>
            {[1,2,3,4,5].map(n => (
              <button
                key={n}
                type="button"
                className={`${styles.thresholdBtn} ${form.star_threshold === n ? styles.thresholdActive : ''}`}
                onClick={() => setForm({...form, star_threshold:n})}
              >
                {n} ★
              </button>
            ))}
          </div>

          <div className={styles.thresholdExplain}>
            <div className={styles.thresholdRow} style={{background:'#DCFCE7'}}>
              <span style={{color:'#166534', fontWeight:600}}>≥ {form.star_threshold} étoiles</span>
              <span style={{color:'#166534'}}>→ Redirigé vers Google Reviews</span>
            </div>
            {form.star_threshold > 1 && (
              <div className={styles.thresholdRow} style={{background:'#FFFBEB'}}>
                <span style={{color:'#78350F', fontWeight:600}}>1 à {form.star_threshold - 1} étoile{form.star_threshold > 2 ? 's' : ''}</span>
                <span style={{color:'#78350F'}}>→ Feedback privé envoyé à vous</span>
              </div>
            )}
          </div>
        </div>

        {/* SMS TEMPLATE */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Modèle de SMS</h2>
          <p className={styles.cardSub}>
            Variables disponibles : <code>{'{PATIENT}'}</code> (prénom), <code>{'{CABINET}'}</code> (nom du cabinet), <code>{'{FEEDBACK_URL}'}</code> (lien de notation — obligatoire)
          </p>
          <div className={styles.field}>
            <label>Texte du SMS</label>
            <textarea
              className={styles.textarea}
              value={form.sms_template}
              onChange={e => setForm({...form, sms_template:e.target.value})}
              rows={4}
              placeholder={defaultTemplate}
            />
            <div className={styles.charCount}>
              <span style={{color:(form.sms_template||defaultTemplate).length > 160 ? 'var(--red)' : 'var(--muted2)'}}>
                {(form.sms_template||defaultTemplate).length} caractères
              </span>
              <span style={{color:'var(--muted2)'}}>
                {Math.ceil((form.sms_template||defaultTemplate).length/160)} SMS
              </span>
            </div>
          </div>

          <div className={styles.preview}>
            <span className={styles.previewLabel}>Aperçu</span>
            <div className={styles.bubble}>{previewMsg}</div>
          </div>
        </div>

        {/* CREDITS */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Crédits</h2>
          <div className={styles.creditsInfo}>
            <div>
              <span className={styles.creditsLabel}>Solde actuel</span>
              <span className={styles.creditsVal} style={{color:(profile?.credits||0) < 10 ? 'var(--red)' : 'var(--green)'}}>
                {profile?.credits ?? '—'} crédits
              </span>
            </div>
            <a href="/tarifs" className="btn-primary" style={{padding:'10px 20px', fontSize:'13px'}}>
              Acheter des crédits →
            </a>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="submit" className="btn-primary" disabled={saving} style={{padding:'12px 28px'}}>
            {saving ? 'Sauvegarde...' : 'Enregistrer les paramètres'}
          </button>
          {saved && <span className={styles.savedMsg}>✓ Paramètres enregistrés</span>}
        </div>
      </form>
    </div>
  );
}
