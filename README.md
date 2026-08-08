# GÜL STUDIOS Web Sitesi

GÜL STUDIOS'un ürün vitrini ve Hıfz ürün tanıtım sitesi. React, TypeScript ve Vite ile hazırlanmış, mobil uyumlu bir tek sayfa uygulamasıdır.

## Teknolojiler

- React 19 ve TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

## Yerelde çalıştırma

Node.js 20 veya daha yeni bir sürüm gereklidir.

```bash
npm ci
npm run dev
```

Kullanılabilir komutlar:

```bash
npm run dev    # Yerel geliştirme sunucusu
npm run lint   # TypeScript typecheck
npm run build  # Production derlemesi
npm run preview
```

## Proje yapısı

```text
src/
  components/   Sayfa bölümleri, modallar ve SEO yardımcıları
  config/       Site URL'i ve merkezi marka yapılandırması
  data/         Ürün ve SSS içerikleri
  App.tsx       Route kabuğu
  index.css     Global tasarım kuralları
public/         robots.txt ve sitemap.xml
```

## Route'lar

| Yol | Açıklama |
| --- | --- |
| `/` | Ana sayfa |
| `/hifz` | Hıfz ürün tanıtım sayfası |

Deploy sağlayıcınızın, SPA için bilinmeyen yolları `index.html` dosyasına yönlendirecek bir rewrite kuralı içermesi gerekir. Böylece `/hifz` doğrudan açılır ve yenilendiğinde çalışır.

## Ortam değişkenleri ve SITE_URL

`VITE_SITE_URL`, canonical URL, structured data ve route bazlı Open Graph URL'leri için kullanılır.

```bash
VITE_SITE_URL=https://www.ornekalanadiniz.com
```

Değer verilmezse uygulama geçici olarak `https://gulstudios.example` kullanır. Production deploy öncesinde bu değeri, `index.html`, `public/robots.txt` ve `public/sitemap.xml` içindeki geçici alan adını gerçek alan adınızla değiştirin. Ayrıca `/og-image.jpg` yoluna gerçek bir Open Graph görseli ekleyin.

Bu proje istemci paketine gizli API anahtarı koymaz. İleride sunucu entegrasyonu eklenirse anahtarlar yalnızca sunucu/hosting secret yöneticisinde tutulmalıdır.

## Formlar

İletişim ve Hıfz kapalı test formları şu an bir backend'e veri göndermiyor. Kullanıcıya bu açıkça bildirilir ve `gulstudiosapps@gmail.com` için mailto alternatifi verilir. Form gönderim altyapısı eklendiğinde gizlilik politikasını da gerçek veri akışıyla birlikte güncelleyin.

## Production Security Headers

Bu başlıklar Vite uygulamasından değil, hosting veya CDN katmanından ayarlanmalıdır. Alan adlarını ve kaynakları deploy ortamınıza göre daraltın:

```text
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
```

`frame-ancestors 'none'` / `X-Frame-Options: DENY` clickjacking riskini azaltır. CSP'yi canlıya almadan önce Google Fonts ve gelecekteki API/CDN kaynaklarınızla test edin.
