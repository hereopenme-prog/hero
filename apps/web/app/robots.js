export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.hereopen.me/sitemap.xml',
    host: 'https://www.hereopen.me'
  };
}
