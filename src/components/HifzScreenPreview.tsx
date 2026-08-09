import homeDarkScreen from '../assets/images/Screenshot_2026-08-09-15-53-36-106_com.gulstudios.hifz (1).jpg';
import homeLightScreen from '../assets/images/Screenshot_2026-08-09-16-49-03-358_com.gulstudios.hifz (2).jpg';
import statsScreen from '../assets/images/Screenshot_2026-08-09-17-14-04-088_com.gulstudios.hifz.jpg';
import mistakesScreen from '../assets/images/Screenshot_2026-08-09-17-14-10-950_com.gulstudios.hifz.jpg';
import settingsScreen from '../assets/images/Screenshot_2026-08-09-17-14-13-051_com.gulstudios.hifz.jpg';

export type HifzScreenVariant = 'homeLight' | 'homeDark' | 'stats' | 'mistakes' | 'settings';

interface HifzScreenPreviewProps {
  className?: string;
  eager?: boolean;
  label?: string;
  variant?: HifzScreenVariant;
}

export const HIFZ_SCREENS: Record<HifzScreenVariant, { src: string; title: string }> = {
  homeLight: { src: homeLightScreen, title: 'Açık temalı ana sayfa' },
  homeDark: { src: homeDarkScreen, title: 'Koyu temalı ana sayfa' },
  stats: { src: statsScreen, title: 'İstatistikler' },
  mistakes: { src: mistakesScreen, title: 'Hata Defteri' },
  settings: { src: settingsScreen, title: 'Ayarlar' },
};

export const HifzScreenPreview = ({
  className = '',
  eager = false,
  label,
  variant = 'homeLight',
}: HifzScreenPreviewProps) => {
  const screen = HIFZ_SCREENS[variant];

  return (
    <div
      className={`hifz-screen-preview hifz-screen-preview--${variant} ${className}`}
      role="img"
      aria-label={label ?? `HIFZ ${screen.title} uygulama ekranı`}
    >
      <img
        src={screen.src}
        alt=""
        width={1220}
        height={2712}
        fetchPriority={eager ? 'high' : undefined}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </div>
  );
};
