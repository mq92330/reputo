import styles from '../blog/blog.module.css';

export const metadata = {
  title: 'Mentions légales | Reputo',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}><span className={styles.logoMark}>R</span>Reputo</a>
        <a href="/" className={styles.back}>← Retour</a>
      </nav>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
          Mentions légales
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '40px' }}>Dernière mise à jour : Avril 2026</p>

        {[
          {
            title: 'Éditeur du site',
            content: `Reputo est édité par un entrepreneur individuel en cours d'immatriculation.
Email : contact@reputo.fr
Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA`
          },
          {
            title: 'Objet du service',
            content: `Reputo est un service SaaS permettant aux professionnels de santé libéraux d'automatiser la collecte d'avis Google auprès de leurs patients via SMS, avec un système de filtrage des retours négatifs.`
          },
          {
            title: 'Propriété intellectuelle',
            content: `L'ensemble des contenus présents sur le site reputo.fr (textes, images, logiciels, code source) est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.`
          },
          {
            title: 'Limitation de responsabilité',
            content: `Reputo s'efforce d'assurer la disponibilité et l'exactitude des informations diffusées sur son site. Reputo ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du service, notamment en cas d'interruption de service, de perte de données ou de résultats insuffisants en matière de collecte d'avis.`
          },
          {
            title: 'Droit applicable',
            content: `Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.`
          },
          {
            title: 'Contact',
            content: `Pour toute question relative aux présentes mentions légales, contactez-nous à : contact@reputo.fr`
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
