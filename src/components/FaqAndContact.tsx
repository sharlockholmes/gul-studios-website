import React, { useState } from 'react';
import { FAQS } from '../data/studioData';
import { 
  HelpCircle, 
  ChevronDown, 
  Send, 
  Check, 
  ShieldCheck, 
  MessageSquare,
  Mail,
  MapPin
} from 'lucide-react';

export const FaqAndContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Genel Bilgi & İletişim',
    message: ''
  });
  const [formNotice, setFormNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormNotice(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#FAF9F5] via-[#F5F1E7]/80 to-[#FAF9F5] relative overflow-hidden border-t border-[#EAE6DF] bg-grid-pattern-light">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F8F4EA] blur-[140px] rounded-full pointer-events-none opacity-80"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#B89248]/4 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Low-Opacity Geometric Layers */}
      <div className="absolute top-12 right-12 w-80 h-80 rounded-full border border-[#B89248]/10 pointer-events-none opacity-20"></div>
      <div className="absolute bottom-12 left-12 w-64 h-64 rounded-3xl border border-[#1F1E1B]/05 rotate-12 pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#B89248]" />
            <span>İletişim & Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1E1B] tracking-tight">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg">
            Sade. Temiz. Minimal. Sorularınızı veya projelerinizi paylaşın, doğrudan ekibimiz dönüş yapsın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: FAQ Accordion & Direct Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#B89248]" />
              <h3 className="text-xl font-display font-bold text-[#1F1E1B]">Sıkça Sorulan Sorular</h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="glass-card-light rounded-2xl border border-[#E5E1D8] overflow-hidden transition-all bg-[#FDFBF7]"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#1F1E1B] hover:text-[#B89248] cursor-pointer transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B89248] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div id={`faq-answer-${idx}`} className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] border-t border-[#EAE6DF] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Studio Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] space-y-1 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#78716C] font-mono">
                  <Mail className="w-3.5 h-3.5 text-[#B89248]" />
                  <span>Resmi İletişim Adresi</span>
                </div>
                <a href="mailto:gulstudiosapps@gmail.com" className="text-sm font-bold text-[#1F1E1B] hover:text-[#B89248] block transition-colors">
                  gulstudiosapps@gmail.com
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] space-y-1 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#78716C] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#B89248]" />
                  <span>Stüdyo Konumu</span>
                </div>
                <div className="text-sm font-bold text-[#1F1E1B]">İstanbul, Türkiye</div>
              </div>
            </div>

          </div>

          {/* Right Column: Minimal Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="glass-card-light p-8 rounded-3xl border border-[#E5E1D8] relative bg-[#FDFBF7] shadow-md space-y-6">
              
              <div>
                <h3 className="text-2xl font-display font-bold text-[#1F1E1B]">Mesaj İletin</h3>
                <p className="text-xs text-[#78716C] mt-1">
                  GÜL STUDIOS ekibine doğrudan mesaj göndermek için formu doldurabilirsiniz.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#44403C] mb-1.5">Adınız Soyadınız *</label>
                    <input
                      id="contact-name"
                        type="text"
                        required
                        placeholder="Ad Soyad"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248]"
                      />
                    </div>

                    <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#44403C] mb-1.5">E-Posta Adresiniz *</label>
                    <input
                      id="contact-email"
                        type="email"
                        required
                        placeholder="gulstudiosapps@gmail.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#44403C] mb-1.5">Konu</label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#44403C] mb-1.5">Mesajınız *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Mesajınızı veya sorunuzu yazın..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl gold-button font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>İletişim seçeneğini göster</span>
                  </button>

                  {formNotice && (
                    <div role="status" className="rounded-xl border border-[#B89248]/30 bg-[#F8F4EA] p-4 text-xs text-[#57534E] leading-relaxed">
                      Bu formun gönderim altyapısı henüz aktif değil; bilgileriniz kaydedilmedi veya iletilmedi. Bize <a className="font-bold text-[#8C6A24] underline" href={`mailto:gulstudiosapps@gmail.com?subject=${encodeURIComponent(contactForm.subject)}`}>gulstudiosapps@gmail.com</a> üzerinden ulaşabilirsiniz.
                    </div>
                  )}

                  <p className="text-[11px] text-[#78716C] text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D5237]" />
                    <span>Doğrudan geliştiriciye iletilmektedir.</span>
                  </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
