import { HIFZ_FAQS } from '../data/studioData';
import { absoluteUrl, HIFZ_PLAY_STORE_URL, SITE } from './site';

export interface PageSeo {
  title: string;
  description: string;
  path: '/' | '/hifz';
  canonical: string;
  image: string;
  type: 'website';
  schema: Record<string, unknown>;
}

const organizationId = absoluteUrl('/#organization');
const websiteId = absoluteUrl('/#website');

const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE.name,
  description: SITE.description,
  url: absoluteUrl('/'),
  email: SITE.email,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/favicon.png'),
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR',
  },
};

export const HOME_SEO: PageSeo = {
  title: 'GÜL STUDIOS | Yazılımın Ötesinde, Fayda Üretiyoruz.',
  description: `GÜL STUDIOS, ${SITE.description}`,
  path: '/',
  canonical: absoluteUrl('/'),
  image: SITE.ogImage,
  type: 'website',
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: SITE.name,
        url: absoluteUrl('/'),
        inLanguage: 'tr-TR',
        publisher: { '@id': organizationId },
      },
    ],
  },
};

export const HIFZ_SEO: PageSeo = {
  title: 'HIFZ — Hafızlık Sınav Hazırlık | GÜL STUDIOS',
  description: 'Hafızlık sınavına hazırlık için sınav modu, sûre bulma, benzer ayetler ve cüz/sayfa çalışmaları sunan HIFZ uygulaması.',
  path: '/hifz',
  canonical: absoluteUrl('/hifz'),
  image: SITE.ogImage,
  type: 'website',
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': absoluteUrl('/hifz#application'),
        name: 'HIFZ',
        alternateName: 'HIFZ — Hafızlık Sınav Hazırlık',
        description: 'Hafızlık sınavına hazırlık için sınav modu, sûre bulma, benzer ayetler ve cüz/sayfa çalışmaları sunan HIFZ uygulaması.',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Android',
        url: absoluteUrl('/hifz'),
        downloadUrl: HIFZ_PLAY_STORE_URL,
        publisher: {
          '@type': 'Organization',
          '@id': organizationId,
          name: SITE.name,
          url: absoluteUrl('/'),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': absoluteUrl('/hifz#faq'),
        mainEntity: HIFZ_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  },
};

export const getPageSeo = (pathname: string) => (pathname === '/hifz' ? HIFZ_SEO : HOME_SEO);
