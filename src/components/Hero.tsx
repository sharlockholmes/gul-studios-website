import { ArrowRight, BookOpen, Compass, Gem, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { HifzFeatureArt } from './HifzFeatureArt';

interface HeroProps {
  onInspectHifz: () => void;
}

const pillars = [
  { icon: Gem, title: 'Odaklı Ürünler', copy: 'Tek bir ihtiyacı çözmek için tasarlanan ürünler.' },
  { icon: Sparkles, title: 'Temiz & Modern', copy: 'Gereksiz adımları azaltan arayüzler.' },
  { icon: ShieldCheck, title: 'Uzun Ömürlü', copy: 'Bakımı ve güncellenmesi kolay ürünler.' },
  { icon: Leaf, title: 'İlham Veren Deneyim', copy: 'Dikkat dağıtmayan, anlaşılır kullanım.' },
];

export const Hero = ({ onInspectHifz }: HeroProps) => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bounds = stage.getBoundingClientRect();
        const distance = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
        const offset = Math.max(-12, Math.min(12, distance * 0.035));
        stage.style.setProperty('--hero-parallax', `${offset.toFixed(2)}px`);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero-editorial" aria-labelledby="home-hero-title">
        <div className="hero-paper-texture" aria-hidden="true" />
        <div className="hero-editorial__pattern" aria-hidden="true" />
        <div className="hero-lattice" aria-hidden="true" />
        <div className="hero-silhouette" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="hero-orbit-dots" aria-hidden="true" />

        <div className="hero-editorial__inner">
          <div className="hero-copy">
            <div className="animate-rise hero-eyebrow"><Sparkles aria-hidden="true" />GÜL STUDIOS — Bağımsız Dijital Ürün Stüdyosu</div>
            <h1 id="home-hero-title" className="animate-rise animate-rise--2">Yazılımın Ötesinde,<br /><span>Fayda Üretiyoruz.</span></h1>
            <p className="animate-rise animate-rise--3">Tek bir ihtiyaca odaklanan, kullanımı ve bakımı sade kalan dijital ürünler geliştiriyoruz.</p>
            <div className="animate-rise animate-rise--4 hero-actions">
              <a href="#products" className="editorial-button editorial-button--primary"><BookOpen aria-hidden="true" />Ürünlerimizi İncele <ArrowRight aria-hidden="true" /></a>
              <a href="#approach" className="editorial-button editorial-button--outline"><Compass aria-hidden="true" />Hakkımızda</a>
            </div>
          </div>

          <div ref={stageRef} className="hero-hifz-stage">
            <div className="hero-hifz-stage__disc" aria-hidden="true" />
            <div className="hero-hifz-stage__arc" aria-hidden="true" />
            <HifzFeatureArt className="hero-product-render" />
            <a href="/hifz" onClick={(event) => { event.preventDefault(); onInspectHifz(); }} className="hero-hifz-stage__label">HIFZ Uygulamasını Keşfet <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="feature-band-wrap" aria-label="GÜL STUDIOS çalışma ilkeleri">
        <div className="feature-band">
          {pillars.map(({ icon: Icon, title, copy }, index) => (
            <div key={title} className="feature-band__item" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <Icon className="feature-band__icon" aria-hidden="true" />
              <div><h2>{title}</h2><p>{copy}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
