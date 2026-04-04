/* ── i18n Translations ───────────────────────────────────────── */
const translations = {
  en: {
    nav_about:    "About",
    nav_skills:   "Skills",
    nav_projects: "Projects",
    nav_certs:    "Certs",
    nav_contact:  "Contact",
    hero_tag:     "// Computer Engineering Student",
    hero_desc:    "Cybersecurity · Graphics Programming · Systems Development",
    hero_btn1:    "View Projects",
    hero_btn2:    "Get in Touch",
    about_p1:     "Computer Engineering student with foundational knowledge of C/C++, C#, Bash and Python.",
    about_p2:     "Actively developing skills in cybersecurity, network security, and game development. Passionate about exploring low-level system architecture, computer graphics, and automation.",
    about_p3:     "A motivated team player eager to gain hands-on experience and apply technical knowledge to real-world projects.",
    stat_gpa:      "GPA",
    stat_projects: "Projects",
    stat_certs:    "Certifications",
    stat_years:    "Years Coding",
    skill1_title:  "Programming",
    skill2_title:  "Graphics & Game Dev",
    skill3_title:  "Cybersecurity",
    skill3_desc:   "Network & Web Penetration Testing · API Security · Metasploit · WireShark · Burp Suite",
    skill4_title:  "Tools & Platforms",
    proj1_sub:  "OpenGL 4.6 3D Model Renderer",
    proj1_desc: "Real-time 3D renderer built from scratch in C++20. Features bindless textures, PBR material pipeline, UBO-based camera/lighting, Poisson disk shadow mapping, and a dockable ImGui editor.",
    proj2_sub:  "Malware Analysis Framework",
    proj2_desc: "Static malware analysis tool for ELF and PE binaries. Parses binaries using LIEF, detects suspicious API calls and IOC indicators without execution.",
    proj3_sub:  "Generic Dynamic Array for C",
    proj3_desc: "Generic dynamic array in C using macros, replicating core features of C++ std::vector with manual memory management and type safety.",
    proj4_sub:  "Hybrid AI Phone Recommendation",
    proj4_desc: "Web-based recommendation system using NLP. Implemented DistilBERT + TF-IDF hybrid model, prepared dataset and trained models in a 4-person team.",
    proj5_sub:  "Web-Based Image Classification",
    proj5_desc: "Binary image classifier using transfer learning with fine-tuned MobileNetV2 model and FastAPI backend for inference.",
    cert1_title: "Junior Penetration Tester",    cert1_date: "January 2026",
    cert2_title: "Certified Web Security Expert", cert2_date: "September 2025",
    cert3_title: "Certified Associate Penetration Tester", cert3_date: "July 2025",
    cert4_title: "API Penetration Testing",       cert4_date: "July 2025",
    contact_desc: "Open to internships, collaborations, and interesting projects.",
    typed_messages: ["open to internships...", "building cool stuff...", "hacking the planet...", "rendering worlds..."],
  },
  tr: {
    nav_about:    "Hakkımda",
    nav_skills:   "Yetenekler",
    nav_projects: "Projeler",
    nav_certs:    "Sertifikalar",
    nav_contact:  "İletişim",
    hero_tag:     "// Bilgisayar Mühendisliği Öğrencisi",
    hero_desc:    "Siber Güvenlik · Grafik Programlama · Sistem Geliştirme",
    hero_btn1:    "Projeleri Gör",
    hero_btn2:    "İletişime Geç",
    about_p1:     "C/C++, C#, Bash ve Python'da temel bilgiye sahip Bilgisayar Mühendisliği öğrencisi.",
    about_p2:     "Siber güvenlik, ağ güvenliği ve oyun geliştirme alanlarında aktif olarak kendini geliştiriyor. Düşük seviye sistem mimarisi, bilgisayar grafikleri ve otomasyona büyük ilgi duyuyor.",
    about_p3:     "Teknik bilgisini gerçek dünya projelerinde uygulamak için hevesli, takım çalışmasına yatkın bir yazılımcı.",
    stat_gpa:      "Not Ort.",
    stat_projects: "Proje",
    stat_certs:    "Sertifika",
    stat_years:    "Yıl Kodlama",
    skill1_title:  "Programlama",
    skill2_title:  "Grafik & Oyun Geliştirme",
    skill3_title:  "Siber Güvenlik",
    skill3_desc:   "Ağ & Web Sızma Testi · API Güvenliği · Metasploit · WireShark · Burp Suite",
    skill4_title:  "Araçlar & Platformlar",
    proj1_sub:  "OpenGL 4.6 3B Model Render Motoru",
    proj1_desc: "C++20 ile sıfırdan yazılmış gerçek zamanlı 3B render motoru. Bindless texture, PBR materyal pipeline, UBO tabanlı kamera/ışık, Poisson disk gölge haritalama ve ImGui editörü içerir.",
    proj2_sub:  "Zararlı Yazılım Analiz Çerçevesi",
    proj2_desc: "ELF ve PE ikili dosyaları için statik zararlı yazılım analiz aracı. LIEF ile dosyaları ayrıştırır, çalıştırmadan şüpheli API çağrılarını ve IOC göstergelerini tespit eder.",
    proj3_sub:  "C için Genel Amaçlı Dinamik Dizi",
    proj3_desc: "Macro'lar kullanarak C'de genel amaçlı dinamik dizi; C++ std::vector'ün temel özelliklerini manuel bellek yönetimi ve tür güvenliğiyle yeniden oluşturur.",
    proj4_sub:  "Hibrit Yapay Zeka Telefon Öneri Sistemi",
    proj4_desc: "NLP kullanan web tabanlı öneri sistemi. DistilBERT + TF-IDF hibrit modeli uygulandı, 4 kişilik bir ekiple veri seti hazırlandı ve modeller eğitildi.",
    proj5_sub:  "Web Tabanlı Görüntü Sınıflandırma",
    proj5_desc: "Transfer öğrenimi ile ince ayar yapılmış MobileNetV2 modeli ve FastAPI backend kullanılarak geliştirilmiş ikili görüntü sınıflandırıcı.",
    cert1_title: "Junior Penetration Tester",    cert1_date: "Ocak 2026",
    cert2_title: "Certified Web Security Expert", cert2_date: "Eylül 2025",
    cert3_title: "Certified Associate Penetration Tester", cert3_date: "Temmuz 2025",
    cert4_title: "API Penetration Testing",       cert4_date: "Temmuz 2025",
    contact_desc: "Staj, iş birliği ve ilginç projelere açığım.",
    typed_messages: ["staja hazırım...", "bir şeyler inşa ediyorum...", "sisteme sızıyorum...", "dünyaları render ediyorum..."],
  },
};

