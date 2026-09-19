/**
 * =============================================================================
 * PROJELER LİSTESİ (PROJECTS DATA)
 * =============================================================================
 * 
 * Yeni bir proje eklemek için aşağıdaki şablonu kopyalayıp listenin en üstüne
 * veya istediğiniz bir yerine yapıştırın ve bilgileri doldurun:
 * 
 * {
 *   title: "Proje Adı",
 *   lang: "C++", // Rozette görünecek dil (C++, Python, C#, Rust vb.)
 *   category: "cpp", // Filtreleme için: "all", "cpp", "python", "security", "ai", "graphics"
 *   tags: ["C++20", "OpenGL", "ImGui"],
 *   github: "https://github.com/zyr1on/repo-adi", // Varsa link, yoksa "" bırakın
 *   demo: "https://demo-linki.com", // Varsa canlı demo/site linki, yoksa ""
 *   featured: true, // Öne çıkarılsın mı? (true / false)
 *   en: {
 *     subtitle: "English short subtitle",
 *     description: "Detailed project description in English."
 *   },
 *   tr: {
 *     subtitle: "Türkçe kısa alt başlık",
 *     description: "Projenin Türkçe detaylı açıklaması."
 *   }
 * },
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: "samengine",
    title: "SamEngine",
    lang: "C++",
    category: "graphics",
    tags: ["C++20", "OpenGL 4.6", "ImGui", "Assimp"],
    github: "https://github.com/zyr1on/SamEngine",
    demo: "",
    featured: true,
    en: {
      subtitle: "OpenGL 4.6 3D Model Renderer",
      description: "Real-time 3D renderer built from scratch in C++20. Features bindless textures, PBR material pipeline, UBO-based camera/lighting, Poisson disk shadow mapping, and a dockable ImGui editor."
    },
    tr: {
      subtitle: "OpenGL 4.6 3B Model Render Motoru",
      description: "C++20 ile sıfırdan yazılmış gerçek zamanlı 3B render motoru. Bindless texture, PBR materyal pipeline, UBO tabanlı kamera/ışık, Poisson disk gölge haritalama ve ImGui editörü içerir."
    }
  },
  {
    id: "binary-analyzer",
    title: "Binary Analyzer",
    lang: "Python",
    category: "security",
    tags: ["Python", "LIEF", "Malware Analysis"],
    github: "https://github.com/zyr1on/Binary-Analyzer",
    demo: "",
    featured: true,
    en: {
      subtitle: "Malware Analysis Framework",
      description: "Static malware analysis tool for ELF and PE binaries. Parses binaries using LIEF, detects suspicious API calls and IOC indicators without execution."
    },
    tr: {
      subtitle: "Zararlı Yazılım Analiz Çerçevesi",
      description: "ELF ve PE ikili dosyaları için statik zararlı yazılım analiz aracı. LIEF ile dosyaları ayrıştırır, çalıştırmadan şüpheli API çağrılarını ve IOC göstergelerini tespit eder."
    }
  },
  {
    id: "cvector",
    title: "CVector.h",
    lang: "C",
    category: "cpp",
    tags: ["C", "Macros", "Data Structures"],
    github: "https://github.com/zyr1on/CVector",
    demo: "",
    featured: false,
    en: {
      subtitle: "Generic Dynamic Array for C",
      description: "Generic dynamic array in C using macros, replicating core features of C++ std::vector with manual memory management and type safety."
    },
    tr: {
      subtitle: "C için Genel Amaçlı Dinamik Dizi",
      description: "Macro'lar kullanarak C'de genel amaçlı dinamik dizi; C++ std::vector'ün temel özelliklerini manuel bellek yönetimi ve tür güvenliğiyle yeniden oluşturur."
    }
  },
  {
    id: "advicemephone",
    title: "adviceMePhone",
    lang: "Python",
    category: "ai",
    tags: ["Python", "DistilBERT", "NLP", "TF-IDF"],
    github: "https://github.com/zyr1on/adviceMePhone",
    demo: "",
    featured: false,
    en: {
      subtitle: "Hybrid AI Phone Recommendation",
      description: "Web-based recommendation system using NLP. Implemented DistilBERT + TF-IDF hybrid model, prepared dataset and trained models in a 4-person team."
    },
    tr: {
      subtitle: "Hibrit Yapay Zeka Telefon Öneri Sistemi",
      description: "NLP kullanan web tabanlı öneri sistemi. DistilBERT + TF-IDF hibrit modeli uygulandı, 4 kişilik bir ekiple veri seti hazırlandı ve modeller eğitildi."
    }
  },
  {
    id: "hotdog-nothotdog",
    title: "HotDog or NotHotDog",
    lang: "Python",
    category: "ai",
    tags: ["Python", "MobileNetV2", "FastAPI", "ML"],
    github: "https://github.com/zyr1on/HotDog-or-NotHotDog",
    demo: "",
    featured: false,
    en: {
      subtitle: "Web-Based Image Classification",
      description: "Binary image classifier using transfer learning with fine-tuned MobileNetV2 model and FastAPI backend for inference."
    },
    tr: {
      subtitle: "Web Tabanlı Görüntü Sınıflandırma",
      description: "Transfer öğrenimi ile ince ayar yapılmış MobileNetV2 modeli ve FastAPI backend kullanılarak geliştirilmiş ikili görüntü sınıflandırıcı."
    }
  }
];
