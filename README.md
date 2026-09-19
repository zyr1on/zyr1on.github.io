# Semih Özdemir — Kişisel Portföy Web Sitesi

Bu repo, [zyr1on.github.io](https://zyr1on.github.io) adresinde yayınlanan kişisel portföy web sitesinin kaynak kodlarını içerir. Siber güvenlik, grafik programlama ve sistem geliştirme odaklı, modern, modüler ve çift dil (TR / EN) destekli bir mimariye sahiptir.

---

## 📁 Proje Yapısı

```text
├── index.html              # Ana HTML iskeleti
├── style.css               # Modern siber / glassmorphism stilleri ve animasyonlar
├── script.js               # Dinamik render, i18n, filtreleme ve canvas motoru
├── data/                   # ⚡ İÇERİKLERİN YÖNETİLDİĞİ KLASÖR
│   ├── projects.js         # Projeler listesi (Yeni proje ekleme yeri)
│   ├── certifications.js   # Sertifikalar listesi (Yeni sertifika ekleme yeri)
│   ├── skills.js           # Yetenek kategorileri ve maddeleri
│   └── translations.js     # Site metinleri (Hakkımda, sayaçlar, terminal mesajları)
└── README.md
```

---

## 🚀 Yeni Proje Nasıl Eklenir?

Artık HTML veya JavaScript mantığına dokunmanıza gerek yok!
Tek yapmanız gereken [`data/projects.js`](./data/projects.js) dosyasını açıp listenin başına aşağıdaki şablonu kopyalayıp bilgileri doldurmaktır:

```javascript
{
  id: "yeni-proje",
  title: "Proje Başlığı",
  lang: "C++", // Kartın üstünde görünecek dil (C++, Python, Rust, Go vb.)
  category: "cpp", // Filtreleme için: "cpp", "python", "security", "graphics", "ai"
  tags: ["C++20", "OpenGL", "ImGui"],
  github: "https://github.com/zyr1on/proje-adi", // Varsa repo linki, yoksa ""
  demo: "https://proje-canli-demo.com",         // Varsa canlı site linki, yoksa ""
  featured: true,
  en: {
    subtitle: "Short English Subtitle",
    description: "English description of your project."
  },
  tr: {
    subtitle: "Türkçe Kısa Alt Başlık",
    description: "Projenizin Türkçe detaylı açıklaması."
  }
},
```

> **Not:** Projeyi eklediğinizde "About" bölümündeki `5+ Projects` sayacı da otomatik olarak güncellenir.

---

## 🎓 Yeni Sertifika Nasıl Eklenir?

[`data/certifications.js`](./data/certifications.js) dosyasını açıp aşağıdaki şablonu eklemeniz yeterlidir:

```javascript
{
  id: "oscp",
  badge: "OSCP", // Sol kutudaki kısa kod
  issuer: "OffSec",
  verifyUrl: "https://credential-link.com", // Varsa doğrulama linki, yoksa ""
  en: {
    title: "Offensive Security Certified Professional",
    date: "March 2026"
  },
  tr: {
    title: "Offensive Security Sertifikalı Profesyonel",
    date: "Mart 2026"
  }
},
```

> **Not:** Sertifika sayacı da otomatik olarak güncellenir.

---

## 🌐 Dil Desteği (TR / EN)

- Kullanıcıların dil tercihi `localStorage` üzerinde saklanır; sayfayı yenilediklerinde veya tekrar girdiklerinde tercihlerini hatırlar.
- İlk girişte kullanıcının tarayıcı dili Türkçe ise varsayılan olarak Türkçe, aksi halde İngilizce açılır.
- Site genelindeki butonlar, başlıklar veya biyografi metinlerini güncellemek için [`data/translations.js`](./data/translations.js) dosyasını düzenleyebilirsiniz.

---

## 💻 Yerel Geliştirme

Herhangi bir derleme (build) veya paket yöneticisine ihtiyaç yoktur:
- `index.html` dosyasını tarayıcınızda çift tıklayarak doğrudan açabilirsiniz (CORS kısıtlaması olmadan çalışır).
- Veya VS Code Live Server / `python -m http.server` ile test edebilirsiniz.