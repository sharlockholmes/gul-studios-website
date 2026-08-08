export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gulstudios.example';

export const SITE = {
  name: 'GÜL STUDIOS',
  description:
    'İnsanların gerçek problemlerini çözen, kaliteli ve uzun ömürlü dijital ürünler geliştiren bağımsız yazılım stüdyosu.',
  email: 'gulstudiosapps@gmail.com',
  ogImage: `${SITE_URL}/og-image.jpg`,
} as const;

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();
