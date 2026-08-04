import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Analiz & Keşif',
      subtitle: 'İhtiyaç ve Kapsam Tespiti',
      icon: Search,
      desc: 'Projenizin temel hedeflerini, hedef kitlesini, pazar dinamiklerini ve teknik gereksinimlerini derinlemesine analiz ediyor; net bir yol haritası çıkarıyoruz.',
      deliverables: [
        'İhtiyaç Analiz Raporu',
        'Teknik Kapsam Dokümanı',
        'Zaman & Bütçe Planlaması'
      ]
    },
    {
      num: '02',
      title: 'Planlama & Mimari',
      subtitle: 'Sistem Kurgusu ve Veritabanı Mimarisi',
      icon: Compass,
      desc: 'Ölçeklenebilir veritabanı şemasını, API yapısını, güvenlik katmanlarını ve bulut altyapı mimarisini tasarlıyoruz.',
      deliverables: [
        'Sistem Mimarisi Diyagramı',
        'Veritabanı Şeması',
        'Geliştirme Sprint Takvimi'
      ]
    },
    {
      num: '03',
      title: 'Tasarım & UI/UX',
      subtitle: 'Kusursuz Kullanıcı Deneyimi',
      icon: Palette,
      desc: 'Apple ve Vercel ilhamlı sade, göz yormayan ve marka kimliğinize güç katan pixel-perfect tel çerçeveler ve interaktif prototipler hazırlıyoruz.',
      deliverables: [
        'Design System & Tipografi',
        'Tüm Ekran UI/UX Tasarımı',
        'Tıklanabilir Figma Prototipi'
      ]
    },
    {
      num: '04',
      title: 'Geliştirme',
      subtitle: 'Temiz Kod & Modüler Yapı',
      icon: Code2,
      desc: 'TypeScript, Next.js veya React Native ile modüler, tip-güvenli ve sürdürülebilir kodlar yazarak ürünü hayata geçiriyoruz.',
      deliverables: [
        'Tip Güvenli Kod Tabanı',
        'Sürekli Entegrasyon (CI/CD)',
        'Haftalık Canlı Demo Sunumları'
      ]
    },
    {
      num: '05',
      title: 'Test & Optimizasyon',
      subtitle: 'Güvenlik & Performans Denetimi',
      desc: 'Tüm sistem fonksiyonlarını, güvenlik açıklarını, cross-browser uyumluluğunu ve Lighthouse performans değerlerini titizlikle test ediyoruz.',
      deliverables: [
        '%100 Lighthouse Performans',
        'Güvenlik & Sızma Testi',
        'Stres & Yük Testleri'
      ]
    },
    {
      num: '06',
      title: 'Teslim & Yayın',
      subtitle: 'Canlıya Alım & Sürekli Destek',
      desc: 'Uygulamanızı Google Cloud / App Store ortamına sorunsuz canlıya alıyor, ekibinizi eğitiyor ve 6 ay kesintisiz teknik destek garantisi veriyoruz.',
      deliverables: [
        'Canlı Ortam Kurulumu',
        'Kaynak Kod & Dokümantasyon',
        '6 Ay Kesintisiz Garanti'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0B0B0D] relative overflow-hidden bg-grid-pattern border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold gold-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Sistematik Metodoloji</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#FAFAFA] tracking-tight">
            Çalışma Sürecimiz
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Fikirden canlı yayınlanan ürüne kadar 6 adımlı disiplinli geliştirme metodolojimiz.
          </p>
        </div>

        {/* Timeline Desktop Stepper */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#171717] border-[#C9A227] gold-glow-sm scale-105'
                  : 'bg-[#171717]/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="text-xs font-mono font-bold text-[#C9A227]">{step.num}</div>
              <div className={`text-sm font-bold mt-1 ${activeStep === idx ? 'text-[#FAFAFA]' : 'text-neutral-400'}`}>
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Card Showcase */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#171717] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-display font-extrabold text-[#C9A227]">
                  {steps[activeStep].num}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FAFAFA]">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xs font-mono text-[#C9A227]/90 mt-0.5">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Aşama Çıktıları & Teslimatlar:
                </div>
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 pt-6">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0B0B0D] text-neutral-300 border border-white/10 disabled:opacity-30 cursor-pointer hover:bg-white/5"
                >
                  Önceki Aşama
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#C9A227] text-[#0B0B0D] disabled:opacity-30 cursor-pointer hover:bg-[#D8B338] gold-glow-sm"
                >
                  Sonraki Aşama
                </button>
              </div>
            </div>

            {/* Visual Step Illustration Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-[#0B0B0D] rounded-2xl border border-white/5 text-center">
              {React.createElement(steps[activeStep].icon, {
                className: "w-20 h-20 text-[#C9A227] animate-pulse mb-4"
              })}
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Süreç Adımı {activeStep + 1} / {steps.length}
              </div>
              <div className="text-sm font-bold text-[#FAFAFA] mt-1">
                GÜL STUDIOS Kalite Güvencesi
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Accordion Style Grid */}
        <div className="lg:hidden grid grid-cols-1 gap-4 mt-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border ${
                activeStep === idx
                  ? 'bg-[#171717] border-[#C9A227]'
                  : 'bg-[#171717]/40 border-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-mono font-bold text-[#C9A227]">{step.num}</span>
                  <span className="text-sm font-bold text-[#FAFAFA]">{step.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
