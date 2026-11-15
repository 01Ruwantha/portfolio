/* ===================================================================
   Ruwantha Madhushan - Portfolio Interactive JavaScript
   Modern, Fast, Modular, Smooth Animations & Professional Polish
   Zero external dependencies
   =================================================================== */

// Project Data Store - Using Local Assets from assets/images/
const projectsData = [
  {
    id: "calculator",
    title: "Calculator – Modern Responsive Calculator App",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & Hive",
    date: "September 2025 – Present",
    tagline: "Published Flutter app with persistent Hive calculation history and responsive split tablet view.",
    description: "Developed and published a feature-rich calculator application using Flutter and Hive, designed to provide a seamless calculation experience across both mobile devices and tablets. The app combines a modern, elegant interface with advanced features like calculation history tracking and responsive layout adaptation. Successfully deployed on Google Play Store with 100+ downloads.",
    highlights: [
      "Responsive Design: Automatically adapts between mobile and tablet layouts using LayoutBuilder for optimal screen utilization",
      "Split-screen tablet interface for simultaneous calculation workspace and calculation history view",
      "Calculation History: Persistent local storage using Hive NoSQL database for rapid, offline access",
      "Modern UI/UX: Custom gradient buttons with 3D tactile shadow effects and sleek dark theme",
      "Advanced Math Functions: Basic arithmetic, percentages, square roots, and trigonometric operations using math_expressions",
      "Offline Functionality: Works completely without an active internet connection with zero data collection",
      "Successfully deployed on Google Play Store with 100+ active users and regular updates"
    ],
    techStack: ["Flutter", "Dart", "Hive Database", "Google Play Console", "Responsive Design", "Local Storage", "math_expressions", "Git"],
    thumbnail: "assets/images/Calculator/1760248589455.jpeg",
    screenshots: [
      "assets/images/Calculator/1760248589455.jpeg",
      "assets/images/Calculator/1760248614709.jpeg"
    ],
    links: [
      { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.ceynext.calculator_app", type: "playstore", icon: "▶" },
      { label: "Case Study Page", url: "calculator.html", type: "outline", icon: "📄" },
      { label: "Privacy Policy", url: "https://01ruwantha.github.io/calculator-privacy-policy/", type: "outline", icon: "🔒" }
    ],
    contributors: ["Ruwantha Madhushan (Solo Developer)"]
  },
  {
    id: "quickslice",
    title: "QuickSlice – Food & Pizza Delivery Mobile App",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & Firebase",
    date: "Solo Project",
    tagline: "End-to-end food delivery app with multi-category menu, custom pizza builder, Stripe checkout, and email receipts.",
    description: "A solo-developed, cross-platform food delivery mobile app built entirely with Flutter. From smart search and customizable orders to secure Stripe payments and real-time updates, QuickSlice demonstrates a complete end-to-end mobile shopping and checkout solution.",
    highlights: [
      "Secure Authentication: JWT token-based sign-in/sign-up with role management plus Google Sign-In",
      "Multi-Category Menu: Pizzas, Melts, Rice & Pasta, Appetizers, Desserts, and Drinks",
      "Smart Cart: Real-time customization with crust, size, sauce, and portion options",
      "Favorites System: Save and quickly access loved items with real-time Firebase synchronization",
      "Stripe Payments Integration: Fast, secure, native checkout with LKR to USD currency conversion",
      "Automated Email System: Order confirmations with detailed receipts sent to both customer and admin",
      "Beautiful UI/UX: Fluid animations, curved navigation bar, and expandable item descriptions",
      "Cloud Firebase Backend: Real-time menu and favorite synchronization with Firebase Cloud Storage",
      "Advanced Navigation: GoRouter with protected route guards and deep linking across Android, iOS, and Web"
    ],
    techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Hive", "Provider", "Stripe", "GoRouter", "Email Automation"],
    thumbnail: "assets/images/QuickSlice/1760186452514.jpeg",
    screenshots: [
      "assets/images/QuickSlice/1760186452514.jpeg"
    ],
    links: [
      { label: "LinkedIn Showcase", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "🍕" }
    ],
    contributors: ["Ruwantha Madhushan (Solo Developer)"]
  },
  {
    id: "vrnt-engineers",
    title: "VRNT Engineers – Smart Billing & Invoice Generator",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & Hive",
    date: "Published Mobile App",
    tagline: "Published Android billing app for instant PDF invoice generation and direct WhatsApp bill sharing.",
    description: "Developed and published a comprehensive billing application using Flutter, enabling users to generate professional invoices and bills instantly. The app streamlines the billing process with an intuitive interface, allowing users to create, manage, and share bills seamlessly.",
    highlights: [
      "Instant PDF invoice and bill creation tailored for construction and engineering businesses",
      "Local data persistence with Hive database for 100% offline access and fast record retrieval",
      "Smooth and scalable navigation implemented with GoRouter",
      "Direct WhatsApp integration for one-tap bill sharing with customers",
      "Custom splash screen and launcher icon optimization",
      "Successfully deployed and maintained on the Google Play Store"
    ],
    techStack: ["Flutter", "Dart", "Hive", "Provider", "Go_Router", "Google Play Console", "Local Storage", "WhatsApp Integration"],
    thumbnail: "https://play-lh.googleusercontent.com/yTdKci_R2glOmmrDUkj8o8CcdIXVUa71w2Qwu2hYG4BSekzktZvcxeFp7NBDb1IisqE8-wZqx0t-JGCyQ2YQ6w=w480-h960-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/yTdKci_R2glOmmrDUkj8o8CcdIXVUa71w2Qwu2hYG4BSekzktZvcxeFp7NBDb1IisqE8-wZqx0t-JGCyQ2YQ6w=w480-h960-rw"
    ],
    links: [
      { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.vrnt.engineers", type: "playstore", icon: "▶" },
      { label: "Case Study Page", url: "vrnt-engineers.html", type: "outline", icon: "📄" },
      { label: "Studio Website", url: "https://01nimantha.github.io/madhushan-studios/", type: "outline", icon: "🌐" }
    ],
    contributors: ["Ruwantha Madhushan", "Madhushan Studios"]
  },
  {
    id: "saloon-skip",
    title: "Saloon Skip – Smart Salon Booking & Discovery Platform",
    category: "mobile",
    categoryLabel: "Mobile App • Flutter & REST APIs",
    date: "Production Mobile Platform",
    tagline: "Location-based salon discovery, appointment scheduling, voice search, and QR check-in.",
    description: "Developed a feature-rich salon booking application using Flutter, enabling users to effortlessly discover, browse, and book appointments at nearby salons. The app provides a seamless experience with location-based salon discovery, real-time availability checking, and secure reservation management.",
    highlights: [
      "Location-based salon discovery and interactive map integration with Google Maps Flutter & Geolocator",
      "Real-time calendar availability checking and secure booking confirmation",
      "Integrated voice search for fast styling and service queries (Speech-to-Text)",
      "QR code scanning via Mobile Scanner for instantaneous in-salon appointment check-ins",
      "JWT-based authentication with secure token storage in Flutter Secure Storage",
      "Offline caching of salon profiles and favorites using Hive database",
      "Polished responsive UI supporting both light and dark themes"
    ],
    techStack: ["Flutter", "Dart", "Hive", "Provider", "Go_Router", "Google Maps Flutter", "Geolocator", "Speech-to-Text", "Mobile Scanner", "REST APIs", "Flutter Secure Storage"],
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
    ],
    links: [
      { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "✂️" }
    ],
    contributors: ["Ruwantha Madhushan"]
  },
  {
    id: "soundly",
    title: "Soundly – Music Playlist App",
    category: "mobile",
    categoryLabel: "Mobile & Backend • Flutter & FastAPI",
    date: "Collaborative Project",
    tagline: "Cross-platform music streaming and playlist manager with high-speed FastAPI backend.",
    description: "A dynamic and feature-packed music playlist app developed with Flutter for seamless cross-platform functionality and FastAPI for the backend. Built collaboratively with a talented engineering team to deliver an intuitive, responsive, and engaging audio experience.",
    highlights: [
      "User authentication (Sign Up / Login) with secure token management",
      "Create, edit, and customize personal music playlists",
      "Search and discover new artists and tracks via high-performance FastAPI endpoints",
      "Interactive audio player with modern playback controls and album visualizers",
      "Smooth sidebar menu navigation with modern dark theme aesthetics",
      "Collaborative development using GitHub and Figma UI/UX prototyping"
    ],
    techStack: ["Flutter", "FastAPI", "Python", "MongoDB", "Figma", "GitHub", "Dart", "REST APIs"],
    thumbnail: "assets/images/Soundly/1738132391815.jpeg",
    screenshots: [
      "assets/images/Soundly/1738132391815.jpeg"
    ],
    links: [
      { label: "Project Details", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "🎵" }
    ],
    contributors: ["P.V. Ruwantha Madhushan", "P.V. Nimantha Madhushan", "N.A. Kavishka Srimal"]
  },
  {
    id: "banking-system",
    title: "Banking Management System – Java Project",
    category: "software",
    categoryLabel: "Software • Java OOP & Swing",
    date: "Desktop Application",
    tagline: "Secure paperless banking system engineered with Object-Oriented principles in Java.",
    description: "A comprehensive banking management system developed alongside teammate P.V. Nimantha Madhushan. Designed to streamline banking operations by offering an efficient, paperless, and secure solution for managing customer accounts, records, transactions, and reports.",
    highlights: [
      "Structured OOP architecture leveraging Inheritance, Polymorphism, and Encapsulation",
      "Modular components: Main, AdminPages, FileHandling, Account, and Admin modules",
      "Key interface implementations: InterfaceUserAdmin and InterfaceAdminOnly",
      "Secure account creation, deletion, transaction processing, and password verification checks",
      "Robust file handling for efficient paperless record persistence and rapid retrieval",
      "Intuitive Graphical User Interface (GUI) built with Java Swing"
    ],
    techStack: ["Java", "OOP Principles", "Java Swing GUI", "File Handling", "Git", "GitHub"],
    thumbnail: "assets/images/Banking Management System/1737894511139.jpeg",
    screenshots: [
      "assets/images/Banking Management System/1737894511139.jpeg",
      "assets/images/Banking Management System/1737894504527.jpeg",
      "assets/images/Banking Management System/1737894475878.jpeg",
      "assets/images/Banking Management System/1737894452755.jpeg",
      "assets/images/Banking Management System/1737894422933.jpeg",
      "assets/images/Banking Management System/1737894393346.jpeg",
      "assets/images/Banking Management System/1737894363608.jpeg",
      "assets/images/Banking Management System/1737894338420.jpeg",
      "assets/images/Banking Management System/1737894312570.jpeg",
      "assets/images/Banking Management System/1737894301050.jpeg",
      "assets/images/Banking Management System/1737894195076.jpeg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/01Ruwantha/bankProjet", type: "primary", icon: "📦" }
    ],
    contributors: ["Ruwantha Madhushan", "P.V. Nimantha Madhushan"]
  },
  {
    id: "heart-disease",
    title: "Heart Disease Risk Assessment System",
    category: "web",
    categoryLabel: "AI & Full Stack • Flask & ML",
    date: "HealthTech ML System",
    tagline: "Machine learning web app providing real-time heart disease risk assessments using UCI Clinical data.",
    description: "A web-based application designed to predict heart disease risk using advanced machine learning algorithms. Developed with a vision to make heart disease risk assessment more accessible, combining innovation, data-driven medical insights, and a user-friendly interface.",
    highlights: [
      "Real-time predictions for heart disease risk via Flask REST API endpoints",
      "Trained and evaluated on the clinical UCI Heart Disease Dataset",
      "Multiple models implemented: Random Forest, Logistic Regression, and Support Vector Machine (SVM)",
      "Hyperparameter optimization using GridSearchCV for peak ROC-AUC score and cross-validation accuracy",
      "Identified key clinical predictors including age, chest pain type, and maximum heart rate achieved",
      "Clean, responsive HTML/CSS web interface for easy clinician and patient inputs"
    ],
    techStack: ["Python", "Flask", "Machine Learning (Scikit-Learn)", "GridSearchCV", "Random Forest", "SVM", "HTML5", "CSS3", "Git"],
    thumbnail: "assets/images/Heart Disease Risk Assessment System/1737899015306.jpeg",
    screenshots: [
      "assets/images/Heart Disease Risk Assessment System/1737899015306.jpeg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/01Ruwantha/Heart-Disease-Risk-Assessment", type: "primary", icon: "❤️" }
    ],
    contributors: ["Ruwantha Madhushan & Team"]
  },
  {
    id: "tech-gadget-store",
    title: "Tech Gadget Store – Responsive E-Commerce",
    category: "web",
    categoryLabel: "Web Development • Frontend",
    date: "Frontend Project",
    tagline: "Responsive e-commerce web application with interactive product catalog and shopping cart.",
    description: "A responsive e-commerce web application developed using pure HTML, CSS, and modern JavaScript. Designed to demonstrate frontend mastery, layout aesthetics, and smooth user flow.",
    highlights: [
      "Fully responsive layout optimized for mobile, tablet, and desktop screens",
      "Interactive product catalog and dynamic category filtering",
      "Shopping cart functionality with live subtotal calculation",
      "Clean, modular CSS architecture and vanilla JS DOM scripting"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git", "GitHub"],
    thumbnail: "assets/images/Tech Gadget Store/1737990235349.jpeg",
    screenshots: [
      "assets/images/Tech Gadget Store/1737990235349.jpeg",
      "assets/images/Tech Gadget Store/1737990227129.jpeg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/01Ruwantha/HTML", type: "primary", icon: "💻" }
    ],
    contributors: ["Ruwantha Madhushan"]
  },
  {
    id: "get-safe",
    title: "Get Safe – Real-Time Flood Detection & Assistance",
    category: "mobile",
    categoryLabel: "Mobile App • React Native & Firebase",
    date: "Emergency Assistance App",
    tagline: "Life-saving mobile platform with live flood monitoring and emergency SOS contact.",
    description: "A mobile application designed to provide real-time flood detection and emergency assistance services. With an intuitive user interface, it ensures that users can quickly access emergency contacts, locate safe zones, and receive instant alerts about flood conditions.",
    highlights: [
      "Real-time sensor-linked flood detection and hazard alerts",
      "Safe zone locator with interactive map integration",
      "Instant one-tap emergency call service",
      "Secure user registration and profile management",
      "Dark mode support and low-latency push notifications"
    ],
    techStack: ["React Native", "Firebase", "Google Maps API", "Figma", "Git", "GitHub"],
    thumbnail: "assets/images/Get Safe/1738137179454.jpeg",
    screenshots: [
      "assets/images/Get Safe/1738137179454.jpeg"
    ],
    links: [
      { label: "Project Details", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "🚨" }
    ],
    contributors: ["Ruwantha Madhushan", "Nimantha Madhushan"]
  },
  {
    id: "unreal-engine",
    title: "Unreal Engine Project Showcase",
    category: "gamedev",
    categoryLabel: "Game Dev • Unreal Engine 5",
    date: "Game Development Showcase",
    tagline: "Explorable 3D environment with dynamic character interaction and drivable vehicle physics.",
    description: "An immersive Unreal Engine 5 project featuring a fully explorable environment, detailed architecture, lush landscapes, a serene water body, a dynamic character system, and a functional drivable car navigating the terrain with realistic physics, lighting, and materials.",
    highlights: [
      "Fully explorable open environment featuring detailed architecture and natural landscapes",
      "Dynamic character interaction system for responsive player feedback",
      "Functional, drivable vehicle with customized vehicle physics, suspension, and steering",
      "High-fidelity lighting, lumen reflections, and physically-based material shaders",
      "Interactive water body and environmental post-processing effects"
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "Vehicle Physics", "Character Animation", "3D Modeling", "Lighting & Materials"],
    thumbnail: "assets/images/Unreal Engine Project Showcase/1737951581878.jpeg",
    screenshots: [
      "assets/images/Unreal Engine Project Showcase/1737951581878.jpeg",
      "assets/images/Unreal Engine Project Showcase/1737951620788.jpeg",
      "assets/images/Unreal Engine Project Showcase/1737951641018.jpeg",
      "assets/images/Unreal Engine Project Showcase/1737951670902.jpeg"
    ],
    links: [
      { label: "LinkedIn Showcase", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "🎮" }
    ],
    contributors: ["Ruwantha Madhushan"]
  },
  {
    id: "blender-environment",
    title: "Blender 3D Environment Design Project",
    category: "gamedev",
    categoryLabel: "3D Art & Modeling • Blender",
    date: "3D Environment Design",
    tagline: "Miniature vibrant 3D world blending realistic urban architecture with lush natural landscapes.",
    description: "A detailed miniature 3D environment created using Blender, harmoniously combining urban structures and nature. Features realistic buildings, detailed vehicles, lush trees, rocks, flowing water, a functional windmill, and a subterranean tunnel.",
    highlights: [
      "Realistic urban buildings and detailed miniature vehicles",
      "Natural environment elements: custom trees, rocks, and lush greenery",
      "Flowing water body with realistic shader transparency and reflections",
      "Functional windmill and tunnel adding depth and narrative realism",
      "Mastery in 3D modeling, UV texturing, lighting composition, and scene staging"
    ],
    techStack: ["Blender", "3D Modeling", "Environment Design", "UV Texturing", "Lighting Composition", "Scene Staging"],
    thumbnail: "assets/images/Blender 3D Environment Design Project/1737955097445.jpeg",
    screenshots: [
      "assets/images/Blender 3D Environment Design Project/1737955097445.jpeg",
      "assets/images/Blender 3D Environment Design Project/1737955112468.jpeg",
      "assets/images/Blender 3D Environment Design Project/1737955126158.jpeg"
    ],
    links: [
      { label: "LinkedIn Showcase", url: "https://www.linkedin.com/in/01ruwantha/", type: "primary", icon: "🎨" }
    ],
    contributors: ["Ruwantha Madhushan"]
  }
];

