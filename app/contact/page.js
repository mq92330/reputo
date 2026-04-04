'use client';
import { useState } from 'react';
import styles from '../login/auth.module.css';
import pageStyles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setError('Erreur lors de l\'envoi. Réessayez ou écrivez directement à contact@reputo.fr');
      }
    } catch {
      setError('Erreur réseau. Écrivez directement à contact@reputo.fr');
    }
    setSending(false);
  }

  return (
    <div className={pageStyles.page}>
      <nav className={pageStyles.nav}>
        <a href="/" className={pageStyles.logo}>
          <span className={pageStyles.logoMark}>R</span>Reputo
        </a>
        <a href="/" className={pageStyles.back}>← Retour</a>
      </nav>

      <div className={pageStyles.content}>
        <div className={pageStyles.header}>
          <h1>Contact</h1>
          <p>Une question, un partenariat ou une démo ? On vous répond sous 24h.</p>
        </div>

        <div className={pageStyles.grid}>
          <div className={pageStyles.info}>
            <div className={pageStyles.infoItem}>
              <span className={pageStyles.infoIcon}>✉</span>
              <div>
                <div className={pageStyles.infoLabel}>Email</div>
                <a href="mailto:contact@reputo.fr" className={pageStyles.infoValue}>contact@reputo.fr</a>
              </div>
            </div>
            <div className={pageStyles.infoItem}>
              <span className={pageStyles.infoIcon}>⏱</span>
              <div>
                <div className={pageStyles.infoLabel}>Délai de réponse</div>
                <div className={pageStyles.infoValue}>Sous 24h ouvrées</div>
              </div>
            </div>
            <div className={pageStyles.infoItem}>
              <span className={pageStyles.infoIcon}>◎</span>
              <div>
                <div className={pageStyles.infoLabel}>Basé en</div>
                <div className={pageStyles.infoValue}>France</div>
              </div>
            </div>
          </div>

          {sent ? (
            <div className={pageStyles.successCard}>
              <div className={pageStyles.successIcon}>✓</div>
              <h2>Message envoyé !</h2>
              <p>Nous vous répondrons dans les 24 heures ouvrées.</p>
              <a href="/" className={pageStyles.backLink}>← Retour à l'accueil</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={pageStyles.form}>
              <div className={pageStyles.formRow}>
                <div className={pageStyles.field}>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. Martin"
                    required
                  />
                </div>
                <div className={pageStyles.field}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div className={pageStyles.field}>
                <label>Sujet</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="Question sur les tarifs, demande de démo..."
                  required
                />
              </div>
              <div className={pageStyles.field}>
                <label>Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre demande..."
                  rows={5}
                  required
                />
              </div>
              {error && <div className={pageStyles.error}>{error}</div>}
              <button type="submit" className="btn-primary" disabled={sending} style={{ padding: '12px 28px', fontSize: '14px' }}>
                {sending ? 'Envoi...' : 'Envoyer le message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
