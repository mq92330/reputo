import './globals.css';

export const metadata = {
  title: 'Reputo — Collectez des avis Google automatiquement',
  description: 'Envoyez un SMS à vos patients après chaque consultation. Ils notent leur expérience : les satisfaits vont sur Google, les insatisfaits vous écrivent en privé. Pour tous les professionnels de santé libéraux.',
  keywords: 'avis google médecin, avis google dentiste, avis google kinésithérapeute, réputation cabinet médical, SMS avis patients',
  openGraph: {
    title: 'Reputo — Avis Google automatiques pour professionnels de santé',
    description: 'Filtrez les avis négatifs, boostez votre réputation Google. SMS automatique après chaque consultation.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
