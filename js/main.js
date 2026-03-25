/**
 * ============================================================
 * main.js — Portfolio Interactivity & Dynamic Rendering
 * ============================================================
 */

/* ── Navbar: scroll effect + hamburger menu ─────────────────── */
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  const icon = hamburger.querySelector("svg");
  icon.classList.toggle("rotate-90");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

/* ── Smooth scroll for all nav links ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ── Active nav link highlight on scroll ────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-nav");
    }
  });
});

/* ── Typing animation for hero tagline ──────────────────────── */
const typingTexts = [
  "Building Intelligent Systems that Think, Learn, and Scale.",
  "Full-Stack AI | From Raw Data to Deployment.",
  "Designing Smart, Scalable, and Autonomous Solutions.",
  "Beyond Models — Building Complete AI Products.",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing-text");

function typeEffect() {
  if (!typingEl) return;
  const current = typingTexts[textIndex];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex--);
  } else {
    typingEl.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 40 : 70;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

/* ── Project filtering ───────────────────────────────────────── */
let activeFilter = "All";

function renderProjects(filter = "All") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-gray-400 py-12">No projects in this category yet. Check back soon!</p>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (project) => `
    <div class="project-card" data-aos>
      <!-- Project Image -->
      <div class="project-img-wrap">
        ${
          project.image
            ? `<img src="${project.image}" alt="${project.title}" class="project-img" onerror="this.parentElement.innerHTML='<div class=\\'project-img-placeholder\\'><span>🧠</span></div>'">`
            : `<div class="project-img-placeholder"><span>🧠</span></div>`
        }
        ${project.featured ? `<span class="featured-badge">Featured</span>` : ""}
        <div class="project-category-chip">${project.category}</div>
      </div>

      <!-- Project Body -->
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>

        <!-- Tech Stack -->
        <div class="tech-stack-wrap">
          ${project.techStack
            .map((tech) => `<span class="tech-chip">${tech}</span>`)
            .join("")}
        </div>

        <!-- Links -->
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-project btn-github">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          ${
            project.liveDemo
              ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-project btn-demo">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>`
              : `<span class="btn-project btn-demo-disabled">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Available on Request
            </span>`
          }
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Re-trigger AOS-like animations
  triggerCardAnimations();
}

/* ── Filter buttons ──────────────────────────────────────────── */
function initFilters() {
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category)),
  ];
  const filterWrap = document.getElementById("project-filters");
  if (!filterWrap) return;

  filterWrap.innerHTML = categories
    .map(
      (cat) =>
        `<button class="filter-btn ${cat === "All" ? "filter-active" : ""}" data-filter="${cat}">${cat}</button>`
    )
    .join("");

  filterWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("filter-active"));
    btn.classList.add("filter-active");
    activeFilter = btn.dataset.filter;
    renderProjects(activeFilter);
  });
}

/* ── Scroll-reveal animations ────────────────────────────────── */
function triggerCardAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("card-visible");
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("[data-aos]").forEach((el) => {
    observer.observe(el);
  });
}

/* ── Scroll reveal for all sections ─────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ── Contact form feedback ───────────────────────────────────── */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = "✓ Message Sent!";
    btn.disabled = true;
    btn.style.background = "#16a34a";
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = "";
      contactForm.reset();
    }, 3000);
  });
}

/* ── Skills progress bar animation ──────────────────────────── */
function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width");
          entry.target.style.width = width + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

/* ── Init everything on DOM ready ────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderProjects();
  initScrollReveal();
  animateSkillBars();
  triggerCardAnimations();
});
