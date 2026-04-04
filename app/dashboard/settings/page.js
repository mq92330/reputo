'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase';
import styles from './settings.module.css';

const PROFESSIONS = [
  { value: 'medecin',       label: 'Médecin généraliste',      icon: '👨‍⚕️', titre: 'Dr.',  structure: 'Cabinet médical' },
  { value: 'dentiste',      label: 'Chirurgien-dentiste',       icon: '🦷', titre: 'Dr.',  structure: 'Cabinet dentaire' },
  { value: 'kine',          label: 'Kinésithérapeute',          icon: '💪', titre: '',     structure: 'Cabinet de kinésithérapie' },
  { value: 'osteo',         label: 'Ostéopathe',                icon: '🤲', titre: '',     structure: "Cabinet d'ostéopathie" },
  { value: 'infirmier',     label: 'Infirmier/ière libéral(e)', icon: '💉', titre: '',     structure: 'Cabinet infirmier' },
  { value: 'ophtalmo',      label: 'Ophtalmologue',             icon: '👁', titre: 'Dr.',  structure: "Cabinet d'ophtalmologie" },
  { value: 'psy',           label: 'Psychologue',               icon: '🧠', titre: '',     structure: 'Cabinet de psychologie' },
  { value: 'orthophoniste', label: 'Orthophoniste',             icon: '🗣', titre: '',     structure: "Cabinet d'orthophonie" },
  { value: 'sage_femme',    label: 'Sage-femme',                icon: '👶', titre: '',     structure: 'Cabinet de sage-femme' },
  { value: 'podologue',     label: 'Pédicure-podologue',        icon: '🦶', titre: '',     structure: 'Cabinet de podologie' },
  { value: 'pharmacien',    label: 'Pharmacien',                icon: '💊', titre: '',     structure: 'Pharmacie' },
  { value: 'autre',         label: 'Autre professionnel',       icon: '✚',  titre: '',     structure: 'Cabinet' },
];

const GREETINGS = [
  { value: 'prenom',              label: 'Prénom',            example: 'Bonjour Marie,',          desc: 'Simple · chaleureux',    req: 'prénom' },
  { value: 'civilite_nom',        label: 'M. / Mme + Nom',   example: 'Bonjour M. Dupont,',      desc: 'Formel · professionnel', req: 'civilité + nom' },
  { value: 'madame_monsieur_nom', label: 'Madame / Monsieur', example: 'Bonjour Madame Dupont,', desc: 'Très formel',            req: 'civilité + nom' },
  { value: 'generique',           label: 'Générique',         example: 'Bonjour,',                desc: 'Aucun champ requis',     req: null },
];

function buildTemplate(greetingVal, praticienLabel) {
  const opening = {
    prenom:              'Bonjour {PRENOM},',
    civilite_nom:        'Bonjour {CIVILITE} {NOM},',
    madame_monsieur_nom: 'Bonjour {CIVILITE_LONG} {NOM},',
    generique:           'Bonjour,',
  }[greetingVal] || 'Bonjour,';
  return `${opening} merci pour votre visite. Comment s'est passée votre consultation ? {FEEDBACK_URL}\n— ${praticienLabel}`;
}

function previewTemplate(tpl) {
  return tpl
    .replace('{PRENOM}', 'Marie')
    .replace('{CIVILITE} {NOM}', 'M. Dupont')
    .replace('{CIVILITE_LONG} {NOM}', 'Madame Dupont')
    .replace('{CIVILITE}', 'M.')
    .replace('{NOM}', 'Dupont')
    .replace('{FEEDBACK_URL}', 'reputo.fr/f/a3b…');
}

