import { ChevronDown, HelpCircle, Mail, MapPin, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FAQS } from '../data/studioData';

export const FaqAndContact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Genel Bilgi & İletişim',
    message: '',
  });
  const [formNotice, setFormNotice] = useState(false);

  const mailtoHref = useMemo(() => {
    const body = [
      `Ad Soyad: ${contactForm.name}`,
      `E-posta: ${contactForm.email}`,
      '',
      contactForm.message,
    ].join('\n');
    return `mailto:gulstudiosapps@gmail.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(body)}`;
  }, [contactForm]);

  return (
    <section id="contact" className="contact-editorial" aria-labelledby="contact-title">
      <div className="contact-editorial__pattern" aria-hidden="true" />
      <div className="contact-editorial__inner">
        <div className="contact-editorial__heading" data-reveal>
          <div className="section-kicker"><MessageSquare aria-hidden="true" />İLETİŞİM & MERAK EDİLENLER</div>
          <h2 id="contact-title">Bir fikri<br /><span>konuşalım.</span></h2>
          <p>Sorularınız ve ürünlerimiz hakkındaki görüşleriniz için doğrudan e-posta üzerinden bize ulaşabilirsiniz.</p>
          <div className="contact-details">
            <a href="mailto:gulstudiosapps@gmail.com"><Mail aria-hidden="true" /><span><small>Resmî iletişim</small>gulstudiosapps@gmail.com</span></a>
            <span><MapPin aria-hidden="true" /><span><small>Stüdyo</small>İstanbul, Türkiye</span></span>
          </div>
        </div>

        <div className="contact-editorial__content">
          <div className="faq-editorial" data-reveal>
            <div className="subsection-heading"><HelpCircle aria-hidden="true" /><h3>Sıkça Sorulan Sorular</h3></div>
            <div>
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                const buttonId = `faq-button-${index}`;
                const answerId = `faq-answer-${index}`;
                return (
                  <article key={faq.question} className={isOpen ? 'is-open' : ''}>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span><small>0{index + 1}</small>{faq.question}</span>
                      <ChevronDown aria-hidden="true" />
                    </button>
                    <div id={answerId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{faq.answer}</p></div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="contact-form-panel" data-reveal>
            <div className="subsection-heading"><Send aria-hidden="true" /><div><h3>Mesajınızı hazırlayın</h3><p>Bu form veri göndermez; e-posta taslağı oluşturur.</p></div></div>
            <form onSubmit={(event) => { event.preventDefault(); setFormNotice(true); }} className="editorial-form">
              <div className="editorial-form__row">
                <div><label htmlFor="contact-name">Adınız Soyadınız *</label><input id="contact-name" required value={contactForm.name} onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })} placeholder="Ad Soyad" /></div>
                <div><label htmlFor="contact-email">E-posta adresiniz *</label><input id="contact-email" type="email" required value={contactForm.email} onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })} placeholder="ornek@eposta.com" /></div>
              </div>
              <label htmlFor="contact-subject">Konu</label>
              <input id="contact-subject" value={contactForm.subject} onChange={(event) => setContactForm({ ...contactForm, subject: event.target.value })} />
              <label htmlFor="contact-message">Mesajınız *</label>
              <textarea id="contact-message" required rows={5} value={contactForm.message} onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })} placeholder="Mesajınızı veya sorunuzu yazın..." />
              <button type="submit" className="editorial-button editorial-button--primary w-full"><Send aria-hidden="true" />E-posta seçeneğini hazırla</button>

              {formNotice && (
                <div role="status" className="contact-form-notice">
                  <p>Bilgileriniz kaydedilmedi veya iletilmedi. Devam etmek için e-posta taslağını açın.</p>
                  <a href={mailtoHref}><Mail aria-hidden="true" />E-posta uygulamasında aç</a>
                </div>
              )}
              <p className="form-privacy-note"><ShieldCheck aria-hidden="true" />Bu alan hiçbir form verisini saklamaz.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
