/**
 * =============================================================================
 * SERTİFİKALAR LİSTESİ (CERTIFICATIONS DATA)
 * =============================================================================
 * 
 * Yeni bir sertifika eklemek için aşağıdaki şablonu kopyalayıp listenin en üstüne
 * veya istediğiniz bir yerine yapıştırın ve bilgileri doldurun:
 * 
 * {
 *   id: "yeni-sertifika",
 *   badge: "OSCP", // Sol taraftaki kutucukta görünecek kısa rozet kodu
 *   issuer: "OffSec", // Sertifikayı veren kurum
 *   verifyUrl: "https://...", // Varsa doğrulama/rozet linki, yoksa "" bırakın
 *   en: {
 *     title: "Offensive Security Certified Professional",
 *     date: "March 2026"
 *   },
 *   tr: {
 *     title: "Offensive Security Sertifikalı Profesyonel",
 *     date: "Mart 2026"
 *   }
 * },
 */

window.PORTFOLIO_CERTS = [
  {
    id: "ejpt",
    badge: "eJPT",
    issuer: "INE Security",
    verifyUrl: "",
    en: {
      title: "Junior Penetration Tester",
      date: "January 2026"
    },
    tr: {
      title: "Junior Penetration Tester",
      date: "Ocak 2026"
    }
  },
  {
    id: "cwse",
    badge: "CWSE",
    issuer: "Hackviser",
    verifyUrl: "",
    en: {
      title: "Certified Web Security Expert",
      date: "September 2025"
    },
    tr: {
      title: "Certified Web Security Expert",
      date: "Eylül 2025"
    }
  },
  {
    id: "capt",
    badge: "CAPT",
    issuer: "Hackviser",
    verifyUrl: "",
    en: {
      title: "Certified Associate Penetration Tester",
      date: "July 2025"
    },
    tr: {
      title: "Certified Associate Penetration Tester",
      date: "Temmuz 2025"
    }
  },
  {
    id: "api",
    badge: "API",
    issuer: "APIsec University",
    verifyUrl: "",
    en: {
      title: "API Penetration Testing",
      date: "July 2025"
    },
    tr: {
      title: "API Penetration Testing",
      date: "Temmuz 2025"
    }
  }
];