// Gallery state for Lightbox cycling
let currentGallery = [];
let currentImageIndex = 0;

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollProgressBar();
  initHeroCanvas();
  initTypewriter();
  initScrollReveal();
  initStatCounters();
  renderProjects("all");
  initFilters();
  initModal();
  initLightbox();
  initBackToTop();
  initContact();
  initMobileMenu();
  checkDeepLink();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.setAttribute("title", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
  }
}

// 2. Top Scroll Progress Bar
function initScrollProgressBar() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// 3. Interactive Hero Background Canvas (Tech Nodes / Floating Particles)
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }, { passive: true });

  const numParticles = width < 768 ? 25 : 45;
  const particles = [];
  const maxDistance = 140;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2
    });
  }

  let mouse = { x: -1000, y: -1000 };
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    heroSection.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }, { passive: true });
  }

  let isCanvasVisible = true;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      isCanvasVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);
  }

  function animate() {
    if (isCanvasVisible) {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const dotColor = isDark ? "rgba(6, 182, 212, " : "rgba(37, 99, 235, ";
      const lineColor = isDark ? "rgba(37, 99, 235, " : "rgba(6, 182, 212, ";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dxM = mouse.x - p.x;
        const dyM = mouse.y - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 120) {
          p.x -= (dxM / distM) * 1.5;
          p.y -= (dyM / distM) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}0.65)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// 4. Smooth Typewriter Role Flipper
