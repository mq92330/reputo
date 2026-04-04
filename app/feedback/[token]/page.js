'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './feedback.module.css';

export default function FeedbackPage() {
  const params = useParams();
  const token = params.token;

  const [step, setStep] = useState('rating'); // rating | good | bad | done
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Load token data on mount
  useState(() => {
    async function loadToken() {
      try {
        const res = await fetch(`/api/feedback?token=${token}`);
        const json = await res.json();
        if (json.ok) {
          setData(json);
          setLoaded(true);
        } else {
          setError('Lien invalide ou expiré.');
          setLoaded(true);
        }
      } catch {
        setError('Erreur de chargement.');
        setLoaded(true);
      }
    }
    loadToken();
  }, [token]);

  async function handleStarSubmit() {
    if (!selected) return;
    const threshold = data?.threshold || 4;

    setSubmitting(true);

    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, stars: selected, type: 'rating' }),
    });

    setSubmitting(false);

    if (selected >= threshold) {
      // Redirect to Google
      setStep('good');
      setTimeout(() => {
        window.location.href = data?.google_url || 'https://g.page/review';
      }, 1500);
    } else {
      setStep('bad');
    }
  }

  async function handleFeedbackSubmit() {
    if (!feedback.trim()) return;
    setSubmitting(true);

    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, stars: selected, feedback, type: 'feedback' }),
    });

    setSubmitting(false);
    setStep('done');
  }

  const labels = ['', 'Très insatisfait', 'Insatisfait', 'Correct', 'Satisfait', 'Très satisfait'];

  if (!loaded) return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.loading}>Chargement...</div>
      </div>
    </div>
  );

  if (error) return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.errorMsg}>{error}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.reputoLogo}>
          <span className={styles.reputoMark}>R</span>
          Reputo
        </div>

        {/* STEP: RATING */}
        {step === 'rating' && (
          <>
            <div className={styles.cabinetName}>{data?.cabinet_name || 'Votre cabinet'}</div>
            <h1 className={styles.question}>Comment s'est passée votre consultation ?</h1>
            <p className={styles.sub}>Votre avis nous aide à améliorer notre service</p>

            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(s => (
                <button
                  key={s}
                  className={`${styles.star} ${(hovered || selected) >= s ? styles.starActive : ''}`}
                  onMouseEnter={() => setHovered(s)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setSelected(s)}
                >
                  ★
                </button>
              ))}
            </div>

            {(hovered || selected) > 0 && (
              <div className={styles.starLabel}>{labels[hovered || selected]}</div>
            )}

            <button
              className="btn-primary"
              style={{ width: '100%', padding: '13px', marginTop: '24px', fontSize: '15px' }}
              onClick={handleStarSubmit}
              disabled={!selected || submitting}
            >
              {submitting ? 'Envoi...' : 'Valider mon avis →'}
            </button>
          </>
        )}

        {/* STEP: GOOD → REDIRECT */}
        {step === 'good' && (
          <div className={styles.resultGood}>
            <div className={styles.resultIcon}>🎉</div>
            <h2>Merci pour votre retour !</h2>
            <p>Vous allez être redirigé vers Google pour laisser votre avis...</p>
            <div className={styles.redirectBar}></div>
          </div>
        )}

        {/* STEP: BAD → PRIVATE FEEDBACK */}
        {step === 'bad' && (
          <>
            <div className={styles.resultBadHeader}>
              <div className={styles.resultIcon}>🙏</div>
              <h2>Merci pour votre honnêteté</h2>
              <p>Dites-nous comment nous aurions pu mieux faire. Votre message est privé et va directement au praticien.</p>
            </div>

            <textarea
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="Décrivez votre expérience..."
              rows={5}
              style={{ marginTop: '16px' }}
            />

            <button
              className="btn-primary"
              style={{ width: '100%', padding: '13px', marginTop: '12px', fontSize: '15px' }}
              onClick={handleFeedbackSubmit}
              disabled={!feedback.trim() || submitting}
            >
              {submitting ? 'Envoi...' : 'Envoyer mon feedback →'}
            </button>
          </>
        )}

        {/* STEP: DONE */}
        {step === 'done' && (
          <div className={styles.resultGood}>
            <div className={styles.resultIcon}>✓</div>
            <h2>Message envoyé</h2>
            <p>Votre retour a bien été transmis au cabinet. Merci pour votre temps.</p>
          </div>
        )}

        <div className={styles.poweredBy}>Propulsé par <a href="https://reputo.fr" style={{color:'var(--blue)'}}>Reputo</a></div>
      </div>
    </div>
  );
}
