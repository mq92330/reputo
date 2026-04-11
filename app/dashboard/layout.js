'use client';
import { useEffect, useState } from 'react';
import { createClient } from '../../lib/supabase';
import { useRouter, usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function DashboardLayout({ children }) {
  const [profile, setProfile] = useState(null);
  const supabase = createClient();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      const { data } = await supabase.from('profiles').select('cabinet_name, credits').eq('id', user.id).single();
      setProfile(data);
    }
    load();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  const nav = [
    { href: '/dashboard', label: 'Tableau de bord', icon: '' },
    { href: '/dashboard/feedbacks', label: 'Feedbacks privés', icon: '' },
    { href: '/dashboard/envois', label: 'Derniers envois', icon: '' },
    { href: '/dashboard/settings', label: 'Paramètres', icon: '' },
  ];

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sideTop}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>R</span>
            Reputo
          </a>
          <div className={styles.cabinetName}>{profile?.cabinet_name || '...'}</div>
        </div>

        <nav className={styles.nav}>
          {nav.map(n => (
            <a
              key={n.href}
              href={n.href}
              className={`${styles.navItem} ${path === n.href ? styles.active : ''}`}
            >
              <span className={styles.navIcon}>{n.icon}</span>
              {n.label}
            </a>
          ))}
        </nav>

        <div className={styles.sideBottom}>
          <div className={styles.creditsChip}>
            <span>{profile?.credits ?? '—'}</span>
            <span>crédits</span>
          </div>
          <a href="/tarifs" className={styles.rechargeLink}>Recharger →</a>
          <button onClick={logout} className={styles.logoutBtn}>Déconnexion</button>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
