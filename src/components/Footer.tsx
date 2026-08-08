import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onNavigateHome: () => void;
  currentView: 'home' | 'hifz-detail';
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onNavigateHome, currentView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeLink = () => {
    if (currentView !== 'home') onNavigateHome();
  };

  return (
    <footer className="bg-[#FAF9F5] border-t border-[#EAE6DF] pt-16 pb-12 text-[#57534E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE6DF]">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1F1E1B] text-[#FDFBF7] flex items-center justify-center font-display font-extrabold text-xs tracking-widest shadow-xs">
                GÜL
              </div>
              <span className="font-display font-extrabold text-lg text-[#1F1E1B] tracking-wider uppercase">
                GÜL STUDIOS
              </span>
            </div>

            <p className="text-xs text-[#57534E] leading-relaxed max-w-md">
              "{STUDIO_INFO.slogan}" — İnsanların gerçek problemlerini çözen, kaliteli ve uzun ömürlü dijital ürünler geliştiren bağımsız yazılım stüdyosu.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sage-badge text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2D5237] animate-pulse"></span>
              <span>{STUDIO_INFO.status}</span>
            </div>
          </div>

          {/* Direct Contact & Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-mono text-[#1F1E1B] uppercase tracking-wider text-[11px] font-bold">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#products" onClick={handleHomeLink} className="hover:text-[#B89248] transition-colors">Hıfz & Ürünlerimiz</a></li>
              <li><a href="#why-us" onClick={handleHomeLink} className="hover:text-[#B89248] transition-colors">Neden GÜL STUDIOS?</a></li>
              <li><a href="#about" onClick={handleHomeLink} className="hover:text-[#B89248] transition-colors">Hakkımızda (Manifesto)</a></li>
              <li><a href="#contact" onClick={handleHomeLink} className="hover:text-[#B89248] transition-colors">İletişim Formu</a></li>
            </ul>
          </div>

          {/* Official Email Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-mono text-[#1F1E1B] uppercase tracking-wider text-[11px] font-bold">İletişim & Destek</h4>
            <p className="text-xs text-[#78716C]">
              Sorularınız ve geliştirici bildirimleri için:
            </p>
            <a
              href="mailto:gulstudiosapps@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#B89248] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>gulstudiosapps@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-[#78716C]">
            <span>© {new Date().getFullYear()} GÜL STUDIOS. Tüm hakları saklıdır.</span>
          </div>

          <div className="flex items-center gap-4 text-[#78716C]">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-[#B89248] transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5237]" />
              <span>Gizlilik Politikası</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              aria-label="Sayfa başına dön"
              className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F2EFE9] border border-[#E5E1D8] text-[#1F1E1B] transition-colors cursor-pointer shadow-xs"
              title="Sayfa Başına Dön"
            >
              <ArrowUp className="w-4 h-4 text-[#B89248]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