function initTypewriter() {
  const roleEl = document.getElementById("typingRole");
  if (!roleEl) return;

  const roles = [
    "Mobile App Developer (Flutter)",
    "Electronics & CS Undergrad @ Univ. of Kelaniya",
    "Full Stack & Web Developer",
    "Game Developer (Unreal Engine 5 & Blender)",
    "Co-Owner & Dev @ Madhushan Studios"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 40;
  const pauseBetween = 1800;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      roleEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      roleEl.textContent = current.substring(0, charIdx);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === current.length) {
      delay = pauseBetween;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// 5. Scroll Reveal with Intersection Observer
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// 6. Smooth Animated Stat Counters
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-count]");
  if (statNumbers.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    statNumbers.forEach(el => {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();

        function countStep(now) {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);
          el.textContent = currentVal + suffix;
          if (progress < 1) {
            requestAnimationFrame(countStep);
          } else {
            el.textContent = target + suffix;
          }
        }

        requestAnimationFrame(countStep);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

// 7. Render Project Cards with 3D Tilt Effect
function renderProjects(category) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = "";

  filtered.forEach((project, idx) => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.setAttribute("data-id", project.id);
    card.style.animationDelay = `${idx * 0.08}s`;

    const techPreview = project.techStack.slice(0, 4)
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join("");
    const moreCount = project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : "";

    let primaryAction = "";
    const playLink = project.links.find(l => l.type === "playstore");
    const ghLink = project.links.find(l => l.url.includes("github.com"));

    if (playLink) {
      primaryAction = `<a href="${playLink.url}" target="_blank" class="btn btn-sm btn-playstore" onclick="event.stopPropagation()">Google Play</a>`;
    } else if (ghLink) {
      primaryAction = `<a href="${ghLink.url}" target="_blank" class="btn btn-sm btn-secondary" onclick="event.stopPropagation()">GitHub</a>`;
    } else {
      primaryAction = `<button class="btn btn-sm btn-outline" onclick="openProjectModal('${project.id}')">View Details</button>`;
    }

    card.innerHTML = `
      <div class="project-thumb-box" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">
        <span class="project-category-badge">${project.categoryLabel.split('•')[0].trim()}</span>
        <span class="project-meta-pill">${project.date.split('•')[0].trim()}</span>
        <img 
          src="${encodeURI(project.thumbnail)}" 
          alt="${project.title}" 
          class="project-thumb-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='https://placehold.co/600x400/151d2d/ffffff?text=${encodeURIComponent(project.title)}';"
        />
      </div>
      <div class="project-body">
        <h3 class="project-title" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">${project.title}</h3>
        <p class="project-desc">${project.tagline || project.description}</p>
        <div class="project-tech-stack">
          ${techPreview}
          ${moreCount}
        </div>
        <div class="project-footer">
          <button class="btn btn-sm btn-outline" onclick="openProjectModal('${project.id}')">Explore & Gallery →</button>
          <div class="project-links">
            ${primaryAction}
          </div>
        </div>
      </div>
    `;

    // 3D Tilt Effect on mouse movement
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });

    container.appendChild(card);
  });
}

