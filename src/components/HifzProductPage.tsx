import {
  ArrowLeft,
  BookOpen,
  Brain,
  ChevronDown,
  Clock,
  Download,
  ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import { HIFZ_PLAY_STORE_URL } from '../config/site';
import { HIFZ_SEO } from '../config/seo';
import { HIFZ_FAQS } from '../data/studioData';
import { HifzIcon } from './HifzIcon';
import { HifzFeatureArt } from './HifzFeatureArt';
import { GlobalDecorativeBackground } from './GlobalDecorativeBackground';
import { Seo } from './Seo';

interface HifzProductPageProps {
  onBackToHome: () => void;
  onOpenPrivacyModal: () => void;
}

const storyItems = [
  {
    number: '01',
    title: 'Uygulamanın amacı',
    copy: 'HIFZ, Kur’an ezberini farklı çalışma ve soru türleriyle tekrar etmeyi, test etmeyi ve pekiştirmeyi kolaylaştıran bir çalışma uygulamasıdır.',
  },
  {
    number: '02',
    title: 'Neden geliştirildi?',
    copy: 'Hafızlık sürecinde yalnızca okumak değil; sayfa, sûre, cüz ve ayetler arasında zihinsel bağlantılar kurarak ezberi farklı yönlerden çalışmak da önemlidir. HIFZ, bu çalışmaları tek yerde ve düzenli bir akışta sunmak için geliştirildi.',
  },
  {
    number: '03',
    title: 'Geliştirme yaklaşımı',
    copy: 'Sınav modu, farklı çalışma türleri, hata defteri, istatistikler ve sayfa başı/sonu çalışmaları; kullanıcının ezberini sınamasına, zorlandığı yerleri fark etmesine ve tekrarlarını daha bilinçli yapmasına yardımcı olacak şekilde tasarlanmıştır.',
  },
];

export const HifzProductPage = ({ onBackToHome, onOpenPrivacyModal }: HifzProductPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="hifz-page">
      <Seo {...HIFZ_SEO} />

      <div className="hifz-subnav">
        <div>
          <a href="/" onClick={(event) => { event.preventDefault(); onBackToHome(); }} className="hifz-subnav__back"><ArrowLeft aria-hidden="true" />Ana sayfaya dön</a>
          <span className="hifz-subnav__status"><i aria-hidden="true" />Google Play’de yayında</span>
          <a href={HIFZ_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hifz-subnav__cta"><Download aria-hidden="true" /><span>Google Play’den indir</span></a>
        </div>
      </div>

      <main id="main-content" className="hifz-page-canvas" tabIndex={-1}>
        <GlobalDecorativeBackground variant="hifz" />
        <section className="hifz-detail-hero" aria-labelledby="hifz-page-title">
          <div className="hifz-detail-hero__pattern" aria-hidden="true" />
          <div className="hifz-detail-hero__inner">
            <div className="hifz-detail-hero__copy">
              <div className="hifz-product-identity">
                <HifzIcon eager />
                <div className="section-kicker"><BookOpen aria-hidden="true" /><h1 id="hifz-page-title" className="hifz-identity-title">HIFZ · Ezberini<br />farklı yollarla<br />pekiştir.</h1></div>
              </div>
              <p className="hifz-detail-hero__headline">Hafızlık çalışmasına<br /><span>sakin ve odaklı</span><br />bir eşlikçi.</p>
              <p className="hifz-detail-hero__description">Ezberini sağlamlaştırırken farklı soru türleriyle pratik yapmayı kolaylaştıran sade ve odaklı çalışma uygulaması.</p>
              <div className="hifz-detail-hero__actions">
                <a href={HIFZ_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="editorial-button editorial-button--primary"><Download aria-hidden="true" />Google Play’den indir</a>
              </div>
              <small>Google Play’de yayında.</small>
            </div>

            <div className="hifz-detail-hero__visual" aria-label="HIFZ ürün görseli">
              <div className="hifz-detail-hero__disc" aria-hidden="true" />
              <HifzFeatureArt variant="detail" />
            </div>
          </div>

          <div className="hifz-detail-facts" data-reveal>
            <span><BookOpen aria-hidden="true" /><b>Sınav modu</b><small>Farklı soru türleriyle pratik</small></span>
            <span><Clock aria-hidden="true" /><b>Google Play</b><small>Şimdi indirilebilir</small></span>
            <span><ShieldCheck aria-hidden="true" /><b>Sade arayüz</b><small>Ezbere ayrılmış dikkat</small></span>
          </div>
        </section>

        <section className="hifz-story editorial-section" aria-labelledby="hifz-story-title">
          <div className="editorial-section__heading" data-reveal>
            <div className="section-kicker"><Brain aria-hidden="true" />AMAÇ & YAKLAŞIM</div>
            <h2 id="hifz-story-title">Ezberini<br /><span>farklı yollarla</span><br />pekiştir.</h2>
          </div>
          <div className="hifz-story__list">
            {storyItems.map((item, index) => (
              <article key={item.number} data-reveal style={{ transitionDelay: `${index * 80}ms` }}><b>{item.number}</b><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>
            ))}
          </div>
        </section>

        <section className="hifz-faq editorial-section" aria-labelledby="hifz-faq-title">
          <div className="editorial-section__heading" data-reveal>
            <div className="section-kicker"><BookOpen aria-hidden="true" />SIKÇA SORULAN SORULAR</div>
            <h2 id="hifz-faq-title">HIFZ hakkında<br /><span>merak edilenler.</span></h2>
          </div>
          <div className="faq-editorial" data-reveal>
            {HIFZ_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const buttonId = `hifz-faq-button-${index}`;
              const answerId = `hifz-faq-answer-${index}`;
              return (
                <article key={faq.question} className={isOpen ? 'is-open' : ''}>
                  <button id={buttonId} type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}><span><small>0{index + 1}</small>{faq.question}</span><ChevronDown aria-hidden="true" /></button>
                  <div id={answerId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{faq.answer}</p></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hifz-final-cta" aria-labelledby="hifz-download-title">
          <div data-reveal>
            <span><BookOpen aria-hidden="true" /></span>
            <div><small>GOOGLE PLAY’DE YAYINDA</small><h2 id="hifz-download-title">HIFZ’ı şimdi kullanmaya başlayın.</h2><p>Uygulamayı Google Play üzerinden indirebilir ve hafızlık çalışmalarınıza hemen başlayabilirsiniz.</p></div>
            <div><a href={HIFZ_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="editorial-button editorial-button--gold"><Download aria-hidden="true" />Google Play’den indir</a><button type="button" onClick={onOpenPrivacyModal} className="hifz-final-cta__privacy"><ShieldCheck aria-hidden="true" />Gizlilik</button></div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HifzProductPage;
