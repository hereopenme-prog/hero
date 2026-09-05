import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://hereopen.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://hereopen.in/how-it-works', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://hereopen.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://hereopen.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://hereopen.in/for-businesses', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://hereopen.in/for-customers', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://hereopen.in/download', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}