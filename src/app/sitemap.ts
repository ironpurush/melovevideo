import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/platforms`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/faq`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/contact`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/privacy`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/terms`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/dmca`, priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