// 8. Filter Buttons Handler
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// 9. Modal System for Deep Project Inspection
function initModal() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProjectModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeLightbox();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("projectModalOverlay");
  const title = document.getElementById("modalTitle");
  const category = document.getElementById("modalCategory");
  const content = document.getElementById("modalBodyContent");

  if (title) title.textContent = project.title;
  if (category) category.textContent = `${project.categoryLabel} • ${project.date}`;

  // Store current project gallery for Lightbox cycling
  currentGallery = project.screenshots || [];

  const techBadges = project.techStack
    .map(t => `<span class="tech-tag" style="font-size:0.85rem; padding: 0.35rem 0.8rem;">${t}</span>`)
    .join(" ");

  const highlightsList = project.highlights && project.highlights.length > 0
    ? `<h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--text-primary); font-size: 1.1rem;">Key Highlights & Features</h4>
       <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.8;">
         ${project.highlights.map(h => `<li>${h}</li>`).join("")}
       </ul>`
    : "";

  const contributorsBox = project.contributors && project.contributors.length > 0
    ? `<div style="margin-top: 1.5rem; padding: 1rem 1.25rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
         <span style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">👥 Project Contributors / Team:</span>
         <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">${project.contributors.join(" • ")}</p>
       </div>`
    : "";

  const actionLinks = project.links.map(l => {
    let btnClass = "btn btn-sm btn-primary";
    if (l.type === "playstore") btnClass = "btn btn-sm btn-playstore";
    if (l.type === "outline") btnClass = "btn btn-sm btn-outline";
    return `<a href="${l.url}" target="_blank" class="${btnClass}">${l.icon || ''} ${l.label}</a>`;
  }).join(" ");

  const screenshotsHTML = project.screenshots && project.screenshots.length > 0
    ? `
      <div class="gallery-section-title">📸 Visual Showcase & Screenshots (${project.screenshots.length})</div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Click any image to view in fullscreen gallery with keyboard navigation (← / →):</p>
      <div class="modal-screenshots-scroll">
        ${project.screenshots.map((url, idx) => `
          <div class="modal-shot-card" onclick="openLightboxIndex(${idx})">
            <img src="${encodeURI(url)}" alt="${project.title} screenshot ${idx + 1}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/400x600/151d2d/ffffff?text=Preview+Image';">
          </div>
        `).join("")}
      </div>
    `
    : "";

  content.innerHTML = `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
      ${actionLinks}
    </div>

    ${screenshotsHTML}

    <h4 style="margin: 1.5rem 0 0.5rem 0; color: var(--text-primary); font-size: 1.1rem;">About the Project</h4>
    <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1rem;">${project.description}</p>

    ${highlightsList}

    <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--text-primary); font-size: 1.1rem;">Technologies & Tools</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      ${techBadges}
    </div>

    ${contributorsBox}
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  history.replaceState(null, null, `#project-${projectId}`);
}

function closeProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#project-")) {
    history.replaceState(null, null, " ");
  }
}

// 10. Lightbox with Left / Right Navigation
function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const close = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === close) {
        closeLightbox();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightboxIndex(idx) {
  if (!currentGallery || currentGallery.length === 0) return;
  currentImageIndex = idx;
  updateLightboxImage();
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) lightbox.classList.add("active");
}

function navigateLightbox(direction) {
  if (!currentGallery || currentGallery.length === 0) return;
  currentImageIndex = (currentImageIndex + direction + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById("lightboxImg");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (img && currentGallery[currentImageIndex]) {
    img.src = encodeURI(currentGallery[currentImageIndex]);
    img.alt = `Screenshot ${currentImageIndex + 1}`;
  }

  // Toggle navigation buttons visibility if only 1 image
  const hasMultiple = currentGallery.length > 1;
  if (prevBtn) prevBtn.style.display = hasMultiple ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = hasMultiple ? "flex" : "none";
}

function closeLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) lightbox.classList.remove("active");
}

// 11. Floating Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 420) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 12. Contact & Copy to Clipboard
function initContact() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "01ruwantha@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Email: 01ruwantha@gmail.com");
      });
    });
  }

  const form = document.getElementById("quickContactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value;
      const subject = document.getElementById("formSubject").value;
      const message = document.getElementById("formMessage").value;

      const mailtoUrl = `mailto:01ruwantha@gmail.com?subject=${encodeURIComponent("[Portfolio Contact] " + subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + message)}`;
      window.location.href = mailtoUrl;
      showToast("Opening your email client...");
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;
  toast.querySelector(".toast-text").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// 13. Mobile Navigation Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      toggleBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggleBtn.innerHTML = "☰";
      });
    });
  }
}

// 14. Deep-linking on direct URL visit
function checkDeepLink() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const pId = hash.replace("#project-", "");
    setTimeout(() => {
      openProjectModal(pId);
    }, 250);
  }
}
