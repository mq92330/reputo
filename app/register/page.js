'use client';
import { useState } from 'react';
import { createClient } from '../../lib/supabase';
import { useRouter } from 'next/navigation';
import styles from '../login/auth.module.css';

export default function RegisterPage() {
  const [cabinetName, setCabinetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: authErr } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { cabinet_name: cabinetName } },
    });

    if (authErr) { setError(authErr.message); setLoading(false); return; }

    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        cabinet_name: cabinetName,
        star_threshold: 4,
        credits: 5,
        sms_template: `Bonjour{PRENOM}, merci pour votre visite. Votre avis nous aide. Notez votre expérience : {FEEDBACK_URL}`,
      });
    }

    router.push('/dashboard');
  }

  return (
    <div className={styles.page}>
      <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
      <div className={styles.card}>
        <h1 className={styles.title}>Créer votre compte</h1>
        <p className={styles.sub}>5 SMS offerts · Aucun engagement</p>
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.field}><label>Nom du cabinet</label><input type="text" value={cabinetName} onChange={e => setCabinetName(e.target.value)} placeholder="Cabinet Médical Martin" required /></div>
          <div className={styles.field}><label>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required /></div>
          <div className={styles.field}><label>Mot de passe</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required minLength={8} /></div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className="btn-primary" style={{width:'100%', padding:'12px'}} disabled={loading}>
            {loading ? 'Création...' : 'Créer mon compte →'}
          </button>
        </form>
        <p className={styles.switch}>Déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  );
}
