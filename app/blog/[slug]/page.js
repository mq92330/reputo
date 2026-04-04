import styles from '../blog.module.css';

const articles = {
  'avis-google-medecin': {
    title: "Comment obtenir plus d'avis Google pour son cabinet médical",
    tag: 'Médecins',
    meta: "Guide pratique pour médecins généralistes : comment collecter des avis Google automatiquement après chaque consultation avec un SMS.",
    content: [
      { h2: "Pourquoi les avis Google sont devenus incontournables pour les médecins", p: "En France, plus de 7 patients sur 10 consultent les avis en ligne avant de choisir un nouveau médecin. Google My Business est devenu le premier point de contact entre un patient et un cabinet médical. Un cabinet avec 50 avis à 4,8/5 attire naturellement plus de nouveaux patients qu'un concurrent sans avis — même si la qualité des soins est identique." },
      { h2: "Le problème : demander un avis est gênant et chronophage", p: "La plupart des médecins n'osent pas demander à leurs patients de laisser un avis. Et même quand ils le font, le patient oublie. C'est humain. La solution est d'automatiser la demande avec un SMS envoyé juste après la consultation, quand le patient est encore dans la dynamique de la visite." },
      { h2: "Le filtre étoiles : la clé pour ne publier que les bons avis", p: "L'erreur classique est d'envoyer tous les patients directement sur Google. Un patient sur cinq est insatisfait pour des raisons qui ne dépendent pas du médecin (attente, prix, parking...). Avec un système de filtre par étoiles, seuls les patients qui notent 4 ou 5 étoiles sont redirigés vers Google. Les autres vous envoient un message privé que vous seul lisez." },
      { h2: "Comment Reputo automatise ce processus en 5 secondes", p: "Après chaque consultation, votre secrétaire saisit le numéro du patient dans Reputo. Le SMS part automatiquement avec le nom de votre cabinet. Le patient clique, choisit ses étoiles. S'il est satisfait, il atterrit sur votre fiche Google. S'il est déçu, son message vous arrive en privé. Vous gardez le contrôle total de votre réputation en ligne." },
      { h2: "Résultats observés", p: "Les cabinets médicaux utilisant ce type de système constatent en moyenne +200% d'avis Google en 3 mois, avec une note moyenne de 4,7/5. L'impact sur l'acquisition de nouveaux patients est direct et mesurable dès les premières semaines." },
    ]
  },
  'avis-google-dentiste': {
    title: "Avis Google pour cabinet dentaire : le guide 2026",
    tag: 'Dentistes',
    meta: "Stratégie complète pour les chirurgiens-dentistes en 2026 : comment collecter des avis Google positifs malgré les contraintes déontologiques.",
    content: [
      { h2: "Le contexte particulier des dentistes en 2026", p: "L'Ordre des chirurgiens-dentistes a saisi le Ministère de la Santé en 2025 pour demander la suppression des avis Google sur les praticiens. La DGOS a rendu un avis favorable. Dans ce contexte incertain, les dentistes qui agissent maintenant pour construire un stock d'avis positifs se donnent une avance décisive — quelle que soit l'issue réglementaire." },
      { h2: "Les contraintes déontologiques et le secret médical", p: "Le principal frein des chirurgiens-dentistes face aux avis Google est l'impossibilité de répondre publiquement à un avis négatif sans violer le secret médical. C'est précisément pourquoi un système de filtrage en amont est encore plus utile pour les dentistes : les patients insatisfaits vous écrivent en privé, vous pouvez y répondre directement, sans jamais compromettre la confidentialité." },
      { h2: "Le bon moment pour demander un avis", p: "Juste après la consultation est le meilleur moment. Le patient est encore dans la dynamique de la visite. Le SMS doit partir dans l'heure qui suit. Évitez le lendemain ou le surlendemain : le taux de réponse chute de 60%." },
      { h2: "Quel seuil d'étoiles choisir pour un cabinet dentaire ?", p: "Pour un cabinet dentaire, nous recommandons un seuil de 4 étoiles (réglage par défaut dans Reputo). Cela signifie que seuls les patients qui donnent 4 ou 5 étoiles sont redirigés vers Google. Les notes 1, 2 et 3 vous arrivent en message privé. C'est le bon équilibre entre volume d'avis Google et protection de votre réputation." },
      { h2: "Mise en place en moins de 5 minutes", p: "Créez votre compte Reputo, renseignez le lien de votre fiche Google (disponible dans Google Maps > votre fiche > Demander des avis), personnalisez votre SMS. Vous commencez avec 20 SMS offerts. Aucun abonnement, aucun engagement." },
    ]
  },
  'gerer-avis-negatif-google': {
    title: "Comment gérer un avis Google négatif en tant que professionnel de santé",
    tag: 'E-réputation',
    meta: "Techniques pour les professionnels de santé : filtrez les avis négatifs avant publication et transformez les patients insatisfaits en retours constructifs.",
    content: [
      { h2: "Pourquoi les avis négatifs touchent particulièrement les soignants", p: "Contrairement à un restaurateur, un professionnel de santé ne peut pas répondre publiquement à un avis négatif sans risquer de violer le secret médical. Cette asymétrie est profondément injuste et reconnue par les Ordres professionnels. La seule protection efficace est d'intervenir en amont, avant que l'avis soit publié." },
      { h2: "La stratégie du filtre préventif", p: "Le principe est simple : au lieu d'envoyer vos patients directement sur Google, vous les envoyez d'abord sur une page de notation intermédiaire. Seuls ceux qui donnent 4 ou 5 étoiles sont redirigés vers Google. Ceux qui sont déçus vous envoient un message privé. Vous pouvez ainsi résoudre le problème en direct, transformer un mécontent en patient satisfait, et ne jamais voir cet avis négatif publié." },
      { h2: "Que faire d'un feedback privé négatif ?", p: "Répondre dans les 24 heures est crucial. Le message doit être empathique, concret et proposer une solution. Dans 80% des cas, un patient qui reçoit une réponse attentionnée à son feedback privé ne laisse pas d'avis négatif public — même si son expérience initiale était mauvaise. C'est aussi une mine d'or pour améliorer votre pratique." },
      { h2: "Signaler un faux avis ou un avis diffamatoire", p: "Si un avis négatif est publié malgré tout et qu'il vous semble injustifié ou diffamatoire, vous pouvez le signaler à Google via votre fiche Google My Business. Google traite les signalements sous 3 à 7 jours. Pour les cas graves (usurpation d'identité, diffamation caractérisée), un avocat spécialisé peut obtenir la suppression via une procédure judiciaire." },
      { h2: "L'importance du volume d'avis positifs", p: "La meilleure défense contre un avis négatif est d'avoir un grand volume d'avis positifs. Un avis négatif parmi 5 est catastrophique. Le même avis parmi 150 est anecdotique. C'est pourquoi la collecte régulière et automatique d'avis est la stratégie la plus efficace sur le long terme." },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return {};
  return {
    title: `${a.title} | Reputo`,
    description: a.meta,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) return <div style={{padding:'80px', textAlign:'center'}}>Article non trouvé</div>;

  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/blog" className={styles.back}>← Ressources</a>
      </nav>
      <div style={{maxWidth:'720px', margin:'0 auto', padding:'64px 24px'}}>
        <span className={styles.tag} style={{marginBottom:'20px', display:'inline-block'}}>{a.tag}</span>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,38px)', fontWeight:800, letterSpacing:'-0.5px', lineHeight:1.15, marginBottom:'40px', color:'var(--text)'}}>
          {a.title}
        </h1>
        {a.content.map((block, i) => (
          <div key={i} style={{marginBottom:'32px'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:700, marginBottom:'10px', color:'var(--text)'}}>{block.h2}</h2>
            <p style={{fontSize:'15px', color:'var(--muted)', lineHeight:1.75}}>{block.p}</p>
          </div>
        ))}

        <div style={{marginTop:'56px', background:'var(--blue-dim)', border:'1px solid var(--blue-light)', borderRadius:'var(--radius-xl)', padding:'32px', textAlign:'center'}}>
          <h3 style={{fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:700, marginBottom:'8px'}}>Prêt à automatiser votre réputation ?</h3>
          <p style={{color:'var(--muted)', fontSize:'14px', marginBottom:'20px'}}>20 SMS offerts à l'inscription. Aucun abonnement.</p>
          <a href="/#tarifs" className="btn-primary" style={{padding:'12px 24px'}}>Commencer gratuitement →</a>
        </div>
      </div>
    </main>
  );
}
