import React from 'react';
import { Heart, Zap, Code2, Eye, Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      title: 'Yazılımın Ötesinde Fayda',
      desc: 'Bizim için bir uygulamanın başarısı, yazılan kod satırı sayısı değil; kullanıcısının hayatında bıraktığı olumlu iz ve sunduğu gerçek faydadır.',
      icon: Heart
    },
    {
      title: 'Minimalist & Odaklanmış Tasarım',
      desc: 'Gereksiz bildirimler, kafa karıştıran menüler ve dijital gürültüden uzak duruyoruz. Saf, göz yormayan ve işlevsel arayüzler tasarlıyoruz.',
      icon: Eye
    },
    {
      title: 'Mükemmel Hız ve Performans',
      desc: 'Bir uygulamanın yavaş çalışması, kullanıcının zamanına saygısızlıktır. Tüm projelerimizde milisaniyelik açılış sürelerini hedefleriz.',
      icon: Zap
    },
    {
      title: 'Zanaatkar Disiplini & Temiz Kod',
      desc: 'Yazılımı bir seri üretim değil, zanaat olarak görüyoruz. Tip güvenliği, modüler mimari ve sürdürülebilir kod standartlarına sadığız.',
      icon: Code2
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0D] relative overflow-hidden border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold gold-glow-sm">
            <Compass className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>GÜL STUDIOS İlkeleri</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#FAFAFA] tracking-tight">
            Geliştirme Felsefemiz
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Neden varız ve projelerimizi hangi prensipler doğrultusunda inşa ediyoruz?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#C9A227]/50 transition-all flex items-start gap-5 group bg-[#171717]/80"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0B0B0D] border border-[#C9A227]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform gold-glow-sm">
                  <IconComp className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-[#FAFAFA] group-hover:text-[#C9A227] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
