/**
 * =============================================================================
 * SEMİH ÖZDEMİR — PORTFOLIO CONTROLLER
 * =============================================================================
 */

(function () {
  "use strict";

  /* ── 1. STATE & INITIALIZATION ──────────────────────────────── */
  const savedLang = localStorage.getItem("portfolio_lang");
  const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase().startsWith("tr") ? "tr" : "en";
  let currentLang = savedLang || browserLang;
  let activeFilter = "all";

  // Elements
  const langToggleBtn     = document.getElementById("lang-toggle");
  const langLabel         = document.getElementById("lang-label");
  const skillsContainer   = document.getElementById("skills-container");
  const projectsContainer = document.getElementById("projects-container");
  const certsContainer    = document.getElementById("certs-container");
  const articlesContainer = document.getElementById("articles-container");
  const filterBtns        = document.querySelectorAll("#project-filters .filter-btn");
  const articleFilterBtns = document.querySelectorAll("#article-filters .filter-btn");
  const statProjectsEl    = document.getElementById("stat-projects");
  const statCertsEl       = document.getElementById("stat-certs");
  const scrollProgress    = document.getElementById("scroll-progress");
  const toastEl           = document.getElementById("toast");
  const copyEmailBtn      = document.getElementById("copy-email-btn");
  let activeArticleFilter = "all";

  /* ── 2. DYNAMIC RENDERING FUNCTIONS ─────────────────────────── */

  // Render Skills
  function renderSkills(lang) {
    if (!skillsContainer || !window.PORTFOLIO_SKILLS) return;
    skillsContainer.innerHTML = "";

    window.PORTFOLIO_SKILLS.forEach(skill => {
      const data = skill[lang] || skill.en;
      const card = document.createElement("div");
      card.className = "skill-card fade-up";
      card.innerHTML = `
        <div class="skill-icon" aria-hidden="true">${skill.icon}</div>
        <h3>${data.title}</h3>
        <p>${data.description}</p>
      `;
      skillsContainer.appendChild(card);
    });
  }

  // Render Projects (with filter)
  function renderProjects(lang, filter = "all") {
    if (!projectsContainer || !window.PORTFOLIO_PROJECTS) return;
    projectsContainer.innerHTML = "";

    const t = window.PORTFOLIO_TRANSLATIONS[lang] || window.PORTFOLIO_TRANSLATIONS.en;
    const filteredProjects = window.PORTFOLIO_PROJECTS.filter(p => {
      if (filter === "all") return true;
      return p.category === filter;
    });

    filteredProjects.forEach(proj => {
      const data = proj[lang] || proj.en;
      const card = document.createElement("div");
      card.className = "project-card fade-up";

      // Links (GitHub / Demo)
      let actionButtons = "";
      if (proj.github) {
        actionButtons += `
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="GitHub Repository">
            <span>⌥</span> <span>${t.proj_code_btn || "Source"}</span>
          </a>
        `;
      }
      if (proj.demo) {
        actionButtons += `
          <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Live Demo">
            <span>↗</span> <span>${t.proj_demo_btn || "Demo"}</span>
          </a>
        `;
      }

      // Tags
      const tagsHtml = (proj.tags || []).map(tag => `<span>${tag}</span>`).join("");

      card.innerHTML = `
        <div class="project-card-header">
          <span class="project-lang">${proj.lang}</span>
          <div class="project-actions">${actionButtons}</div>
        </div>
        <h3>${proj.title}</h3>
        <p class="project-sub">${data.subtitle}</p>
        <p class="project-desc">${data.description}</p>
        <div class="project-tags">${tagsHtml}</div>
      `;
      projectsContainer.appendChild(card);
    });

    // Auto update projects counter in stats
    if (statProjectsEl && window.PORTFOLIO_PROJECTS) {
      statProjectsEl.textContent = `${window.PORTFOLIO_PROJECTS.length}+`;
    }

    observeFadeUps();
  }

  // Render Certifications
  function renderCertifications(lang) {
    if (!certsContainer || !window.PORTFOLIO_CERTS) return;
    certsContainer.innerHTML = "";

    const t = window.PORTFOLIO_TRANSLATIONS[lang] || window.PORTFOLIO_TRANSLATIONS.en;

    window.PORTFOLIO_CERTS.forEach(cert => {
      const data = cert[lang] || cert.en;
      const card = document.createElement("div");
      card.className = "cert-card fade-up";

      let verifyHtml = "";
      if (cert.verifyUrl) {
        verifyHtml = `<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify">${t.cert_verify || "Verify ↗"}</a>`;
      }

      card.innerHTML = `
        <div class="cert-badge">${cert.badge}</div>
        <div class="cert-info">
          <h4>${data.title}</h4>
          <p>${cert.issuer} &nbsp;·&nbsp; <span>${data.date}</span></p>
          ${verifyHtml}
        </div>
      `;
      certsContainer.appendChild(card);
    });

    // Auto update certs counter in stats
    if (statCertsEl && window.PORTFOLIO_CERTS) {
      statCertsEl.textContent = `${window.PORTFOLIO_CERTS.length}`;
    }

    observeFadeUps();
  }

  // Render Articles
  function renderArticles(lang, filter = "all") {
    if (!articlesContainer || !window.PORTFOLIO_ARTICLES) return;
    articlesContainer.innerHTML = "";

    const t = window.PORTFOLIO_TRANSLATIONS[lang] || window.PORTFOLIO_TRANSLATIONS.en;
    const filteredArticles = window.PORTFOLIO_ARTICLES.filter(art => {
      if (filter === "all") return true;
      return art.platform === filter;
    });

    filteredArticles.forEach(art => {
      const data = art[lang] || art.en;
      const card = document.createElement("div");
      card.className = "article-card fade-up";

      const tagsHtml = (art.tags || []).map(tag => `<span>${tag}</span>`).join("");

      card.innerHTML = `
        <div class="article-card-header">
          <span class="article-platform ${art.platform}">${art.platformLabel}</span>
          <span class="article-date">${data.date} &nbsp;·&nbsp; ${data.readTime}</span>
        </div>
        <h3><a href="${art.url}" target="_blank" rel="noopener noreferrer">${art.title || data.title}</a></h3>
        <p class="article-desc">${data.description}</p>
        <div class="article-footer">
          <div class="article-tags">${tagsHtml}</div>
          <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="article-read-link">
            <span>${t.read_article_btn || "Read Article ↗"}</span>
          </a>
        </div>
      `;
      articlesContainer.appendChild(card);
    });

    observeFadeUps();
  }

  /* ── 3. I18N & LANGUAGE MANAGEMENT ──────────────────────────── */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;

    const t = window.PORTFOLIO_TRANSLATIONS[lang] || window.PORTFOLIO_TRANSLATIONS.en;

    // Update all text nodes with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update toggle button text (shows the NEXT language option)
    if (langLabel) {
      langLabel.textContent = lang === "en" ? "TR" : "EN";
    }

    // Re-render dynamic sections
    renderSkills(lang);
    renderProjects(lang, activeFilter);
    renderCertifications(lang);
    renderArticles(lang, activeArticleFilter);

    // Reset terminal typed effect with current language messages
    resetTypedEffect(t.typed_messages);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "tr" : "en";
      applyLanguage(nextLang);
    });
  }

  /* ── 4. PROJECT & ARTICLE CATEGORY FILTERS ──────────────────── */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderProjects(currentLang, activeFilter);
    });
  });

  articleFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      articleFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeArticleFilter = btn.getAttribute("data-article-filter");
      renderArticles(currentLang, activeArticleFilter);
    });
  });

  /* ── 5. TERMINAL TYPED EFFECT ────────────────────────────────── */
  const statusEl = document.getElementById("typed-status");
  let typedMessages = (window.PORTFOLIO_TRANSLATIONS[currentLang] || {}).typed_messages || [];
  let typedMi = 0, typedCi = 0, typedDeleting = false;
  let typedTimer = null;

  function typeEffect() {
    if (!statusEl || typedMessages.length === 0) return;
    const msg = typedMessages[typedMi % typedMessages.length];

    if (!typedDeleting) {
      statusEl.textContent = msg.slice(0, ++typedCi);
      if (typedCi === msg.length) {
        typedDeleting = true;
        typedTimer = setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      statusEl.textContent = msg.slice(0, --typedCi);
      if (typedCi === 0) {
        typedDeleting = false;
        typedMi = (typedMi + 1) % typedMessages.length;
      }
    }
    typedTimer = setTimeout(typeEffect, typedDeleting ? 40 : 75);
  }

  function resetTypedEffect(newMessages) {
    clearTimeout(typedTimer);
    if (newMessages) typedMessages = newMessages;
    typedMi = 0;
    typedCi = 0;
    typedDeleting = false;
    if (statusEl) statusEl.textContent = "";
    typedTimer = setTimeout(typeEffect, 300);
  }

  /* ── 6. SCROLL PROGRESS BAR & ACTIVE NAV ─────────────────────── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul a");

  function onScroll() {
    // Scroll progress calculation
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollProgress && docHeight > 0) {
      const pct = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }

    // Active navigation link detection
    let current = "";
    sections.forEach(s => {
      if (scrollTop >= s.offsetTop - 150) {
        current = s.id;
      }
    });

    navLinks.forEach(a => {
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active-link");
      } else {
        a.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── 7. TOAST NOTIFICATION & EMAIL COPY ─────────────────────── */
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add("show");
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2600);
  }

  document.querySelectorAll("#copy-email-btn, .hero-email-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.email) || "semihozdmirr@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const t = window.PORTFOLIO_TRANSLATIONS[currentLang] || window.PORTFOLIO_TRANSLATIONS.en;
        showToast(t.copy_toast || "Email copied to clipboard!");
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });

  /* ── 8. SCROLL FADE-UP ANIMATION ────────────────────────────── */
  let observer = null;
  function observeFadeUps() {
    if (!window.IntersectionObserver) {
      document.querySelectorAll(".fade-up").forEach(el => el.classList.add("visible"));
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }

    document.querySelectorAll(".fade-up:not(.visible)").forEach(el => {
      observer.observe(el);
    });
  }

  /* ── 9. PARTICLE CANVAS ──────────────────────────────────────── */
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H;
    const particles = [];

    function resizeCanvas() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function rand(min, max) {
      return min + Math.random() * (max - min);
    }

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = rand(-0.18, 0.18);
        this.vy = rand(-0.35, -0.05);
        this.r = rand(0.6, 1.8);
        this.alpha = rand(0.15, 0.65);
        this.color = Math.random() > 0.5 ? "0,255,136" : "0,200,255";
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y < -5 || this.x < -5 || this.x > W + 5) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(100, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${0.07 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  /* ── 10. BOOTSTRAP ──────────────────────────────────────────── */
  // Initial elements to observe
  document.querySelectorAll(".stat, .about-text, .hero-terminal").forEach(el => {
    el.classList.add("fade-up");
  });

  // Apply initial language & render all components
  applyLanguage(currentLang);
  typedTimer = setTimeout(typeEffect, 400);
  onScroll();
})();
