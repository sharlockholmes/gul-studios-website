import { Info, Layers, Menu, PhoneCall, ShieldCheck, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import studioLogo from '../assets/images/gul-studios-logo-new.png';

interface NavbarProps {
  onOpenPrivacyModal: () => void;
  onNavigateHome?: () => void;
  currentView?: 'home' | 'hifz-detail';
}

const links = [
  { name: 'Ürünlerimiz', href: '#products', icon: Layers },
  { name: 'Neden Biz?', href: '#why-us', icon: ShieldCheck },
  { name: 'Yaklaşımımız', href: '#approach', icon: Info },
  { name: 'İletişim', href: '#contact', icon: PhoneCall },
];

export const Navbar = ({ onOpenPrivacyModal, onNavigateHome, currentView = 'home' }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (currentView !== 'home' || !('IntersectionObserver' in window)) {
      setActiveHref(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-32% 0px -58% 0px', threshold: [0, 0.1, 0.3] },
    );

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentView]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMobileMenuOpen(false);
      window.requestAnimationFrame(() => mobileMenuToggleRef.current?.focus());
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const goHome = () => {
    setMobileMenuOpen(false);
    onNavigateHome?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    window.requestAnimationFrame(() => mobileMenuToggleRef.current?.focus());
    if (currentView === 'home') return;
    event.preventDefault();
    onNavigateHome?.();
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 120);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="/" onClick={(event) => { event.preventDefault(); goHome(); }} className="brand-lockup" aria-label="GÜL STUDIOS ana sayfa">
          <img className="brand-lockup__full-logo" src={studioLogo} alt="" width={786} height={724} />
          <span className="brand-lockup__descriptor">Bağımsız<br />Yazılım Stüdyosu</span>
        </a>

        <nav className="site-header__nav" aria-label="Ana navigasyon">
          {links.map((link) => (
            <a
              key={link.name}
              href={currentView === 'home' ? link.href : `/${link.href}`}
              onClick={(event) => handleLink(event, link.href)}
              className={`nav-editorial-link ${activeHref === link.href ? 'is-active' : ''}`}
              aria-current={activeHref === link.href ? 'location' : undefined}
            >
              {link.name}
            </a>
          ))}
          <button type="button" onClick={onOpenPrivacyModal} className="nav-editorial-link">Gizlilik</button>
        </nav>

        <span className="studio-status"><i aria-hidden="true" />Ürün Odaklı Stüdyo</span>

        <button
          ref={mobileMenuToggleRef}
          type="button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-navigation ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Mobil navigasyon" aria-hidden={!mobileMenuOpen}>
        <div>
          {links.map(({ name, href, icon: Icon }) => (
            <a key={name} href={currentView === 'home' ? href : `/${href}`} onClick={(event) => handleLink(event, href)} tabIndex={mobileMenuOpen ? 0 : -1}>
              <Icon aria-hidden="true" />{name}
            </a>
          ))}
          <button type="button" tabIndex={mobileMenuOpen ? 0 : -1} onClick={() => { setMobileMenuOpen(false); window.requestAnimationFrame(() => mobileMenuToggleRef.current?.focus()); onOpenPrivacyModal(); }}>
            <ShieldCheck aria-hidden="true" />Gizlilik Politikası
          </button>
        </div>
      </nav>
    </header>
  );
};
