import React from 'react';
import { Target, Award, Clock, Heart, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      title: 'Gerçek problemlere odaklanıyoruz.',
      desc: 'İnsanların günlük hayatında veya iş süreçlerinde karşılaştığı somut sıkıntıları tespit eder, doğrudan çözüm sunan ürünler geliştiririz.',
      icon: Target,
      tag: 'Odak'
    },
    {
      title: 'Kaliteden ödün vermiyoruz.',
      desc: 'Tasarım detaylarından arka plan kod yapısına kadar her aşamada yüksek mühendislik standartlarını ve temiz mimariyi uygularız.',
      icon: Award,
      tag: 'Kalite'
    },
    {
      title: 'Uzun vadeli düşünüyoruz.',
      desc: 'Geçici trendler veya anlık popülarite yerine, yıllarca kararlılıkla çalışacak, bakımı kolay ve sürdürülebilir altyapılar inşa ederiz.',
      icon: Clock,
      tag: 'Süreklilik'
    },
    {
      title: 'Kullanıcı deneyimini önemsiyoruz.',
      desc: 'Karmaşık menülerden ve gürültüden arındırılmış, kullanıcıya huzur veren sade arayüzler tasarlarız.',
      icon: Heart,
      tag: 'Deneyim'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#FAF9F5] via-[#F5F1E7]/70 to-[#FAF8F5] border-t border-[#EAE6DF] relative overflow-hidden">
      
      {/* Subtle Ambient Studio Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B89248]/3 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#E8EFE9]/40 blur-[110px] rounded-full pointer-events-none"></div>

      {/* Low-Opacity Geometric Layers */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-3xl border border-[#1F1E1B]/05 rotate-6 pointer-events-none opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-[#B89248]/10 pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89248]" />
            <span>İlkelerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1E1B] tracking-tight">
            Neden GÜL STUDIOS?
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg max-w-2xl mx-auto">
            Abartılı vaatler veya karmaşık jargonlar yerine, geliştirdiğimiz her ürüne rehberlik eden 4 temel ilke:
          </p>
        </div>

        {/* 4 Clean Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-card-light p-8 rounded-3xl border border-[#E5E1D8] bg-[#FDFBF7] hover:border-[#B89248]/40 transition-all space-y-4 group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248] shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#B89248]" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full gold-badge font-semibold">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-[#1F1E1B] group-hover:text-[#B89248] transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
