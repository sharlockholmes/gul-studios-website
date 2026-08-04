import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Layers, 
  PhoneCall,
  Info,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenPrivacyModal: () => void;
  onNavigateHome?: () => void;
  currentView?: 'home' | 'hifz-detail';
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenPrivacyModal,
  onNavigateHome,
  currentView = 'home'
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ürünlerimiz', href: '#products', icon: BookOpen },
    { name: 'Neden Biz?', href: '#why-us', icon: Layers },
    { name: 'Manifesto', href: '#about', icon: Info },
    { name: 'İletişim', href: '#contact', icon: PhoneCall },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E1D8] shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Logo */}
          <button 
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1F1E1B] text-[#FDFBF7] flex items-center justify-center font-display font-extrabold text-sm tracking-widest shadow-xs group-hover:bg-[#B89248] transition-colors">
              GÜL
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-wider text-[#1F1E1B] group-hover:text-[#B89248] transition-colors uppercase">
                GÜL STUDIOS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#78716C] -mt-1 uppercase">
                Bağımsız Yazılım Stüdyosu
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 border border-[#E5E1D8] bg-[#FDFBF7]/90 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-4 py-1.5 text-xs font-semibold text-[#57534E] hover:text-[#B89248] hover:bg-[#F5F2EA] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenPrivacyModal}
              className="px-4 py-1.5 text-xs font-semibold text-[#57534E] hover:text-[#B89248] hover:bg-[#F5F2EA] rounded-full transition-all cursor-pointer"
            >
              Gizlilik
            </button>
          </nav>

          {/* Right Action Badge / Store Link */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full sage-badge text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2D5237] animate-pulse"></span>
              <span>Ürün Odaklı Stüdyo</span>
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-[#1F1E1B] shadow-xs cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E1D8] bg-[#FAF9F5]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl text-xs font-semibold text-[#1F1E1B] bg-[#FAF8F5] border border-[#E5E1D8] shadow-xs active:border-[#B89248]"
                >
                  <Icon className="w-4 h-4 text-[#B89248]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacyModal();
              }}
              className="flex items-center gap-2.5 px-3 py-3 rounded-xl text-xs font-semibold text-[#1F1E1B] bg-[#FAF8F5] border border-[#E5E1D8] shadow-xs text-left cursor-pointer col-span-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#2D5237]" />
              <span>Gizlilik Politikası</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
