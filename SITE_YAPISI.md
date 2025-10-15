# Kadıköy Spor Kulübü - Site Yapısı

## 🎯 Genel Bakış

Görseldeki tasarıma uygun olarak hazırlanmış modern spor kulübü web sitesi.

## 📄 Sayfalar ve İçerikler

### 1. Ana Sayfa (/)
**URL**: `http://localhost:3001/`

**İçerik**:
- ✅ Hero Slider (3 slayt, otomatik geçiş)
- ✅ Hakkımızda bölümü (özet + görsel)
- ✅ Haberler bölümü (3 haber kartı)
- ✅ Medya galerisi (6 görsel)
- ✅ Branşlar kartları (Voleybol, Basketbol, Okçuluk)
- ✅ Yan taraflarda sponsor reklamları

### 2. Voleybol Branşı
**URL**: `http://localhost:3001/branslar/voleybol`

**İçerik**:
- ✅ Branş hakkında bilgi
- ✅ 4 Takım (U12, U14, U16, U18)
  - Her takımda: İsim, yaş aralığı, açıklama, antrenman saatleri
- ✅ 2 Spor Okulu
  - Yaz Voleybol Okulu
  - Hafta Sonu Voleybol Okulu
- ✅ Tesisler bilgisi
- ✅ Kayıt butonu

### 3. Basketbol Branşı
**URL**: `http://localhost:3001/branslar/basketbol`

**İçerik**:
- ✅ Branş hakkında bilgi
- ✅ 4 Takım (U12, U14, U16, U18)
  - Her takımda: İsim, yaş aralığı, açıklama, antrenman saatleri
- ✅ 2 Spor Okulu
  - Yaz Basketbol Okulu
  - Hafta Sonu Basketbol Okulu
- ✅ Tesisler bilgisi
- ✅ Kayıt butonu

### 4. Okçuluk Branşı
**URL**: `http://localhost:3001/branslar/okculuk`

**İçerik**:
- ✅ Branş hakkında bilgi
- ✅ 4 Takım (U12, U14, U16, U18)
  - Her takımda: İsim, yaş aralığı, açıklama, antrenman saatleri
- ✅ 2 Spor Okulu
  - Yaz Okçuluk Okulu
  - Hafta Sonu Okçuluk Okulu
- ✅ Okçuluğun faydaları bölümü
- ✅ Tesisler bilgisi
- ✅ Kayıt butonu

### 5. Hakkımızda
**URL**: `http://localhost:3001/hakkimizda`

**İçerik**:
- ✅ Misyon
- ✅ Vizyon
- ✅ Değerlerimiz (4 değer)
- ✅ Tarihçe (2020-2025)
- ✅ Yönetim kadrosu (3 kişi)
- ✅ İstatistikler (500+ sporcu, 15+ antrenör, vb.)

### 6. Haberler
**URL**: `http://localhost:3001/haberler`

**İçerik**:
- ✅ Öne çıkan haber (büyük kart)
- ✅ Tüm haberler grid (6 haber)
- ✅ Kategori filtreleme (sidebar)
- ✅ Sayfalama

### 7. İletişim
**URL**: `http://localhost:3001/iletisim`

**İçerik**:
- ✅ İletişim formu (Ad, Email, Telefon, Konu, Mesaj)
- ✅ İletişim bilgileri
  - Adres
  - Telefon
  - Email
  - Çalışma saatleri
- ✅ Sosyal medya linkleri
- ✅ Harita alanı (placeholder)

### 8. Kayıt
**URL**: `http://localhost:3001/kayit`

**İçerik**:
- ✅ Kayıt formu
  - Sporcu bilgileri (Ad, Doğum tarihi)
  - Veli bilgileri (Ad, Telefon, Email, Adres)
  - Program seçimi (Branş, Yaş grubu, Program türü)
  - Sağlık bilgileri
- ✅ Ücret bilgileri (3 kart)
- ✅ Bilgilendirme mesajı