export default function SettingsPage() {
  const supabase = createClient();
  const [form, setForm] = useState({
    profession: 'medecin', cabinet_name: '', praticien_name: '',
    google_review_url: '', greeting_format: 'prenom',
    sms_template: '', star_threshold: 4,
  });
  const [profile, setProfile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      if (data) {
        setProfile(data);
        setForm({
          profession: data.profession || 'medecin',
          cabinet_name: data.cabinet_name || '',
          praticien_name: data.praticien_name || '',
          google_review_url: data.google_review_url || '',
          greeting_format: data.greeting_format || 'prenom',
          sms_template: data.sms_template || '',
          star_threshold: data.star_threshold || 4,
        });
      }
    })();
  }, []);

  const prof = PROFESSIONS.find(p => p.value === form.profession) || PROFESSIONS[0];
  const praticienLabel = form.praticien_name
    ? (prof.titre ? `${prof.titre} ${form.praticien_name}` : form.praticien_name)
    : (form.cabinet_name || prof.structure);

  function applyChanges(patch) {
    const next = { ...form, ...patch };
    const p = PROFESSIONS.find(x => x.value === next.profession) || PROFESSIONS[0];
    const pl = next.praticien_name
      ? (p.titre ? `${p.titre} ${next.praticien_name}` : next.praticien_name)
      : (next.cabinet_name || p.structure);
    setForm({ ...next, sms_template: buildTemplate(next.greeting_format, pl) });
  }

  const rawTpl = form.sms_template || buildTemplate(form.greeting_format, praticienLabel);
  const tpl = rawTpl.slice(0, 160);
  const preview = previewTemplate(tpl);
  const charCount = tpl.length;

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('profiles').update({ ...form, sms_template: tpl }).eq('id', user.id);
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Paramètres</h1>
      <p className={styles.sub}>Configurez votre profil et personnalisez vos SMS</p>

      <form onSubmit={save} className={styles.form}>

        {/* PROFESSION */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Votre profession</h2>
          <p className={styles.cardSub}>Adapte le vocabulaire et les suggestions dans toute l'application.</p>
          <div className={styles.profGrid}>
            {PROFESSIONS.map(p => (
              <button key={p.value} type="button"
                className={`${styles.profBtn} ${form.profession === p.value ? styles.profActive : ''}`}
                onClick={() => applyChanges({ profession: p.value })}>
                <span style={{ fontSize: '20px' }}>{p.icon}</span>
                <span className={styles.profLabel}>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* IDENTITÉ */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Votre identité</h2>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label>Nom de votre {prof.structure.toLowerCase().replace("cabinet d'", '').replace('cabinet de ', '').replace('cabinet ', '')}</label>
              <input type="text" value={form.cabinet_name}
                onChange={e => setForm({ ...form, cabinet_name: e.target.value })}
                placeholder={`Ex : ${prof.structure} Martin`} />
              <span className={styles.hint}>Affiché sur la page de notation du patient</span>
            </div>
            <div className={styles.field}>
              <label>Votre nom {prof.titre && <span className={styles.hintInline}>(sans "{prof.titre}")</span>}</label>
              <input type="text" value={form.praticien_name}
                onChange={e => applyChanges({ praticien_name: e.target.value })}
                placeholder="Ex : Martin" />
              <span className={styles.hint}>
                Signature SMS : <strong className={styles.sigPreview}>{praticienLabel}</strong>
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label>Lien Google Reviews</label>
            <input type="url" value={form.google_review_url}
              onChange={e => setForm({ ...form, google_review_url: e.target.value })}
              placeholder="https://g.page/votre-cabinet/review" />
            <span className={styles.hint}>
              Google Maps → votre fiche → "Demander des avis" → copier le lien
            </span>
          </div>
        </div>

        {/* SALUTATION */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Formule de salutation</h2>
          <p className={styles.cardSub}>Détermine quelles informations votre équipe devra saisir lors de l'envoi du SMS.</p>
          <div className={styles.greetingGrid}>
            {GREETINGS.map(g => (
              <button key={g.value} type="button"
                className={`${styles.greetingBtn} ${form.greeting_format === g.value ? styles.greetingActive : ''}`}
                onClick={() => applyChanges({ greeting_format: g.value })}>
                <span className={styles.greetingEx}>{g.example}</span>
                <span className={styles.greetingLbl}>{g.label}</span>
                <span className={styles.greetingDesc}>{g.desc}</span>
                {g.req && <span className={styles.greetingReq}>Champ requis : {g.req}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* SMS */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Modèle de SMS</h2>
          <p className={styles.cardSub}>Généré automatiquement. Modifiable librement.</p>

          <div className={styles.varsRow}>
            {['{PRENOM}', '{NOM}', '{CIVILITE}', '{CIVILITE_LONG}', '{FEEDBACK_URL}'].map(v => (
              <code key={v} className={styles.varChip}>{v}</code>
            ))}
          </div>

          <div className={styles.field} style={{ marginTop: '12px' }}>
            <textarea value={tpl}
              onChange={e => {
                if (e.target.value.length <= 160) setForm({ ...form, sms_template: e.target.value });
              }}
              rows={5}
              maxLength={160}
              placeholder="Votre message SMS..." />
            <div className={styles.charCount}>
              <span style={{ color: charCount >= 150 ? 'var(--red)' : charCount >= 130 ? 'var(--amber)' : 'var(--muted2)', fontWeight: charCount >= 150 ? 600 : 400 }}>
                {charCount} / 160 car.
              </span>
              <span style={{ color: charCount > 160 ? 'var(--red)' : 'var(--muted2)' }}>
                {charCount > 160 ? '⚠ Trop long — sera coupé' : '1 SMS'}
              </span>
              <button type="button" className={styles.resetBtn} onClick={() => applyChanges({})}>
                ↺ Régénérer
              </button>
            </div>
            {charCount >= 150 && (
              <div className={styles.charWarning}>
                {charCount === 160
                  ? '✗ Limite atteinte (160 car.) — le lien {FEEDBACK_URL} sera raccourci automatiquement.'
                  : `⚠ Plus que ${160 - charCount} caractère${160 - charCount > 1 ? 's' : ''} disponible${160 - charCount > 1 ? 's' : ''}.`}
              </div>
            )}
          </div>

          {/* PHONE PREVIEW */}
          <div className={styles.previewWrap}>
            <span className={styles.previewLabel}>Aperçu — tel que reçu par le patient</span>
            <div className={styles.phoneMock}>
              <div className={styles.phoneSender}>{form.cabinet_name || prof.structure}</div>
              <div className={styles.phoneBubble}>{preview}</div>
              <div className={styles.phoneTime}>Il y a quelques secondes</div>
            </div>
          </div>
        </div>

        {/* SEUIL */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Seuil de filtre</h2>
          <p className={styles.cardSub}>À partir de cette note, le patient est redirigé vers Google. En dessous : feedback privé uniquement.</p>
          <div className={styles.thresholdPicker}>
            {[1, 2, 3, 4, 5].map(n => (
              <button key={n} type="button"
                className={`${styles.threshBtn} ${form.star_threshold === n ? styles.threshActive : ''}`}
                onClick={() => setForm({ ...form, star_threshold: n })}>
                <span className={styles.threshN}>{n}</span>
                <span className={styles.threshS}>★</span>
              </button>
            ))}
          </div>
          <div className={styles.threshExplain}>
            <div className={styles.threshRow} style={{ background: '#DCFCE7', borderLeft: '3px solid #059669' }}>
              <span style={{ color: '#166534', fontWeight: 600 }}>≥ {form.star_threshold} ★</span>
              <span style={{ color: '#166534' }}>→ Redirigé vers Google Reviews</span>
            </div>
            {form.star_threshold > 1 && (
              <div className={styles.threshRow} style={{ background: '#FFFBEB', borderLeft: '3px solid #D97706' }}>
                <span style={{ color: '#78350F', fontWeight: 600 }}>&lt; {form.star_threshold} ★</span>
                <span style={{ color: '#78350F' }}>→ Feedback privé vers vous</span>
              </div>
            )}
          </div>
        </div>

        {/* CRÉDITS */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Crédits SMS</h2>
          <div className={styles.creditsRow}>
            <div>
              <span className={styles.creditsLbl}>Solde actuel</span>
              <span className={styles.creditsVal}
                style={{ color: (profile?.credits || 0) < 10 ? 'var(--red)' : 'var(--green)' }}>
                {profile?.credits ?? '—'} crédits
              </span>
            </div>
            <a href="/tarifs" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
              Acheter des crédits →
            </a>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="submit" className="btn-primary" disabled={saving} style={{ padding: '12px 28px' }}>
            {saving ? 'Enregistrement...' : 'Enregistrer les paramètres'}
          </button>
          {saved && <span className={styles.savedMsg}>✓ Paramètres enregistrés</span>}
        </div>
      </form>
    </div>
  );
}
