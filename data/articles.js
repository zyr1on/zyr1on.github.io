/**
 * =============================================================================
 * YAZILAR / MAKALELER LİSTESİ (ARTICLES DATA)
 * =============================================================================
 * 
 * Yeni bir yazı eklemek için aşağıdaki şablonu kopyalayıp listenin en üstüne
 * veya istediğiniz bir yerine yapıştırın ve bilgileri doldurun:
 * 
 * {
 *   id: "yazi-id",
 *   platform: "devto", // Filtreleme için: "devto", "medium", "personal", "all"
 *   platformLabel: "DEV.to",
 *   url: "https://dev.to/semihozdmirr/...",
 *   tags: ["GLSL", "Shaders", "Graphics"],
 *   en: {
 *     title: "Article Title in English",
 *     description: "Short summary of the article.",
 *     date: "February 2025",
 *     readTime: "5 min read"
 *   },
 *   tr: {
 *     title: "Türkçe Yazı Başlığı",
 *     description: "Yazının kısa Türkçe özeti.",
 *     date: "Şubat 2025",
 *     readTime: "5 dk okuma"
 *   }
 * },
 */

window.PORTFOLIO_ARTICLES = [
  {
    id: "modern-glsl-shader-dev",
    platform: "devto",
    platformLabel: "DEV.to",
    url: "https://dev.to/semihozdmirr/modern-glsl-shader-development-in-zed-vs-code-zero-setup-real-time-diagnostics-59di",
    tags: ["GLSL", "Zed", "VS Code", "Graphics", "Shaders"],
    en: {
      title: "Modern GLSL Shader Development in Zed & VS Code: Zero Setup, Real-Time Diagnostics",
      description: "A practical guide to setting up lightweight, modern GLSL shader editing, autocomplete, and real-time diagnostics in Zed and VS Code with zero friction.",
      date: "2025",
      readTime: "5 min read"
    },
    tr: {
      title: "Zed ve VS Code'da Modern GLSL Shader Geliştirme: Sıfır Kurulum, Anlık Tanılama",
      description: "Zed ve VS Code üzerinde ek kuruluma boğulmadan anlık hata tanılama, otomatik tamamlama ve modern GLSL shader geliştirme ortamı kurma rehberi.",
      date: "2025",
      readTime: "5 dk okuma"
    }
  }
];
