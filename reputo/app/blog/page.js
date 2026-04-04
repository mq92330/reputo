import styles from './blog.module.css';

export const metadata = {
  title: 'Ressources — Avis Google pour professionnels de santé | Reputo',
  description: 'Guides pratiques pour booster votre réputation en ligne : avis Google, gestion des avis négatifs, e-réputation médicale.',
};

const articles = [
  {
    slug: 'avis-google-medecin',
    title: 'Comment obtenir plus d\'avis Google pour son cabinet médical',
    desc: 'Guide complet pour collecter des avis Google automatiquement après chaque consultation, sans effort pour votre secrétaire.',
    tag: 'Médecins',
    readTime: '4 min',
  },
  {
    slug: 'avis-google-dentiste',
    title: 'Avis Google pour cabinet dentaire : le guide 2026',
    desc: 'Stratégie complète pour les chirurgiens-dentistes : collecter des avis positifs, gérer les négatifs, et améliorer son classement local.',
    tag: 'Dentistes',
    readTime: '5 min',
  },
  {
    slug: 'gerer-avis-negatif-google',
    title: 'Comment gérer un avis Google négatif en tant que professionnel de santé',
    desc: 'Techniques et outils pour filtrer les avis négatifs avant publication et transformer les insatisfaits en retours constructifs.',
    tag: 'E-réputation',
    readTime: '4 min',
  },
];

export default function BlogPage() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/" className={styles.back}>← Retour</a>
      </nav>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Ressources</div>
          <h1>Guides pour professionnels de santé</h1>
          <p>Tout ce qu'il faut savoir sur les avis Google et la réputation en ligne médicale.</p>
        </div>
        <div className={styles.grid}>
          {articles.map(a => (
            <a key={a.slug} href={`/blog/${a.slug}`} className={styles.articleCard}>
              <span className={styles.tag}>{a.tag}</span>
              <h2>{a.title}</h2>
              <p>{a.desc}</p>
              <span className={styles.readMore}>Lire l'article · {a.readTime} →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
