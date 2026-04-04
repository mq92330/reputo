'use client';
import { useState } from 'react';
import { createClient } from '../../lib/supabase';
import { useRouter } from 'next/navigation';
import styles from './auth.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError('Email ou mot de passe incorrect.'); setLoading(false); }
    else router.push('/dashboard');
  }

  return (
    <div className={styles.page}>
      <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
      <div className={styles.card}>
        <h1 className={styles.title}>Connexion</h1>
        <p className={styles.sub}>Accédez à votre tableau de bord</p>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.field}><label>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required /></div>
          <div className={styles.field}><label>Mot de passe</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required /></div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className="btn-primary" style={{width:'100%', padding:'12px'}} disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter →'}
          </button>
        </form>
        <p className={styles.switch}>Pas encore de compte ? <a href="/register">Créer un compte</a></p>
      </div>
    </div>
  );
}
