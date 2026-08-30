import { BookOpen, ChartNoAxesCombined, Files, Search, Settings2, Sparkles } from 'lucide-react';
import studioLogo from '../assets/images/gul-studios-logo-new.png';
import { HifzIcon } from './HifzIcon';

type HifzFeatureArtVariant = 'hero' | 'showcase' | 'detail';

interface HifzFeatureArtProps {
  variant?: HifzFeatureArtVariant;
  className?: string;
}

const featureSets = {
  hero: [],
  showcase: [
    { label: 'Sınava Hazırlık', copy: 'Sınav modu ve farklı soru türleriyle pratik.', icon: BookOpen },
    { label: 'İstatistik & Hata Takibi', copy: 'Doğru, yanlış ve çalışma geçmişini takip et.', icon: ChartNoAxesCombined },
    { label: 'Kişiselleştirilmiş Çalışma', copy: 'Ezber aralığı, görünüm ve çalışma tercihlerini ayarla.', icon: Settings2 },
  ],
  detail: [
    { label: 'Sınav Modu', icon: BookOpen },
    { label: 'Sûre Bulma', icon: Search },
    { label: 'Sayfa Başı / Sonu', icon: Files },
    { label: 'Cüz / Sayfa', icon: Sparkles },
    { label: 'İstatistikler', icon: ChartNoAxesCombined },
    { label: 'Ayarlar', icon: Settings2 },
  ],
};

export const HifzFeatureArt = ({ variant = 'hero', className = '' }: HifzFeatureArtProps) => {
  const features = featureSets[variant];
  const isStudioHero = variant === 'hero';

  return (
    <div
      className={`hifz-feature-art hifz-feature-art--${variant} ${className}`}
      role={isStudioHero ? 'img' : undefined}
      aria-label={isStudioHero ? 'GÜL STUDIOS marka görseli' : undefined}
    >
      <div className="hifz-feature-art__grid" aria-hidden="true" />
      <span className="hifz-feature-art__line hifz-feature-art__line--one" aria-hidden="true" />
      <span className="hifz-feature-art__line hifz-feature-art__line--two" aria-hidden="true" />
      <div className="hifz-feature-art__core">
        <small className="hifz-feature-art__serial">GÜL STUDIOS · 01</small>
        {isStudioHero ? (
          <span className="hifz-feature-art__studio-logo"><img src={studioLogo} alt="" width={786} height={724} /></span>
        ) : (
          <>
            <HifzIcon eager />
            <strong>HIFZ</strong>
            <small>Hafızlık sınav hazırlık</small>
          </>
        )}
      </div>
      {!isStudioHero && (
        <>
          <ul className="hifz-feature-art__cards">
            {features.map(({ label, copy, icon: Icon }, index) => (
              <li key={label}>
                <em>0{index + 1}</em>
                <Icon aria-hidden="true" />
                <div><b>{label}</b>{copy && <small>{copy}</small>}</div>
              </li>
            ))}
          </ul>
          <span className="hifz-feature-art__footer-note">ODAK · TEKRAR · İLERLEME</span>
        </>
      )}
    </div>
  );
};
