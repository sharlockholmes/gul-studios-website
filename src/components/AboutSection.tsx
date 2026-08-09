import { CheckCircle2, Quote, Sparkles } from 'lucide-react';

export const AboutSection = () => (
  <section id="approach" className="approach-editorial">
    <div className="approach-editorial__pattern" aria-hidden="true" />
    <div className="approach-editorial__inner">
      <div className="approach-editorial__heading" data-reveal>
        <div className="section-kicker section-kicker--dark"><Sparkles aria-hidden="true" />YAKLAŞIMIMIZ</div>
        <h2>Neden<br />varız?</h2>
        <span>İSTANBUL · TÜRKİYE</span>
      </div>

      <div className="approach-editorial__quote" data-reveal>
        <Quote aria-hidden="true" />
        <blockquote>İnsanların gerçek problemlerini çözen ve yıllar içinde bakımı sürdürülebilen dijital ürünler geliştiriyoruz.</blockquote>
        <div className="approach-editorial__question">
          <span>Her yeni üründe ilk sorumuz şudur.</span>
          <strong>“Bu ürün gerçekten bir insanın hayatını kolaylaştırıyor mu?”</strong>
          <p>Eğer cevap evetse, geliştirmeye başlarız.</p>
        </div>
        <div className="approach-editorial__meta">
          <span><CheckCircle2 aria-hidden="true" />İnsan odaklı yazılım</span>
          <span><CheckCircle2 aria-hidden="true" />İstanbul’dan global etki</span>
        </div>
      </div>
    </div>
  </section>
);
