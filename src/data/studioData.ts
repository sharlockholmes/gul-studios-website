import { Product, FAQItem } from '../types';

export const STUDIO_INFO = {
  name: 'GÜL STUDIOS',
  slogan: 'Yazılımın Ötesinde, Fayda Üretiyoruz.',
  subSlogan: 'İnsanların gerçek ihtiyaçlarına odaklanan, sade, kaliteli ve uzun ömürlü dijital ürünler geliştiren bağımsız yazılım stüdyosu.',
  location: 'İstanbul, Türkiye',
  status: 'Bağımsız Yazılım Stüdyosu',
  officialEmail: 'gulstudiosapps@gmail.com',
  website: 'https://gulstudios.dev',
};

export const PRODUCTS: Product[] = [
  {
    id: 'hifz',
    name: 'HIFZ',
    tagline: 'Hafızlık Sınav Hazırlık',
    description: 'Hafızlık sınavına hazırlanırken farklı soru türleriyle pratik yapmayı kolaylaştıran sade ve odaklı çalışma uygulaması.',
    category: 'Android Uygulaması',
    badge: 'Google Play’de Yayında',
    status: 'Yayında',
    iconName: 'BookOpen',
    isFlagship: true,
    features: [
      'Sınav Modu',
      'Sûre Bulma',
      'Benzer Ayetler',
      'Cüz / Sayfa çalışmaları',
      'Sayfa başı / sonu çalışmaları',
      'Çalışma geçmişi ve istatistikler',
      'Hata / tekrar takibi',
      'Cihaz üzerinde tutulan kullanıcı verileri',
      'Sade ve odaklı kullanım'
    ],
    link: '/hifz'
  },
  {
    id: 'kuran-kursu',
    name: 'Kur\'an Kursu Yönetim Sistemi',
    tagline: 'Planlanan Kurum Yönetim Platformu',
    description: 'Kur\'an kursları ve hafızlık kurumları için planlanan kurum yönetim platformu.',
    category: 'Kurumsal Platform',
    badge: 'Planlanıyor',
    status: 'Planlanıyor',
    iconName: 'GraduationCap',
    features: [
      'Ürün kapsamı planlama aşamasındadır'
    ]
  }
];
export const FAQS: FAQItem[] = [
  {
    question: 'GÜL STUDIOS bir yazılım ajansı veya taşeron firma mıdır?',
    answer: 'Hayır. GÜL STUDIOS müşteri projeleri veya ajans işleri alan bir firma değildir. Kendi ürünlerini tasarlayan ve geliştiren bağımsız bir yazılım stüdyosudur.',
    category: 'Stüdyo'
  },
  {
    question: 'HIFZ uygulamasını nasıl indirebilirim?',
    answer: 'HIFZ Google Play’de yayındadır. Uygulamayı HIFZ ürün sayfasındaki Google Play bağlantısı üzerinden indirebilirsiniz.',
    category: 'HIFZ'
  },
  {
    question: 'Kur\'an Kursu Yönetim Sistemi ne zaman yayınlanacak?',
    answer: 'Kur\'an Kursu Yönetim Sistemi şu anda planlama aşamasındaki bir gelecek ürünüdür. İlerleme ve duyurular hazır olduğunda web sitemiz üzerinden paylaşılacaktır.',
    category: 'Ürünler'
  },
  {
    question: 'Uygulamalarınızda kullanıcı verileri ve gizlilik nasıl korunur?',
    answer: 'Bu web sitesi form verilerini bir sunucuya göndermez. HIFZ çalışma geçmişi ve ayarları mevcut sürümde cihaz üzerinde tutulur; bulut eşitleme özelliği bulunmaz. Ayrıntılar için güncel gizlilik metnini inceleyebilirsiniz.',
    category: 'Gizlilik & Kalite'
  }
];

export const HIFZ_FAQS: FAQItem[] = [
  {
    question: 'HIFZ uygulaması ücretli midir?',
    answer: 'HIFZ Google Play’de yayındadır. Güncel edinme ve kullanım bilgilerini uygulamanın Google Play mağaza sayfasında bulabilirsiniz.',
    category: 'HIFZ'
  },
  {
    question: 'HIFZ kullanıcı verilerini nerede tutar?',
    answer: 'Mevcut sürümde çalışma geçmişi ve uygulama ayarları cihaz üzerinde tutulur. Bulut eşitleme özelliği bulunmaz.',
    category: 'HIFZ'
  },
  {
    question: 'HIFZ uygulamasını nereden indirebilirim?',
    answer: 'HIFZ’i Google Play üzerinden indirebilirsiniz. Mağaza bağlantısına HIFZ ürün sayfasındaki indirme düğmesinden ulaşabilirsiniz.',
    category: 'HIFZ'
  },
  {
    question: 'HIFZ hangi çalışma türlerini sunar?',
    answer: 'Sınav modu, sûre bulma, benzer ayetler, cüz ve sayfa egzersizleri, sayfa başı ve sonu çalışmaları ile çalışma geçmişi ve hata takibi sunar.',
    category: 'HIFZ'
  }
];
