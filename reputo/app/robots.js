export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/dashboard', '/api'] },
    ],
    sitemap: 'https://reputo.fr/sitemap.xml',
  };
}
