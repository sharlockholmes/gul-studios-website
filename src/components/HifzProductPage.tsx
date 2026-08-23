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
import { absoluteUrl, HIFZ_PLAY_STORE_URL } from '../config/site';
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
    copy: 'HIFZ, hafızlık sınavına hazırlanırken farklı soru türleriyle pratik yapmayı kolaylaştıran sade ve odaklı bir çalışma uygulamasıdır.',
  },
  {
    number: '02',
    title: 'Neden geliştirildi?',
    copy: 'Sınav modu, sûre bulma, benzer ayetler ve cüz/sayfa egzersizleri gibi çalışma türlerini tek yerde, anlaşılır bir akışta sunmak için geliştirildi.',
  },
  {
    number: '03',
    title: 'Geliştirme yaklaşımı',
    copy: 'Çalışma geçmişi, istatistikler ve hata/tekrar takibi kullanıcının ilerlemesini görmesini kolaylaştırır; arayüz dikkat dağıtmadan pratik yapmaya odaklanır.',
  },
];

export const HifzProductPage = ({ onBackToHome, onOpenPrivacyModal }: HifzProductPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="hifz-page">
      <Seo
        title="HIFZ — Hafızlık Sınav Hazırlık | GÜL STUDIOS"
        description="Hafızlık sınavına hazırlık için sınav modu, sûre bulma, benzer ayetler ve cüz/sayfa çalışmaları sunan HIFZ uygulaması."
        path="/hifz"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: 'HIFZ — Hafızlık Sınav Hazırlık',
              description: 'Hafızlık sınavına hazırlık için sınav modu, sûre bulma, benzer ayetler ve cüz/sayfa çalışmaları sunan HIFZ uygulaması.',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Android',
              url: absoluteUrl('/hifz'),
              downloadUrl: HIFZ_PLAY_STORE_URL,
            },
            { '@type': 'FAQPage', mainEntity: HIFZ_FAQS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
          ],
        }}
      />

      <div className="hifz-subnav">
        <div>
          <button type="button" onClick={onBackToHome} className="hifz-subnav__back"><ArrowLeft aria-hidden="true" />Ana sayfaya dön</button>
          <span className="hifz-subnav__status"><i aria-hidden="true" />Google Play’de yayında</span>
          <a href={HIFZ_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hifz-subnav__cta"><Download aria-hidden="true" /><span>Google Play’den indir</span></a>
        </div>
      </div>

      <main className="hifz-page-canvas">
        <GlobalDecorativeBackground variant="hifz" />
        <section className="hifz-detail-hero">
          <div className="hifz-detail-hero__pattern" aria-hidden="true" />
          <div className="hifz-detail-hero__inner">
            <div className="hifz-detail-hero__copy">
              <div className="hifz-product-identity">
                <HifzIcon eager />
                <div className="section-kicker"><BookOpen aria-hidden="true" />HIFZ · HAFIZLIK SINAV HAZIRLIK</div>
              </div>
              <h1>Hafızlık çalışmasına<br /><span>sakin ve odaklı</span><br />bir eşlikçi.</h1>
              <p>Hafızlık sınavına hazırlanırken farklı soru türleriyle pratik yapmayı kolaylaştıran sade ve odaklı çalışma uygulaması.</p>
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

        <section className="hifz-story editorial-section">
          <div className="editorial-section__heading" data-reveal>
            <div className="section-kicker"><Brain aria-hidden="true" />AMAÇ & YAKLAŞIM</div>
            <h2>Sınava hazırlanırken<br /><span>odaklı pratik yapmak.</span></h2>
          </div>
          <div className="hifz-story__list">
            {storyItems.map((item, index) => (
              <article key={item.number} data-reveal style={{ transitionDelay: `${index * 80}ms` }}><b>{item.number}</b><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>
            ))}
          </div>
        </section>

        <section className="hifz-faq editorial-section">
          <div className="editorial-section__heading" data-reveal>
            <div className="section-kicker"><BookOpen aria-hidden="true" />SIKÇA SORULAN SORULAR</div>
            <h2>HIFZ hakkında<br /><span>merak edilenler.</span></h2>
          </div>
          <div className="faq-editorial" data-reveal>
            {HIFZ_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const buttonId = `hifz-faq-button-${index}`;
              const answerId = `hifz-faq-answer-${index}`;
              return (
                <article key={faq.question} className={isOpen ? 'is-open' : ''}>
                  <button id={buttonId} type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}><span><small>0{index + 1}</small>{faq.question}</span><ChevronDown aria-hidden="true" /></button>
                  {isOpen && <div id={answerId} role="region" aria-labelledby={buttonId}><p>{faq.answer}</p></div>}
                </article>
              );
            })}
          </div>
        </section>

        <section className="hifz-final-cta">
          <div data-reveal>
            <span><BookOpen aria-hidden="true" /></span>
            <div><small>GOOGLE PLAY’DE YAYINDA</small><h2>HIFZ’ı şimdi kullanmaya başlayın.</h2><p>Uygulamayı Google Play üzerinden indirebilir ve hafızlık çalışmalarınıza hemen başlayabilirsiniz.</p></div>
            <div><a href={HIFZ_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="editorial-button editorial-button--gold"><Download aria-hidden="true" />Google Play’den indir</a><button type="button" onClick={onOpenPrivacyModal} className="hifz-final-cta__privacy"><ShieldCheck aria-hidden="true" />Gizlilik</button></div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HifzProductPage;
