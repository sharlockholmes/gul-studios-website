import { ArrowRight, BarChart3, GraduationCap, Sparkles, Users } from 'lucide-react';
import { HifzIcon } from './HifzIcon';

interface ProductsGridProps {
  onInspectHifz: () => void;
}

export const ProductsGrid = ({ onInspectHifz }: ProductsGridProps) => (
  <section id="products" className="product-editorial">
    <div className="section-entry-rule" data-reveal aria-hidden="true" />
    <div className="product-showcase-heading" data-reveal>
      <div className="section-kicker"><Sparkles aria-hidden="true" />ÜRÜNLERİMİZ</div>
      <h2>Odaklı ürünler.<br /><span>Gerçek fayda.</span></h2>
      <p>Her ürün, belirli bir işi daha kolay yapmak için tasarlanır.</p>
    </div>

    <div className="product-card-grid">
      <article className="product-showcase-card product-showcase-card--hifz" data-reveal>
        <header className="product-showcase-card__header">
          <span>01 / EĞİTİM</span>
          <small>Kapalı test</small>
        </header>
        <div className="product-showcase-card__copy">
          <h3>HIFZ</h3>
          <p>Hafızlık Sınav Hazırlık</p>
        </div>
        <div className="product-showcase-card__visual product-showcase-card__visual--hifz" aria-label="HIFZ uygulama kimliği">
          <div className="hifz-product-emblem">
            <HifzIcon eager />
            <button type="button" onClick={onInspectHifz} className="hifz-product-emblem__cta">HIFZ'i İncele <ArrowRight aria-hidden="true" /></button>
          </div>
        </div>
      </article>

      <article className="product-showcase-card product-showcase-card--course" data-reveal style={{ transitionDelay: '90ms' }}>
        <header className="product-showcase-card__header">
          <span>02 / KURUMSAL</span>
          <small>Planlanıyor</small>
        </header>
        <div className="product-showcase-card__copy">
          <h3>Kur'an Kursu<br />Yönetim Sistemi</h3>
          <p>Kur'an kursları ve hafızlık kurumları için planlanan kurum yönetim platformu.</p>
        </div>
        <div className="product-showcase-card__visual product-showcase-card__visual--course" aria-label="Kur'an Kursu Yönetim Sistemi ürün ön izlemesi">
          <div className="course-product-symbol"><GraduationCap aria-hidden="true" /></div>
          <div className="course-product-interface" aria-hidden="true">
            <span><Users /><i><b>Öğrenciler</b><small>Takip ve gruplar</small></i></span>
            <span><BarChart3 /><i><b>İlerleme</b><small>Dönem görünümü</small></i></span>
            <div><i /><i /><i /><i /></div>
          </div>
        </div>
        <footer className="product-showcase-card__footer">
          <span>Yakında <ArrowRight aria-hidden="true" /></span>
        </footer>
      </article>
    </div>
  </section>
);
