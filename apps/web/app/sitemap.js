export const dynamic = 'force-static';

const base = 'https://www.hereopen.me';
const lastModified = new Date();

export default function sitemap() {
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/security`, lastModified, changeFrequency: 'monthly', priority: 0.5 }
  ];
}
