import { Product, FAQItem } from '../types';

export const STUDIO_INFO = {
  name: 'GÜL STUDIOS',
  slogan: 'Yazılımın Ötesinde, Fayda Üretiyoruz.',
  subSlogan: 'İnsanların gerçek problemlerini çözen kaliteli ve uzun ömürlü dijital ürünler geliştiriyoruz.',
  foundedYear: '2024',
  location: 'İstanbul / Türkiye',
  status: 'Bağımsız Yazılım Stüdyosu',
  officialEmail: 'gulstudiosapps@gmail.com',
};

export const PRODUCTS: Product[] = [
  {
    id: 'hifz',
    name: 'Hıfz',
    tagline: 'Akıllı Kur\'an Ezber ve Takip Asistanı',
    description: 'Bilişsel aralıklı tekrar algoritması, sesli ezber doğrulama ve minimalist arayüzü ile Kur\'an ezberini ve takibini kolaylaştıran modern dijital asistan.',
    category: 'Mobil & Web Uygulaması',
    badge: 'Flagship Ürün',
    status: 'Geliştirilmede', // Mapped visually to Google Play Kapalı Test Sürecinde
    iconName: 'BookOpen',
    isFlagship: true,
    features: [
      'Bilişsel Aralıklı Tekrar Algoritması (Spaced Repetition)',
      'Sesli AI Ezber & Tecvid Takip Doğrulaması',
      'Tamamen Çevrimdışı (Offline-First) Çalışabilme',
      'Kişiselleştirilmiş Cüz ve Sayfa Tekrar Takvimi',
      'Gece Modu & Göz Yormayan Saf Tipografi',
      '%100 Odaklanma & Saf Kullanıcı Deneyimi'
    ],
    link: '#hifz-detail'
  },
  {
    id: 'kuran-kursu',
    name: 'Kur\'an Kursu Yönetim Sistemi',
    tagline: 'Kurumsal Eğitim & Takip Platformu',
    description: 'Kur\'an kurslarının yönetimini kolaylaştıran kapsamlı dijital platform. Detaylar yakında.',
    category: 'Kurumsal Platform',
    badge: 'Yakında',
    status: 'Geliştirilmede',
    iconName: 'GraduationCap',
    features: [
      'Öğrenci Hafızlık İlerleme Paneli',
      'Eğitmen ve Sınıf Yönetimi',
      'Veli Bilgilendirme Raporları',
      'Ders ve Devamsızlık Takibi'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'GÜL STUDIOS bir yazılım ajansı veya taşeron firma mıdır?',
    answer: 'Hayır. GÜL STUDIOS müşteri projeleri veya ajans işleri alan bir firma değildir. Tamamen kendi bünyesinde insan odaklı, faydalı ve kaliteli dijital ürünler tasarlayıp geliştirilen bağımsız bir yazılım stüdyosudur.',
    category: 'Stüdyo'
  },
  {
    question: 'Hıfz uygulamasını nasıl indirebilirim?',
    answer: 'Hıfz şu anda Google Play Kapalı Test Sürecindedir. Kapalı test sürecimizin ardından yakında tüm kullanıcılar için Google Play Store üzerinde genel indirmeye sunulacaktır.',
    category: 'Hıfz'
  },
  {
    question: 'Kur\'an Kursu Yönetim Sistemi ne zaman yayınlanacak?',
    answer: 'Kur\'an Kursu Yönetim Sistemi platformumuz aktif geliştirme aşamasındadır. Kurumlar ve vakıflar için kapalı beta duyuruları web sitemiz üzerinden yapılacaktır.',
    category: 'Ürünler'
  },
  {
    question: 'Uygulamalarınızda kullanıcı verileri ve gizlilik nasıl korunur?',
    answer: 'GÜL STUDIOS ilkeleri gereğince gereksiz veri toplanmaz ve kişisel verileriniz asla üçüncü taraflarla paylaşılmaz. Tüm ürünlerimizde %100 sade, odaklanmış ve güvenli bir deneyim sunulmaktadır.',
    category: 'Gizlilik & Kalite'
  }
];

export const HIFZ_FAQS: FAQItem[] = [
  {
    question: 'Hıfz uygulaması ücretli midir?',
    answer: 'Hayır. Hıfz temel fonksiyonlarıyla tamamen ücretsizdir. Amacımız Kur\'an-ı Kerim ezber sürecinde her hafızın ve öğrencinin erişebileceği sade ve güvenilir bir yardımcı araç sunmaktır.',
    category: 'Hıfz'
  },
  {
    question: 'Hıfz internetsiz (offline) çalışır mı?',
    answer: 'Evet. Hıfz %100 offline-first mimarisiyle tasarlanmıştır. Tüm cüz kayıtlarınız ve tekrar istatistikleriniz cihazınızın yerel hafızasında saklanır, internete ihtiyaç duymaz.',
    category: 'Hıfz'
  },
  {
    question: 'Google Play kapalı test sürecine nasıl katılabilirim?',
    answer: 'Kapalı test grubumuza katılmak için gulstudiosapps@gmail.com adresine e-posta göndererek test kullanıcısı talebinde bulunabilirsiniz.',
    category: 'Hıfz'
  },
  {
    question: 'Hangi yaş grupları ve seviyeler için uygundur?',
    answer: 'Hıfz, hafızlık eğitimine yeni başlayan öğrencilerden hafızlığını tamamlayıp tekrar eden yetişkinlere kadar her seviyedeki kullanıcı için uygundur.',
    category: 'Hıfz'
  }
];

export const HIFZ_MOCK_SURAHS = [
  { id: 67, name: 'Mülk Suresi', totalAyah: 30, ArabicName: 'الملك', juz: 29, status: 'Tamamlandı' },
  { id: 36, name: 'Yasin Suresi', totalAyah: 83, ArabicName: 'يس', juz: 22, status: 'Ezberde' },
  { id: 78, name: 'Nebe Suresi', totalAyah: 40, ArabicName: 'النبأ', juz: 30, status: 'Tekrarda' },
  { id: 48, name: 'Fetih Suresi', totalAyah: 29, ArabicName: 'الفتح', juz: 26, status: 'Devam Ediyor' },
  { id: 62, name: 'Cuma Suresi', totalAyah: 11, ArabicName: 'الجمعة', juz: 28, status: 'Tamamlandı' },
];

