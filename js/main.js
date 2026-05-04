// Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── Custom Cursor ──
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let rx = 0, ry = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'py';
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
  });
  (function animateRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();
  const hoverTargets = document.querySelectorAll('a, button, .svc, .testi-card, .nav-cta');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
  });

  // ── Scroll Reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ── WhatsApp Toast (8s delay) ──
  const waToast = document.getElementById('waToast');
  const waClose = document.getElementById('waToastClose');
  let toastShown = false;
  setTimeout(() => {
    if (!toastShown) { waToast.classList.add('show'); toastShown = true; }
  }, 8000);
  waClose.addEventListener('click', () => {
    waToast.classList.remove('show');
    toastShown = true;
  });
  // Hide on scroll past 30%
  window.addEventListener('scroll', () => {
    if (window.scrollY > document.body.scrollHeight * 0.3 && toastShown) {
      waToast.classList.remove('show');
    }
  }, { passive: true });