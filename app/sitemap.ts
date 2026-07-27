import { MetadataRoute } from 'next';
import { getDb } from '@/lib/mongodb';

export const revalidate = 3600; // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://osumfix.com';

  // Base static pages
  const defaultPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/gallery',
    '/privacy-policy',
    '/terms-conditions',
    '/careers',
    '/projects',
    '/request-quote',
    '/testimonials',
    '/blogs',
  ];

  // Core service slugs
  const serviceSlugs = [
    'ac-work',
    'electrical-work',
    'plumbing-work',
    'painting-work',
    'masonry-work',
    'carpentry-work',
    'steel-fixing',
    'interior-designing',
    'interior-design',
    'cleaning-services',
    'ceiling-gypsum',
    'handyman-services',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const addedPaths = new Set<string>();

  // 1. Add static base pages
  for (const pagePath of defaultPages) {
    const url = pagePath === '' ? baseUrl : `${baseUrl}${pagePath}`;
    addedPaths.add(pagePath || '/');
    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: pagePath === '' ? 'daily' : 'weekly',
      priority: pagePath === '' ? 1.0 : 0.8,
    });
  }

  // 2. Add service pages
  for (const slug of serviceSlugs) {
    const pagePath = `/services/${slug}`;
    if (!addedPaths.has(pagePath)) {
      addedPaths.add(pagePath);
      sitemapEntries.push({
        url: `${baseUrl}${pagePath}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }
  }

  // 3. Fetch dynamic published blogs and custom routes from MongoDB if available
  try {
    const db = await getDb();
    
    // Fetch published blogs
    const blogs = await db.collection('blogs').find({ status: 'published' }).toArray();
    for (const blog of blogs) {
      if (blog.slug) {
        const pagePath = `/blogs/${blog.slug}`;
        if (!addedPaths.has(pagePath)) {
          addedPaths.add(pagePath);
          sitemapEntries.push({
            url: `${baseUrl}${pagePath}`,
            lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      }
    }

    // Fetch active CMS routes
    const cmsRoutes = await db.collection('cms_routes').find({ websiteId: 'default', status: 'active' }).toArray();
    for (const route of cmsRoutes) {
      if (
        route.path &&
        !route.path.includes('[') &&
        !route.path.startsWith('/admin') &&
        !route.path.startsWith('/api')
      ) {
        const pagePath = route.path;
        if (!addedPaths.has(pagePath)) {
          addedPaths.add(pagePath);
          sitemapEntries.push({
            url: `${baseUrl}${pagePath}`,
            lastModified: route.updatedAt ? new Date(route.updatedAt) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error loading dynamic sitemap entries from database:', error);
  }

  return sitemapEntries;
}
