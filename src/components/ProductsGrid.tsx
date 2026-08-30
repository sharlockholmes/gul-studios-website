import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { HifzIcon } from './HifzIcon';

interface ProductsGridProps {
  onInspectHifz: () => void;
}

const hifzHighlights = [
  ['Sınav modu', 'Farklı soru türleri'],
  ['Sûre çalışmaları', 'Odaklı tekrar'],
  ['Cüz / Sayfa', 'Düzenli pratik'],
];

const courseHighlights = [
  ['Öğrenciler', 'Takip ve gruplar'],
  ['İlerleme', 'Dönem görünümü'],
  ['Kurum yönetimi', 'Planlanıyor'],
];

export const ProductsGrid = ({ onInspectHifz }: ProductsGridProps) => (
  <section id="products" className="product-editorial" aria-labelledby="products-title">
    <div className="section-entry-rule" data-reveal aria-hidden="true" />
    <div className="product-showcase-heading" data-reveal>
      <div className="section-kicker"><Sparkles aria-hidden="true" />ÜRÜNLERİMİZ</div>
      <h2 id="products-title">Odaklı ürünler.<br /><span>Gerçek fayda.</span></h2>
      <p>Her ürün, belirli bir işi daha kolay yapmak için tasarlanır.</p>
    </div>

    <div className="product-card-grid">
      <article className="product-showcase-card product-showcase-card--hifz" data-reveal>
        <header className="product-showcase-card__header">
          <span>01 / EĞİTİM</span>
          <small>Yayında</small>
        </header>
        <div className="product-showcase-card__copy">
          <h3>HIFZ</h3>
          <p>Hafızlık sınavı için sınav modu, sûre çalışmaları, benzer ayetler ve cüz/sayfa egzersizlerini tek yerde sunan çalışma uygulaması.</p>
        </div>
        <div className="product-showcase-card__visual product-showcase-card__visual--hifz">
          <div className="product-launch-panel product-launch-panel--hifz">
            <span className="product-launch-panel__serial">GÜL STUDIOS / PRODUCT 01</span>
            <div className="product-launch-panel__identity">
              <HifzIcon eager />
              <div><small>HAFIZLIK SINAV HAZIRLIK</small><strong>HIFZ</strong></div>
            </div>
            <ol className="product-launch-panel__features" aria-label="HIFZ öne çıkan çalışma alanları">
              {hifzHighlights.map(([label, detail], index) => (
                <li key={label}><em>0{index + 1}</em><span><b>{label}</b><small>{detail}</small></span></li>
              ))}
            </ol>
          </div>
        </div>
        <footer className="product-showcase-card__footer">
          <a href="/hifz" onClick={(event) => { event.preventDefault(); onInspectHifz(); }}>HIFZ'i İncele <ArrowRight aria-hidden="true" /></a>
        </footer>
      </article>

      <article className="product-showcase-card product-showcase-card--course" data-reveal style={{ transitionDelay: '90ms' }}>
        <header className="product-showcase-card__header">
          <span>02 / KURUMSAL</span>
          <small>Planlanıyor</small>
        </header>
        <div className="product-showcase-card__copy">
          <h3>Kur’an Kursu<br />Yönetim Sistemi</h3>
          <p>Kur'an kursları ve hafızlık kurumları için planlanan kurum yönetim platformu.</p>
        </div>
        <div className="product-showcase-card__visual product-showcase-card__visual--course">
          <div className="product-launch-panel product-launch-panel--course">
            <span className="product-launch-panel__serial">GÜL STUDIOS / PRODUCT 02</span>
            <div className="product-launch-panel__identity">
              <span className="course-product-symbol"><GraduationCap aria-hidden="true" /></span>
              <div><small>PLANLANAN PLATFORM</small><strong>KURUM<br />YÖNETİMİ</strong></div>
            </div>
            <ol className="product-launch-panel__features" aria-label="Planlanan kurum yönetimi alanları">
              {courseHighlights.map(([label, detail], index) => (
                <li key={label}><em>0{index + 1}</em><span><b>{label}</b><small>{detail}</small></span></li>
              ))}
            </ol>
          </div>
        </div>
        <footer className="product-showcase-card__footer">
          <span>Yakında <ArrowRight aria-hidden="true" /></span>
        </footer>
      </article>
    </div>
  </section>
);
