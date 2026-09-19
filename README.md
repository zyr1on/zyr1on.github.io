# Semih Özdemir — Kişisel Portföy Web Sitesi

---

```text
├── index.html              # Ana HTML iskeleti
├── style.css               # Modern siber / glassmorphism stilleri ve animasyonlar
├── script.js               # Dinamik render, i18n, filtreleme ve canvas motoru
├── data/                   # ⚡ İÇERİKLERİN YÖNETİLDİĞİ KLASÖR
│   ├── projects.js         # Projeler listesi (Yeni proje ekleme yeri)
│   ├── certifications.js   # Sertifikalar listesi (Yeni sertifika ekleme yeri)
│   ├── articles.js         # Yazılar / Makaleler listesi (DEV.to, Medium vb.)
│   ├── skills.js           # Yetenek kategorileri ve maddeleri
│   └── translations.js     # Site metinleri (Hakkımda, sayaçlar, terminal mesajları)
└── README.md
```

---

## Proje Şablonu

[`data/projects.js`](./data/projects.js) 

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

---

## Sertifika Şablonu

[`data/certifications.js`](./data/certifications.js) 

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

---

## Yazı Şablonu

[`data/articles.js`](./data/articles.js) 

```javascript
{
  id: "modern-glsl-shader-dev",
  title: "Modern GLSL Shader Development in Zed & VS Code: Zero Setup, Real-Time Diagnostics", // Orijinal başlık (çevrilmez)
  platform: "devto", // Filtreleme için: "devto", "medium", "personal"
  platformLabel: "DEV.to",
  url: "https://dev.to/semihozdmirr/...",
  tags: ["GLSL", "Graphics", "Shaders"],
  en: {
    description: "Short summary of your article in English.",
    date: "2025",
    readTime: "5 min read"
  },
  tr: {
    description: "Yazınızın kısa Türkçe özeti.",
    date: "2025",
    readTime: "5 dk okuma"
  }
},
```

---

## (TR / EN)

- Kullanıcıların dil tercihi `localStorage` üzerinde saklanır; sayfayı yenilediklerinde veya tekrar girdiklerinde tercihlerini hatırlar.
- [`data/translations.js`](./data/translations.js) 
