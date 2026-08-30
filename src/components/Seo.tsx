import { useEffect } from 'react';
import type React from 'react';
import { absoluteUrl, SITE } from '../config/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
};

export const Seo: React.FC<SeoProps> = ({
  title = SITE.name,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  schema,
}) => {
  useEffect(() => {
    const url = absoluteUrl(path);
    document.title = title;
    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:type"]', 'property', type);
    setMeta('meta[property="og:url"]', 'property', url);
    setMeta('meta[property="og:image"]', 'property', image);
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);
    setMeta('meta[name="twitter:url"]', 'name', url);
    setMeta('meta[name="twitter:image"]', 'name', image);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    if (schema) {
      let script = document.getElementById('page-schema') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema).replaceAll('<', '\\u003c');
    } else {
      document.getElementById('page-schema')?.remove();
    }
  }, [description, image, path, schema, title, type]);

  return null;
};
