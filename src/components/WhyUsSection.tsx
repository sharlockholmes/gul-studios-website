import { Award, Clock, Heart, Sparkles, Target } from 'lucide-react';

const points = [
  {
    title: 'Gerçek problemleri çözüyoruz.',
    desc: 'Günlük hayatta ya da işte tekrar eden bir sıkıntıyı seçer, ürünü o sorunu çözmek için tasarlarız.',
    icon: Target,
    tag: 'Odak',
  },
  {
    title: 'Detayları açıkta bırakmıyoruz.',
    desc: 'Arayüzden kod yapısına kadar, sonradan değiştirmesi zor kararları baştan düşünürüz.',
    icon: Award,
    tag: 'Kalite',
  },
  {
    title: 'Ürün ilk sürümle bitmez.',
    desc: 'Güncellenmesi ve bakımı daha kolay yapılar kurmaya çalışırız.',
    icon: Clock,
    tag: 'Süreklilik',
  },
  {
    title: 'Kullanıcının dikkatini koruyoruz.',
    desc: 'Menüleri, seçenekleri ve görsel gürültüyü azaltır; kullanıcının yapacağı işe yer açarız.',
    icon: Heart,
    tag: 'Deneyim',
  },
];

export const WhyUsSection = () => (
  <section id="why-us" className="why-editorial" aria-labelledby="why-us-title">
    <div className="why-editorial__pattern" aria-hidden="true" />
    <div className="section-entry-rule" data-reveal aria-hidden="true" />
    <div className="why-editorial__inner">
      <div className="why-editorial__intro" data-reveal>
        <div className="section-kicker"><Sparkles aria-hidden="true" />İLKELERİMİZ</div>
        <h2 id="why-us-title">Neden<br /><span>GÜL STUDIOS?</span></h2>
        <p>Dört ilke, hangi ürünü geliştireceğimize ve nasıl geliştireceğimize yön verir.</p>
        <div className="why-editorial__note"><b>01—04</b><span>Her karar şu soruyla başlar.<br />Kullanıcı bununla neyi daha kolay yapacak?</span></div>
      </div>

      <ol className="principle-list">
        {points.map(({ title, desc, icon: Icon, tag }, index) => (
          <li key={title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
            <span className="principle-list__number">0{index + 1}</span>
            <span className="principle-list__icon"><Icon aria-hidden="true" /></span>
            <div><h3>{title}</h3><p>{desc}</p></div>
            <small>{tag}</small>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
