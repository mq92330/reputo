import styles from '../blog/blog.module.css';

export const metadata = {
  title: 'Politique de confidentialité | Reputo',
  description: 'Politique de confidentialité et traitement des données personnelles de Reputo.',
};

export default function ConfidentialitePage() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/" className={styles.back}>← Retour</a>
      </nav>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
          Politique de confidentialité
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '40px' }}>Dernière mise à jour : Avril 2026</p>

        {[
          {
            title: '1. Responsable du traitement',
            content: `Reputo (entrepreneur individuel en cours d'immatriculation)\nEmail : contact@reputo.fr`
          },
          {
            title: '2. Données collectées',
            content: `Reputo collecte les données suivantes :\n\n• Données des praticiens : nom, email, nom du cabinet, lien Google Reviews, modèle de SMS, historique des envois.\n\n• Données des patients : numéro de téléphone uniquement, utilisé pour l'envoi du SMS. Ce numéro est supprimé après envoi. Aucune donnée médicale n'est collectée ni traitée.\n\n• Données de navigation : adresse IP, logs d'accès (conservation maximale : 30 jours).`
          },
          {
            title: '3. Finalités du traitement',
            content: `Les données sont collectées pour :\n• Fournir le service d'envoi de SMS et de collecte d'avis\n• Gérer les comptes praticiens\n• Améliorer le service\n• Respecter nos obligations légales`
          },
          {
            title: '4. Base légale',
            content: `Le traitement des données est fondé sur :\n• L'exécution du contrat (fourniture du service)\n• Le consentement du patient (envoi du SMS avec lien de notation)\n• L'intérêt légitime (amélioration du service)`
          },
          {
            title: '5. Durée de conservation',
            content: `• Numéro de téléphone du patient : supprimé immédiatement après envoi du SMS\n• Données du compte praticien : durée de la relation contractuelle + 3 ans\n• Logs d'envoi : 12 mois`
          },
          {
            title: '6. Hébergement et sous-traitants',
            content: `• Vercel Inc. (hébergement de l'application, USA — couvert par des clauses contractuelles types RGPD)\n• Supabase Inc. (base de données, EU-WEST)\n• smsmode (envoi SMS, France — certifié ISO 27001)`
          },
          {
            title: '7. Vos droits',
            content: `Conformément au RGPD, vous disposez des droits suivants :\n• Droit d'accès à vos données\n• Droit de rectification\n• Droit à l'effacement\n• Droit à la portabilité\n• Droit d'opposition\n\nPour exercer ces droits : contact@reputo.fr\n\nVous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).`
          },
          {
            title: '8. Cookies',
            content: `Reputo utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du service (authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.`
          },
          {
            title: '9. Sécurité',
            content: `Reputo met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement HTTPS, authentification sécurisée, accès restreint aux données, hébergement certifié ISO 27001.`
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text)' }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
