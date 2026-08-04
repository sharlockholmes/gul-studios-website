import React from 'react';
import { BookOpen, GraduationCap, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { PRODUCTS } from '../data/studioData';

interface ProductsGridProps {
  onInspectHifz: () => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ onInspectHifz }) => {
  const hifz = PRODUCTS.find((p) => p.id === 'hifz') || PRODUCTS[0];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-[#FAF9F5] via-[#F6F3EC] to-[#FAF9F5] relative overflow-hidden bg-grid-pattern-light border-b border-[#EAE6DF]/60">
      
      {/* Background Ambient Warmth & Low-Opacity Geometric Layers */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B89248]/4 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-[400px] h-[400px] bg-[#E8EFE9]/50 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Subtle Geometric Wireframe Accents */}
      <div className="absolute top-12 right-12 w-64 h-64 rounded-full border border-[#B89248]/10 pointer-events-none opacity-25"></div>
      <div className="absolute bottom-12 left-12 w-80 h-80 rounded-[48px] rotate-12 border border-[#1F1E1B]/05 pointer-events-none opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89248]" />
            <span>GÜL STUDIOS Ürün Vitrini</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1E1B] tracking-tight">
            Ürünlerimiz
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
            GÜL STUDIOS bünyesinde geliştirilen, yüksek kalite ve fayda odaklı dijital ürün yelpazemiz.
          </p>
        </div>

        {/* Two Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Hıfz (Active Product Card) */}
          <div className="glass-card-light p-8 sm:p-10 rounded-3xl border border-[#E5E1D8] hover:border-[#B89248]/50 transition-all bg-[#FDFBF7] flex flex-col justify-between shadow-xs group relative overflow-hidden">
            
            {/* Top Subtle Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89248]/40 via-[#B89248] to-[#B89248]/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-6">
              {/* Header Badge & Icon Placeholder */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F1E1B] border border-[#B89248]/30 flex items-center justify-center text-[#B89248] shadow-xs group-hover:scale-105 transition-transform overflow-hidden relative">
                    <img 
                      src="/assets/hifz-logo.png" 
                      alt="Hıfz Logo" 
                      className="w-full h-full object-cover hidden"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <BookOpen className="w-7 h-7 text-[#B89248]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#B89248] uppercase font-bold block">Flagship Ürün</span>
                    <span className="text-xs font-semibold text-[#78716C]">GÜL STUDIOS</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFBEB] text-[#B45309] border border-[#FCD34D]/50 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
                  <span>Google Play Kapalı Test Sürecinde</span>
                </div>
              </div>

              {/* Title & 2-3 Line Description */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F1E1B] group-hover:text-[#B89248] transition-colors">
                  Hıfz
                </h3>
                <p className="text-xs font-mono text-[#B89248] font-semibold">Akıllı Kur'an Ezber ve Takip Asistanı</p>
                <p className="text-sm text-[#57534E] pt-2 leading-relaxed">
                  Bilişsel aralıklı tekrar algoritması, sesli ezber doğrulama ve minimalist arayüzü ile Kur'an ezberini ve takibini kolaylaştıran modern dijital asistan.
                </p>
                <p className="text-xs text-[#78716C] pt-1 italic">
                  Yakında tüm kullanıcılar için Google Play'de yayınlanacaktır.
                </p>
              </div>
            </div>

            {/* Inspect Button */}
            <div className="pt-8 mt-6 border-t border-[#EAE6DF]">
              <button
                onClick={onInspectHifz}
                className="w-full py-3.5 px-6 rounded-xl gold-button font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <span>İncele</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Card 2: Kur'an Kursu Yönetim Sistemi */}
          <div className="glass-card-light p-8 sm:p-10 rounded-3xl border border-[#E5E1D8] bg-[#FAF8F5]/60 flex flex-col justify-between shadow-xs relative overflow-hidden">
            
            <div className="space-y-6">
              {/* Header Badge & Icon Placeholder */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8EFE9] border border-[#2D5237]/20 flex items-center justify-center text-[#2D5237] overflow-hidden relative">
                    <img 
                      src="/assets/kuran-kursu-logo.png" 
                      alt="Kur'an Kursu Logo" 
                      className="w-full h-full object-cover hidden"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#2D5237] uppercase font-bold block">Kurumsal Platform</span>
                    <span className="text-xs font-semibold text-[#78716C]">GÜL STUDIOS</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#93C5FD]/50 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
                  <span>Geliştirme Aşamasında</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F1E1B]">
                  Kur'an Kursu Yönetim Sistemi
                </h3>
                <p className="text-xs font-mono text-[#78716C] font-semibold">Kurumsal Eğitim & Takip Platformu</p>
                <p className="text-sm text-[#78716C] pt-2 leading-relaxed">
                  Kur'an kurslarının yönetimini kolaylaştıran kapsamlı dijital platform. Detaylar yakında.
                </p>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="pt-8 mt-6 border-t border-[#EAE6DF] text-center">
              <div className="py-3 px-6 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs font-semibold text-[#78716C]">
                Detaylar yakında duyurulacaktır.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
