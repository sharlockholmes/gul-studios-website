import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E6]/60 to-[#FAF9F5] border-t border-[#EAE6DF] relative overflow-hidden">
      
      {/* Background Subtle Warm Accent & Low-Opacity Geometric Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#E8EFE9]/50 blur-[140px] rounded-full pointer-events-none opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-[60px] rotate-12 border border-[#B89248]/10 pointer-events-none opacity-25"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89248]" />
            <span>Marka Manifestosu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1E1B] tracking-tight">
            Neden GÜL STUDIOS Var?
          </h2>
        </div>

        {/* Manifesto Card Container */}
        <div className="glass-card-elevated p-8 sm:p-14 rounded-3xl relative text-left space-y-6">
          
          <Quote className="w-12 h-12 text-[#B89248]/30 absolute top-6 right-6 pointer-events-none" />

          <p className="text-lg sm:text-2xl font-display font-medium text-[#1F1E1B] leading-relaxed italic">
            "Teknoloji üretmek tek başına bir amaç değildir. Bizim için önemli olan; insanların gerçek problemlerini çözen, uzun yıllar değer üretmeye devam edecek kaliteli dijital ürünler geliştirmektir."
          </p>

          <div className="w-16 h-1 bg-[#B89248] rounded-full"></div>

          <p className="text-base sm:text-xl font-display font-semibold text-[#44403C] leading-relaxed">
            Her yeni projede kendimize aynı soruyu sorarız: <br />
            <span className="text-[#B89248] font-bold">"Bu ürün gerçekten bir insanın hayatını kolaylaştırıyor mu?"</span>
          </p>

          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Eğer cevap evetse, geliştirmeye başlarız.
          </p>

          <div className="pt-6 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#57534E]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2D5237]" />
              <span>İnsan Odaklı Yazılım Felsefesi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89248]" />
              <span>İstanbul & Global Etki</span>
            </div>
            <div className="flex items-center gap-2 text-[#8C6A24] font-mono">
              <span>GÜL STUDIOS MANİFESTOSU</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
