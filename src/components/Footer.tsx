import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import type React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import studioLogo from '../assets/images/gul-studios-logo-new.png';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onNavigateHome: () => void;
  currentView: 'home' | 'hifz-detail';
}

const footerLinks = [
  { label: 'HIFZ & Ürünlerimiz', href: '#products' },
  { label: 'Neden GÜL STUDIOS?', href: '#why-us' },
  { label: 'Yaklaşımımız', href: '#approach' },
  { label: 'İletişim', href: '#contact' },
];

export const Footer = ({ onOpenPrivacyModal, onNavigateHome, currentView }: FooterProps) => {
  const handleHomeLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentView === 'home') return;
    event.preventDefault();
    onNavigateHome();
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 120);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__pattern" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="brand-lockup brand-lockup--footer" aria-label="GÜL STUDIOS">
            <img className="brand-lockup__full-logo" src={studioLogo} alt="" width={786} height={724} />
          </div>
          <p>“{STUDIO_INFO.slogan}” — {STUDIO_INFO.subSlogan}</p>
          <span className="site-footer__status"><i aria-hidden="true" />{STUDIO_INFO.status}</span>
        </div>

        <nav className="site-footer__links" aria-label="Alt navigasyon">
          <span>Keşfet</span>
          {footerLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => handleHomeLink(event, link.href)}>{link.label}</a>)}
        </nav>

        <div className="site-footer__contact">
          <span>İletişim & Destek</span>
          <p>Sorularınız ve ürün bildirimleri için:</p>
          <a href="mailto:gulstudiosapps@gmail.com"><Mail aria-hidden="true" />gulstudiosapps@gmail.com</a>
          <button type="button" onClick={onOpenPrivacyModal}><ShieldCheck aria-hidden="true" />Gizlilik Politikası</button>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} GÜL STUDIOS. Tüm hakları saklıdır.</span>
        <span>İstanbul · Türkiye</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Sayfa başına dön"><ArrowUp aria-hidden="true" /></button>
      </div>
    </footer>
  );
};
