import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Play, 
  Pause, 
  Volume2, 
  Repeat, 
  ShieldCheck, 
  Smartphone, 
  Award, 
  Clock, 
  HelpCircle,
  ChevronDown,
  Cpu,
  Brain,
  History,
  Image as ImageIcon,
  Send,
  Check
} from 'lucide-react';
import { HIFZ_MOCK_SURAHS, HIFZ_FAQS } from '../data/studioData';

interface HifzProductPageProps {
  onBackToHome: () => void;
  onOpenPrivacyModal: () => void;
}

export const HifzProductPage: React.FC<HifzProductPageProps> = ({ onBackToHome, onOpenPrivacyModal }) => {
  const [selectedSurah, setSelectedSurah] = useState(HIFZ_MOCK_SURAHS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [showTestModal, setShowTestModal] = useState(false);
  const [testForm, setTestForm] = useState({ name: '', email: '', note: '' });
  const [testFormSubmitted, setTestFormSubmitted] = useState(false);

  const handleNextAyah = () => {
    if (currentAyah < selectedSurah.totalAyah) {
      setCurrentAyah(prev => prev + 1);
    } else {
      setCurrentAyah(1);
    }
  };

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTestFormSubmitted(true);
    setTimeout(() => {
      setTestFormSubmitted(false);
      setShowTestModal(false);
    }, 2500);
  };

  const screenshotPlaceholders = [
    {
      title: 'Akıllı Ezber & Tekrar Takvimi',
      desc: 'Hermann Ebbinghaus unutma eğrisi odaklı otomatik tekrar hesaplayıcı.',
      assetName: 'hifz-screenshot-1.png'
    },
    {
      title: 'Sesli AI Ezber Doğrulama',
      desc: 'Okuma esnasında ayet ve tecvid takibini anlık yapan ses analiz motoru.',
      assetName: 'hifz-screenshot-2.png'
    },
    {
      title: 'Cüz & Sayfa İlerlemesi',
      desc: 'Ezber kalitenizi ve hafızlık durumunuzu gösteren sade takip grafikleri.',
      assetName: 'hifz-screenshot-3.png'
    },
    {
      title: 'Gece Modu & Saf Tipografi',
      desc: 'Gözü yormayan dinlendirici renkler ve saf okunabilirlik.',
      assetName: 'hifz-screenshot-4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1F1E1B] font-sans antialiased pt-20">
      
      {/* Sticky Top Bar for Product Page */}
      <div className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE6DF] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#57534E] hover:text-[#B89248] transition-colors cursor-pointer bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E5E1D8] shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Ana Sayfaya Dön</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFBEB] text-[#B45309] border border-[#FCD34D]/50 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span>Google Play Kapalı Test Sürecinde</span>
            </div>

            <button
              onClick={() => setShowTestModal(true)}
              className="px-4 py-2 rounded-xl gold-button font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Test Sürümüne Katıl</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FAF9F5] via-[#F6F2E8] to-[#FAF9F5] border-b border-[#EAE6DF] overflow-hidden">
        
        {/* Soft Background Radial Light & Low-Opacity Geometric Layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F8F4EA] blur-[140px] rounded-full pointer-events-none opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#B89248]/12 pointer-events-none opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-[60px] rotate-12 border border-[#1F1E1B]/05 pointer-events-none opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Logo Placeholder */}
          <div className="w-24 h-24 rounded-3xl bg-[#1F1E1B] border-2 border-[#B89248]/40 mx-auto flex items-center justify-center text-[#B89248] shadow-lg relative overflow-hidden group">
            <img 
              src="/assets/hifz-logo.png" 
              alt="Hıfz Logo" 
              className="w-full h-full object-cover hidden"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <BookOpen className="w-12 h-12 text-[#B89248]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sage-badge text-xs font-semibold gold-glow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#B89248]" />
            <span>GÜL STUDIOS — Ürün Tanıtımı</span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#1F1E1B] tracking-tight leading-[1.12]">
              Hıfz: <span className="text-[#B89248]">Akıllı Kur'an Ezber</span> ve Takip Asistanı
            </h1>
            <p className="text-base sm:text-xl text-[#57534E] leading-relaxed max-w-3xl mx-auto font-normal">
              Bilişsel aralıklı tekrar algoritması, sesli ezber doğrulama ve minimalist arayüzü ile Kur'an ezberini ve takibini kolaylaştıran modern dijital asistan.
            </p>
          </div>

          {/* Truthful Highlight Pillars */}
          <div className="pt-2 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] shadow-xs text-center space-y-1">
              <Brain className="w-5 h-5 text-[#B89248] mx-auto" />
              <div className="text-sm font-bold text-[#1F1E1B]">Bilişsel Aralıklı Tekrar</div>
              <div className="text-[11px] text-[#78716C]">Hermann Ebbinghaus Metodolojisi</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FCD34D]/60 shadow-xs text-center space-y-1">
              <Clock className="w-5 h-5 text-[#B45309] mx-auto" />
              <div className="text-sm font-bold text-[#92400E]">Google Play Kapalı Test</div>
              <div className="text-[11px] text-[#B45309]">Yakında Tüm Kullanıcılara Açık</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] shadow-xs text-center space-y-1">
              <ShieldCheck className="w-5 h-5 text-[#2D5237] mx-auto" />
              <div className="text-sm font-bold text-[#1F1E1B]">Sade & Saf UI</div>
              <div className="text-[11px] text-[#78716C]">%100 Odaklanma Teminatı</div>
            </div>
          </div>

          {/* CTA Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowTestModal(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl gold-button font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Google Play Kapalı Teste Katıl</span>
            </button>

            <a
              href="#screenshots"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1F1E1B] border border-[#E5E1D8] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <ImageIcon className="w-4 h-4 text-[#B89248]" />
              <span>Arayüz Görsellerini İncele</span>
            </a>
          </div>

          <p className="text-xs text-[#78716C] italic pt-1">
            Yakında tüm kullanıcılar için Google Play'de yayınlanacaktır.
          </p>

        </div>
      </section>

      {/* Section 1: Ekran Görüntüleri (Screen Screenshots Placeholders) */}
      <section id="screenshots" className="py-20 bg-[#FDFBF7] border-b border-[#EAE6DF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sage-badge text-xs font-semibold">
              <ImageIcon className="w-3.5 h-3.5 text-[#2D5237]" />
              <span>Arayüz & Tasarım</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Uygulama Ekran Görüntüleri
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto">
              Hıfz'ın sade ve gözü yormayan mobil arayüz tasarımları.
            </p>
          </div>

          {/* 4 Professional Screenshot Frame Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshotPlaceholders.map((sc, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] shadow-xs space-y-4 text-center group hover:border-[#B89248]/50 transition-all"
              >
                {/* Phone Frame Placeholder */}
                <div className="w-full aspect-[9/19] rounded-2xl bg-[#1F1E1B] border border-[#E5E1D8] overflow-hidden relative flex flex-col items-center justify-center p-4 text-[#E5E1D8] group-hover:scale-[1.02] transition-transform">
                  
                  {/* Real Image Tag with Fallback */}
                  <img 
                    src={`/assets/${sc.assetName}`} 
                    alt={sc.title} 
                    className="w-full h-full object-cover hidden absolute inset-0"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />

                  {/* Fallback Graphic */}
                  <div className="space-y-3 text-center p-3 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#2C2B28] border border-[#B89248]/30 mx-auto flex items-center justify-center text-[#B89248]">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-white font-display">{sc.title}</div>
                    <p className="text-[10px] text-[#A8A29E] leading-tight">{sc.desc}</p>
                    <div className="pt-2 text-[9px] font-mono text-[#B89248]">Görsel Yeri (Placeholder)</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1F1E1B]">{sc.title}</h4>
                  <p className="text-xs text-[#78716C] mt-1">{sc.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Uygulamanın Amacı & Neden Geliştirildiği & Hikayesi */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sage-badge text-xs font-semibold">
              <Brain className="w-3.5 h-3.5 text-[#2D5237]" />
              <span>Geliştirme Hikâyesi & Vizyon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Uygulamanın Amacı ve Hikâyesi
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#44403C] leading-relaxed font-normal">
            
            {/* Purpose */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#E5E1D8] space-y-3 shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1E1B] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#B89248]" />
                <span>Uygulamanın Amacı</span>
              </h3>
              <p>
                Hıfz; Kur'an-ı Kerim ezberi yapan hafız adaylarının, hafızların ve düzenli cüz okuyan kişilerin ezberlerini bilimsel metodlarla korumasını, unutma riskini en aza indirmesini ve günlük tekrar disiplini kazanmasını sağlamak amacıyla tasarlanmıştır.
              </p>
            </div>

            {/* Why Developed */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#E5E1D8] space-y-3 shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1E1B] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#2D5237]" />
                <span>Neden Geliştirildi?</span>
              </h3>
              <p>
                Geleneksel ezber takibinde plansız yapılan tekrarlar zaman kaybına ve zihinsel yorgunluğa yol açmaktadır. "Ezberlemek kolay, unutmamak zordur" prensibinden yola çıkarak; hangi sayfanın ne zaman tekrar edileceğini otomatik hesaplayan akıllı bir asistana ihtiyaç vardı.
              </p>
            </div>

            {/* Development Story */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#E5E1D8] space-y-3 shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1E1B] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#B89248]" />
                <span>Geliştirme Hikâyesi</span>
              </h3>
              <p>
                GÜL STUDIOS ekibi olarak, hafızlık hocaları ve pedagoglarla yapılan mülakatlar sonucunda **Hermann Ebbinghaus Unutma Eğrisi** metodolojisini Kur'an-ı Kerim'in cüz ve sayfa yapısına entegre ettik. Sonuç olarak; zayıf sayfaları sık, sağlam sayfaları optimal aralıklarla önünüze getiren kişiselleştirilmiş bir ezber algoritması doğdu.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Temel Özellikler */}
      <section className="py-20 bg-[#FDFBF7] border-b border-[#EAE6DF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gold-badge text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B89248]" />
              <span>Mühendislik & Özellikler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Temel Özellikler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">Aralıklı Tekrar Algoritması</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Hafızlık sayfanızın zorluk derecesine göre kişiselleştirilmiş akıllı tekrar takvimi oluşturur. Unutma riskini sıfıra indirir.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E8EFE9] border border-[#2D5237]/20 flex items-center justify-center text-[#2D5237]">
                <Volume2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">Sesli AI Doğrulama</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Ayetleri sesli okurken mikrofon aracılığıyla dinler, takıldığınız veya tecvid hatası yaptığınız kelimeleri anında ekranda vurgular.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">%100 Çevrimdışı Desteği</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                İnternet bağlantınız olmasa dahi tüm cüz kayıtlarınız, kişisel notlarınız ve ilerleme istatistikleriniz cihazınızda güvendedir.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E8EFE9] border border-[#2D5237]/20 flex items-center justify-center text-[#2D5237]">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">Günlük Seri & Disiplin</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Disiplinli çalışmayı teşvik eden günlük seri (streak) sayacı ve detaylı performans grafik raporlamaları.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">Odaklı & Temiz Tasarım</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Zihni yoran kalabalıktan arındırılmış, gece modu uyumlu yüksek mukavemetli minimalist kullanıcı arayüzü.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#E8EFE9] border border-[#2D5237]/20 flex items-center justify-center text-[#2D5237]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#1F1E1B]">Kurs & Eğitmen Entegrasyonu</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Kur'an kursları ve hocalar için öğrencilerin günlük dinleme ve sayfa ezberlerini uzaktan takip edebilme altyapısı.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Canlı Ön İzleme Simülatörü */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sage-badge text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5 text-[#2D5237]" />
              <span>Canlı Ön İzleme</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Hıfz Arayüz Simülatörü
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto">
              Uygulamanın ezber ve takip mantığını doğrudan web tarayıcınızda canlı test edin.
            </p>
          </div>

          <div className="glass-card-light p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] bg-[#FDFBF7] shadow-md max-w-4xl mx-auto space-y-6">
            
            {/* Simulator Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248] font-bold">
                  <BookOpen className="w-5 h-5 text-[#B89248]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1F1E1B]">Hıfz Mobil Arayüzü (Canlı Demo)</h4>
                  <p className="text-xs text-[#78716C]">Sure seçin ve ezber takibini simüle edin</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full gold-badge text-xs font-semibold">
                <Flame className="w-4 h-4 text-[#B89248]" />
                <span>Tekrar Modu</span>
              </div>
            </div>

            {/* Surah Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {HIFZ_MOCK_SURAHS.map((surah) => (
                <button
                  key={surah.id}
                  onClick={() => {
                    setSelectedSurah(surah);
                    setCurrentAyah(1);
                    setIsPlaying(false);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedSurah.id === surah.id
                      ? 'border-[#B89248] bg-[#F8F4EA] text-[#1F1E1B] font-semibold shadow-xs'
                      : 'border-[#E5E1D8] bg-[#FAF9F5] text-[#57534E] hover:text-[#1F1E1B]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1F1E1B]">{surah.name}</span>
                    <span className="text-xs font-arabic text-[#B89248]">{surah.ArabicName}</span>
                  </div>
                  <div className="text-[10px] text-[#78716C] mt-1 flex justify-between">
                    <span>{surah.totalAyah} Âyet</span>
                    <span className="text-[#B89248] font-semibold">{surah.juz}. Cüz</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Surah Controls */}
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-lg font-bold text-[#1F1E1B]">
                    {selectedSurah.name} ({selectedSurah.ArabicName})
                  </h5>
                  <p className="text-xs text-[#78716C]">{selectedSurah.juz}. Cüz — Toplam {selectedSurah.totalAyah} Ayet</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono sage-badge font-semibold">
                  {selectedSurah.status}
                </span>
              </div>

              <div className="pt-2 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 rounded-full gold-button flex items-center justify-center font-bold transition-transform active:scale-95 cursor-pointer shadow-xs"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>
                  <div>
                    <div className="text-xs font-semibold text-[#1F1E1B]">
                      Ayet {currentAyah} / {selectedSurah.totalAyah}
                    </div>
                    <div className="text-[11px] text-[#78716C]">
                      {isPlaying ? 'Sesli Dinleme & AI Doğrulama Çalışıyor...' : 'Dinlemek İçin Oynatın'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNextAyah}
                    className="px-3.5 py-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1F1E1B] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#E5E1D8]"
                  >
                    <Repeat className="w-3.5 h-3.5 text-[#B89248]" />
                    <span>Sonraki Ayete Geç</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Güncellemeler & Sürüm Geçmişi */}
      <section className="py-20 bg-[#FDFBF7] border-b border-[#EAE6DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gold-badge text-xs font-semibold">
              <History className="w-3.5 h-3.5 text-[#B89248]" />
              <span>Sürüm Geçmişi & Yol Haritası</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Güncellemeler & Yol Haritası
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Kapalı Test Sürümü */}
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E1D8] space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#B45309] bg-[#FFFBEB] px-3 py-1 rounded-full border border-[#FCD34D]/50">
                  Google Play Kapalı Test Sürümü
                </span>
                <span className="text-xs text-[#78716C]">Aktif Aşama</span>
              </div>
              <h4 className="text-base font-bold text-[#1F1E1B]">Bilişsel Tekrar & Çevrimdışı Senkronizasyon</h4>
              <ul className="text-xs text-[#57534E] space-y-1.5 pl-4 list-disc">
                <li>Geliştirilmiş Ebbinghaus aralıklı tekrar algoritması.</li>
                <li>Yerel SQLite depolama ile internet olmadan sorunsuz çalışma.</li>
                <li>Gece modu göz dostu saf tipografi güncellemeleri.</li>
              </ul>
            </div>

            {/* Gelecek Sürüm */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E5E1D8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold gold-badge px-3 py-1 rounded-full">
                  Gelecek Güncelleme Planı
                </span>
                <span className="text-xs text-[#78716C]">Yakında</span>
              </div>
              <h4 className="text-base font-bold text-[#1F1E1B]">Gelişmiş Tecvid Ses Analizi & Kurs Modu</h4>
              <ul className="text-xs text-[#57534E] space-y-1.5 pl-4 list-disc">
                <li>Canlı ses dalgası üzerinden anlık tecvid harf mahreç tespiti.</li>
                <li>Kur'an kursu eğitmenlerinin öğrencilerini uzaktan takip etme paneli.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6: Product-Specific FAQ Accordion */}
      <section className="py-20 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sage-badge text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-[#2D5237]" />
              <span>Sıkça Sorulan Sorular</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1E1B]">
              Hıfz Hakkında Merak Edilenler
            </h2>
          </div>

          <div className="space-y-3">
            {HIFZ_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card-light rounded-2xl border border-[#E5E1D8] overflow-hidden transition-all bg-[#FDFBF7]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] border-t border-[#EAE6DF] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 7: Google Play Closed Beta Download CTA Banner */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="glass-card-light p-10 sm:p-14 rounded-3xl border border-[#B89248]/30 bg-gradient-to-b from-[#FDFBF7] to-[#F8F4EA]/40 space-y-6 shadow-md">
            
            <div className="w-16 h-16 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/40 flex items-center justify-center text-[#B89248] mx-auto shadow-xs">
              <BookOpen className="w-8 h-8 text-[#B89248]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1E1B]">
              Hıfz Kapalı Test Sürecinde
            </h2>

            <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto leading-relaxed">
              Google Play Kapalı Test grubumuza katılarak Hıfz'ı ilk deneyimleyen kişilerden biri olun. Yakında tüm kullanıcılar için yayınlanacaktır.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowTestModal(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl gold-button font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Test Kullanıcısı Talebi Gönder</span>
              </button>

              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1F1E1B] border border-[#E5E1D8] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Ana Sayfaya Dön</span>
              </button>
            </div>

            <div className="pt-4 text-xs text-[#78716C] flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2D5237]" />
              <span>GÜL STUDIOS • %100 Odaklı UI • Google Play Uyumlu</span>
            </div>

          </div>

        </div>
      </section>

      {/* Closed Beta Test Request Modal */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1E1B]/60 backdrop-blur-md">
          <div className="glass-card-light max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] relative bg-[#FDFBF7] shadow-2xl">
            <button
              onClick={() => setShowTestModal(false)}
              className="absolute top-4 right-4 text-[#78716C] hover:text-[#1F1E1B] p-1 rounded-lg cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center">
                <Download className="w-5 h-5 text-[#B89248]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1F1E1B]">Kapalı Teste Katılım Talebi</h3>
                <p className="text-xs text-[#78716C]">Hıfz Google Play Kapalı Test Grubu</p>
              </div>
            </div>

            {testFormSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full sage-badge mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#2D5237]" />
                </div>
                <h4 className="text-lg font-bold text-[#1F1E1B]">Talebiniz Alındı!</h4>
                <p className="text-xs text-[#57534E]">
                  E-posta adresinize Google Play kapalı test indirme bağlantısı iletilecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTestSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] mb-1">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ad Soyad"
                    value={testForm.name}
                    onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] mb-1">Google Play E-Posta Adresiniz *</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@gmail.com"
                    value={testForm.email}
                    onChange={(e) => setTestForm({ ...testForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] mb-1">Not (İsteğe Bağlı)</label>
                  <textarea
                    rows={2}
                    placeholder="Hafızlık öğrenci durumu, kurum bilgisi vb."
                    value={testForm.note}
                    onChange={(e) => setTestForm({ ...testForm, note: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] text-xs text-[#1F1E1B] focus:outline-none focus:border-[#B89248] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl gold-button font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Test Davetiyesi İsteyin</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
