import styles from './blog.module.css';

export const metadata = {
  title: 'Blog — Avis Google pour professionnels de santé | Reputo',
  description: 'Guides pratiques et cas concrets pour booster votre réputation Google en tant que professionnel de santé libéral.',
};

const general = [
  { slug: 'avis-google-sante',       title: "Avis Google et professionnels de santé : ce que disent les chiffres 2025",           desc: "Guide complet pour collecter des avis Google automatiquement après chaque consultation.", tag: 'Médecins' },
  { slug: 'comment-collecter-avis-google-cabinet',       title: "Comment collecter des avis Google pour votre cabinet : le guide complet 2025",                    desc: "Stratégie complète pour les dentistes malgré les contraintes déontologiques.", tag: 'Dentistes' },
  { slug: 'secret-medical-avis-google',  title: "Secret médical et avis Google : comment se protéger légalement",       desc: "Secret médical et avis Google : la stratégie légale pour protéger votre réputation.", tag: 'E-réputation' },
];

const professions = [
  { slug: 'reputo-medecin-generaliste', title: "Médecin généraliste",      desc: "30 consultations/jour → 67 avis en 2 mois. Comment le Dr. Martin a transformé sa réputation.", icon: '👨‍⚕️', stat: '+200% avis' },
  { slug: 'reputo-dentiste',            title: "Chirurgien-dentiste",       desc: "132 avis à 4,8/5 en 3 mois. Comment ce cabinet dentaire a maîtrisé sa réputation Google.", icon: '🦷', stat: '132 avis' },
  { slug: 'reputo-kinesitherapeute',    title: "Kinésithérapeute",          desc: "Cabinet complet avec liste d'attente. 89 avis en 2,5 mois, première position Google Maps.", icon: '💪', stat: '89 avis' },
  { slug: 'reputo-osteopathe',          title: "Ostéopathe",                desc: "+70% de nouveaux patients en 6 semaines. Comment Reputo génère 1 500€/mois de CA supplémentaire.", icon: '🤲', stat: '+70% patients' },
  { slug: 'reputo-infirmier-liberal',   title: "Infirmier libéral",         desc: "41 avis 5 étoiles pour une IDEL en mobilité. Workflow adapté aux tournées à domicile.", icon: '💉', stat: '41 avis 5★' },
  { slug: 'reputo-ophtalmo',            title: "Ophtalmologue",             desc: "Note passée de 3,2 à 4,5/5 en 2 mois. Comment gérer les avis liés aux délais d'attente.", icon: '👁', stat: '3,2 → 4,5/5' },
  { slug: 'reputo-psychologue',         title: "Psychologue",               desc: "+60% de nouvelles demandes. Comment développer sa réputation tout en respectant la confidentialité.", icon: '🧠', stat: '+60% demandes' },
  { slug: 'reputo-orl',                 title: "ORL",                       desc: "+55% de nouveaux patients. 78 avis en 2 mois pour un ORL libéral à Bordeaux.", icon: '👂', stat: '+55% patients' },
  { slug: 'reputo-pharmacien',          title: "Pharmacien",                desc: "103 avis à 4,9/5. Comment une pharmacie indépendante devient la mieux notée de sa ville.", icon: '💊', stat: '4,9/5' },
  { slug: 'reputo-opticien',            title: "Opticien indépendant",      desc: "156 avis en 4 mois. Dépasser les grandes enseignes grâce aux avis Google.", icon: '👓', stat: '156 avis' },
];

export default function BlogPage() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/" className={styles.back}>← Accueil</a>
      </nav>

      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Blog</div>
          <h1>Guides & cas concrets</h1>
          <p>Tout ce qu'il faut savoir sur les avis Google et la réputation en ligne médicale.</p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Guides généraux</h2>
          <div className={styles.grid}>
            {general.map(a => (
              <a key={a.slug} href={`/blog/${a.slug}`} className={styles.articleCard}>
                <span className={styles.tag}>{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className={styles.readMore}>Lire l'article →</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Par profession</h2>
          <p className={styles.sectionDesc}>Un cas concret pour chaque profession — chiffres réels, workflow détaillé, résultats mesurables.</p>
          <div className={styles.profGrid}>
            {professions.map(a => (
              <a key={a.slug} href={`/blog/${a.slug}`} className={styles.profCard}>
                <div className={styles.profCardHeader}>
                  <span style={{fontSize:'28px'}}>{a.icon}</span>
                  <span className={styles.profStat}>{a.stat}</span>
                </div>
                <h3 className={styles.profCardTitle}>{a.title}</h3>
                <p className={styles.profCardDesc}>{a.desc}</p>
                <span className={styles.readMore}>Lire le cas →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
