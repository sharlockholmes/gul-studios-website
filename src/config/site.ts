export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gulstudios.dev';
export const HIFZ_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gulstudios.hifz';

export const SITE = {
  name: 'GÜL STUDIOS',
  description:
    'İnsanların gerçek ihtiyaçlarına odaklanan, sade, kaliteli ve uzun ömürlü dijital ürünler geliştiren bağımsız yazılım stüdyosu.',
  email: 'gulstudiosapps@gmail.com',
  ogImage: `${SITE_URL}/og-image.png`,
} as const;

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();
