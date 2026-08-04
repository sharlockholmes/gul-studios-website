import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck,
  CheckCircle2,
  Sparkle,
  Compass,
  Award
} from 'lucide-react';

interface HeroProps {
  onInspectHifz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInspectHifz }) => {
  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-studio-ambient bg-grid-pattern-light border-b border-[#EAE6DF]">
      
      {/* Soft Ambient Studio Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#F5F1E6] via-[#FAF8F3]/50 to-transparent blur-[120px] rounded-full pointer-events-none opacity-90"></div>
      <div className="absolute top-1/3 right-12 w-[400px] h-[300px] bg-[#B89248]/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-[450px] h-[350px] bg-[#E8EFE9]/60 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Ultra-Low Opacity Geometric Layering (Depth Accent) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[#B89248]/15 pointer-events-none opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-[70px] rotate-45 border border-[#1F1E1B]/08 pointer-events-none opacity-25"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B89248]" />
          <span>GÜL STUDIOS — Bağımsız Dijital Ürün Stüdyosu</span>
        </div>

        {/* Brand Headline & Purpose Statement */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#1F1E1B] leading-[1.12]">
            Yazılımın Ötesinde, <br />
            <span className="text-[#B89248]">Fayda Üretiyoruz.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#57534E] font-medium leading-relaxed max-w-3xl mx-auto">
            İnsanların gerçek problemlerini çözen kaliteli ve uzun ömürlü dijital ürünler geliştiriyoruz.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider gold-button shadow-md flex items-center justify-center gap-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Ürünlerimizi İncele</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1F1E1B] border border-[#E5E1D8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#B89248]" />
            <span>Hakkımızda</span>
          </a>
        </div>

        {/* Brand Pillars / Trust Guarantees */}
        <div className="pt-12 border-t border-[#EAE6DF] max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-medium text-[#78716C]">
          <div className="flex items-center justify-center gap-2 bg-[#FDFBF7]/80 p-3 rounded-2xl border border-[#E5E1D8]">
            <ShieldCheck className="w-4 h-4 text-[#B89248] shrink-0" />
            <span>Kendi Ürünlerimiz</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#FDFBF7]/80 p-3 rounded-2xl border border-[#E5E1D8]">
            <CheckCircle2 className="w-4 h-4 text-[#2D5237] shrink-0" />
            <span>Odaklı & Sade UI</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#FDFBF7]/80 p-3 rounded-2xl border border-[#E5E1D8] col-span-2 sm:col-span-1">
            <Award className="w-4 h-4 text-[#B89248] shrink-0" />
            <span>Uzun Ömürlü Kalite</span>
          </div>
        </div>

      </div>
    </section>
  );
};
