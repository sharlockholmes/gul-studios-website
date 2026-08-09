import hifzIcon from '../assets/images/hifz-icon.png';

interface HifzIconProps {
  className?: string;
  eager?: boolean;
}

export const HifzIcon = ({ className = '', eager = false }: HifzIconProps) => (
  <span className={`hifz-icon-crop ${className}`}>
    <img
      src={hifzIcon}
      alt="HIFZ uygulama ikonu"
      width={256}
      height={256}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  </span>
);