### 9. Kulüp
**URL**: `http://localhost:3001/kulup`

**İçerik**:
- ✅ Tesisler (4 tesis kartı)
  - Voleybol salonu
  - Basketbol sahası
  - Okçuluk alanı
  - Fitness salonu
- ✅ Branşlar özeti
- ✅ Faaliyetler (Turnuvalar, Kamplar, Seminerler, Sosyal etkinlikler)

## 🎨 Tasarım Özellikleri

### Renkler
- **Mavi**: `#2563eb` (Ana renk - Header, butonlar)
- **Sarı**: `#eab308` (Vurgu rengi - CTA butonları, footer)
- **Turuncu**: `#ea580c` (Voleybol)
- **Turuncu Koyu**: `#c2410c` (Basketbol)
- **Yeşil**: `#16a34a` (Okçuluk)

### Layout
- **Container**: Maksimum genişlik, ortalanmış
- **Grid Sistemi**: 12 kolonlu grid
  - Sol sidebar: 2 kolon (Sponsorlar)
  - Ana içerik: 8 kolon
  - Sağ sidebar: 2 kolon (Sponsorlar)

### Bileşenler
- **Header**: Sticky, logo + navigasyon + kayıt butonu
- **Footer**: 4 kolonlu, sarı arka plan
- **Hero Slider**: Otomatik geçişli, 3 slayt
- **Sponsor Sidebar**: 4 sponsor kartı + reklam alanı

## 📱 Responsive Tasarım

- **Mobil** (< 768px): Tek kolon, hamburger menü
- **Tablet** (768px - 1024px): 2 kolon grid
- **Desktop** (> 1024px): 3 kolon grid + sidebar'lar

## 🔗 Navigasyon Yapısı

```
Ana Sayfa (/)
├── Hakkımızda (/hakkimizda)
├── Kulüp (/kulup)
├── Branşlar
│   ├── Voleybol (/branslar/voleybol)
│   ├── Basketbol (/branslar/basketbol)
│   └── Okçuluk (/branslar/okculuk)
├── Haberler (/haberler)
├── İletişim (/iletisim)
└── Kayıt Ol (/kayit)
```

## ✨ Özellikler

1. **Otomatik Slider**: Ana sayfada 5 saniyede bir değişen slider
2. **Hover Efektleri**: Kartlarda ve butonlarda smooth geçişler
3. **Form Validasyonu**: Tüm formlarda zorunlu alan kontrolü
4. **Responsive**: Tüm cihazlarda uyumlu
5. **SEO Friendly**: Semantic HTML ve meta taglar
6. **Hızlı**: Next.js optimizasyonları

## 🚀 Çalıştırma

```bash
# Geliştirme modu
npm run dev

# Tarayıcıda aç
http://localhost:3001
```

## 📝 Sonraki Adımlar

### Eklenebilecek Özellikler:
1. **Gerçek Görseller**: Emoji yerine gerçek fotoğraflar
2. **Veritabanı**: Haberler ve kayıtlar için backend
3. **Admin Panel**: İçerik yönetimi
4. **Galeri**: Fotoğraf ve video galerisi
5. **Canlı Skorlar**: Maç sonuçları
6. **Takvim**: Antrenman ve maç takvimi
7. **Üye Girişi**: Sporcu ve veli paneli
8. **Online Ödeme**: Kayıt ücreti ödeme sistemi
9. **Harita Entegrasyonu**: Google Maps
10. **Sosyal Medya Feed**: Instagram/Facebook entegrasyonu

### Özelleştirme:
1. Logo ekleyin: `public/logo.png`
2. Görselleri ekleyin: `public/images/`
3. İletişim bilgilerini güncelleyin
4. Ücret bilgilerini güncelleyin
5. Sosyal medya linklerini ekleyin

## 📞 Destek

Herhangi bir sorunuz varsa iletişime geçin!

