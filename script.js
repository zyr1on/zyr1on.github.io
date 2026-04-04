/* ── Particle Canvas ─────────────────────────────────────────── */
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

let W, H, particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function randBetween(a, b) { return a + Math.random() * (b - a); }

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = randBetween(-0.15, 0.15);
    this.vy = randBetween(-0.3, -0.05);
    this.r  = randBetween(0.5, 1.8);
    this.alpha = randBetween(0.2, 0.7);
    this.color = Math.random() > 0.5 ? '0,255,136' : '0,200,255';
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

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });

  // draw faint connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,255,136,${0.08 * (1 - dist/100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}
animate();


/* ── Typed Status ────────────────────────────────────────────── */
const statusEl = document.getElementById('typed-status');
const messages = [
  'open to internships...',
  'building cool stuff...',
  'hacking the planet...',
  'rendering worlds...',
];
let mi = 0, ci = 0, deleting = false;

function typeEffect() {
  const msg = messages[mi];
  if (!deleting) {
    statusEl.textContent = msg.slice(0, ++ci);
    if (ci === msg.length) { deleting = true; setTimeout(typeEffect, 1800); return; }
  } else {
    statusEl.textContent = msg.slice(0, --ci);
    if (ci === 0) { deleting = false; mi = (mi + 1) % messages.length; }
  }
  setTimeout(typeEffect, deleting ? 45 : 80);
}
typeEffect();


/* ── Scroll Fade-Up ──────────────────────────────────────────── */
const targets = document.querySelectorAll(
  '.skill-card, .project-card, .cert-card, .stat, .about-text, .hero-terminal'
);
targets.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

targets.forEach(el => observer.observe(el));


/* ── Active Nav Link ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
