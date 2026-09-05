import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hereopen.in';
  const today = new Date();
  return [
    { url: `${base}`, lastModified: today, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#businesses`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#customers`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#pricing`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#faq`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#roadmap`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  ];
}