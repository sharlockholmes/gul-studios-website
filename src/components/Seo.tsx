import { useEffect } from 'react';
import type React from 'react';
import { absoluteUrl, SITE } from '../config/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
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
  schema,
}) => {
  useEffect(() => {
    const url = absoluteUrl(path);
    document.title = title;
    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', url);
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    const previous = document.getElementById('page-schema');
    previous?.remove();
    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById('page-schema')?.remove();
  }, [description, path, schema, title]);

  return null;
};