/* ── Language ────────────────────────────────────────────────── */
let currentLang = "tr"; // "tr" , "en"

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "en" ? "TR" : "EN";

  // reset typed effect cleanly
  clearTimeout(typedTimer);
  typedMessages = t.typed_messages;
  typedMi = 0; typedCi = 0; typedDeleting = false;
  statusEl.textContent = "";
  typedTimer = setTimeout(typeEffect, 300);
}

applyLang(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "tr" : "en";
  applyLang(currentLang);
});


/* ── Particle Canvas ─────────────────────────────────────────── */
const canvas = document.getElementById("bg-canvas");
const ctx    = canvas.getContext("2d");
let W, H;
const particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function rand(a, b) { return a + Math.random() * (b - a); }

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.vx = rand(-0.15, 0.15); this.vy = rand(-0.3, -0.05);
    this.r = rand(0.5, 1.8); this.alpha = rand(0.2, 0.7);
    this.color = Math.random() > 0.5 ? "0,255,136" : "0,200,255";
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.y < -5 || this.x < -5 || this.x > W + 5) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

(function animateCanvas() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,255,136,${0.08*(1-dist/100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateCanvas);
})();


/* ── Typed Status ────────────────────────────────────────────── */
const statusEl = document.getElementById("typed-status");
let typedMessages = translations[currentLang].typed_messages;
let typedMi = 0, typedCi = 0, typedDeleting = false;
let typedTimer = null;

function typeEffect() {
  const msg = typedMessages[typedMi % typedMessages.length];
  if (!typedDeleting) {
    statusEl.textContent = msg.slice(0, ++typedCi);
    if (typedCi === msg.length) { typedDeleting = true; typedTimer = setTimeout(typeEffect, 1800); return; }
  } else {
    statusEl.textContent = msg.slice(0, --typedCi);
    if (typedCi === 0) { typedDeleting = false; typedMi = (typedMi + 1) % typedMessages.length; }
  }
  typedTimer = setTimeout(typeEffect, typedDeleting ? 45 : 80);
}
typedTimer = setTimeout(typeEffect, 500);


/* ── Scroll Fade-Up ──────────────────────────────────────────── */
document.querySelectorAll(".skill-card, .project-card, .cert-card, .stat, .about-text, .hero-terminal")
  .forEach(el => el.classList.add("fade-up"));

new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add("visible"), i * 80);
    }
  });
}, { threshold: 0.1 }).observe
  || document.querySelectorAll(".fade-up").forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
    }, { threshold: 0.1 }).observe(el);
  });

// correct usage
document.querySelectorAll(".skill-card, .project-card, .cert-card, .stat, .about-text, .hero-terminal")
  .forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, { threshold: 0.1 }).observe(el);
  });


/* ── Active Nav Link ─────────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});
