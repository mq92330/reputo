export default function sitemap() {
  const base = 'https://reputo.fr';
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/avis-google-medecin`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/avis-google-dentiste`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/gerer-avis-negatif-google`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/login`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/register`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
