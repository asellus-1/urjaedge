/* ==========================================================================
   UrjaEdge Energy Management — Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 2. Mobile menu toggle (Apple fluid sheet pattern)
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    function toggleMobileMenu(forceClose = false) {
      const isCurrentlyOpen = navLinks.classList.contains('open');
      const shouldOpen = forceClose ? false : !isCurrentlyOpen;
      
      navLinks.classList.toggle('open', shouldOpen);
      mobileToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    }

    mobileToggle.addEventListener('click', () => toggleMobileMenu());

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });

    // Close when tapping outside the open menu
    document.addEventListener('pointerdown', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMobileMenu(true);
      }
    });
  }

  // 3. FAQ Accordion (Fluid height transition & natural toggle)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
        // Toggle current
        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
      });
    }
  });

  // 4. Modal Dialog (Apple Human Interface: Spatial consistency & Focus restoration)
  const inquiryModal = document.getElementById('inquiryModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const requirementTypeSelect = document.getElementById('reqType');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  let lastFocusedTrigger = null;

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      lastFocusedTrigger = btn;
      const type = btn.getAttribute('data-type') || 'proposal';
      
      if (type === 'general') {
        modalTitle.textContent = 'Contact UrjaEdge';
        modalSubtitle.textContent = 'Let us discuss your solar plant operations and management requirements.';
        if (requirementTypeSelect) {
          requirementTypeSelect.value = 'General Enquiry';
        }
      } else {
        modalTitle.textContent = 'Request an O&M Proposal';
        modalSubtitle.textContent = 'Discuss your solar plant operations and maintenance requirements with our team.';
        if (requirementTypeSelect) {
          requirementTypeSelect.value = 'Solar Plant O&M Services';
        }
      }

      openModal();
    });
  });

  function openModal() {
    if (inquiryModal) {
      inquiryModal.classList.add('active');
      inquiryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Smooth focus handoff to first focusable element
      const firstInput = inquiryModal.querySelector('input, select, textarea, button');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 50);
      }
    }
  }

  function closeModal() {
    if (inquiryModal) {
      inquiryModal.classList.remove('active');
      inquiryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // Restore focus to triggering control (Apple agency & predictability)
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
        lastFocusedTrigger.focus();
      }
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal || e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && inquiryModal && inquiryModal.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. Form submission handling & Toast notification
  const inquiryForm = document.getElementById('inquiryForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = inquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeModal();
        inquiryForm.reset();
        showToast('Enquiry received! Our energy operations team will reach out shortly.');
      }, 700);
    });
  }

  function showToast(message) {
    if (toastNotice && toastMessage) {
      toastMessage.textContent = message;
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 4500);
    }
  }

  // 6. Scroll Progress Bar
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  function updateScrollProgress() {
    if (!scrollProgressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // 7. Interactive Spotlight Cards (Linear / Vercel pattern with pointer isolation)
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, { passive: true });
  });

  // 8. Interactive 3D Perspective Tilt on Showcases (Apple & Framer style, mouse-only)
  const tiltElements = document.querySelectorAll('.interactive-tilt');
  tiltElements.forEach(element => {
    const badge = element.querySelector('.hero-telemetry-badge') || element.querySelector('.care-visual-caption');
    element.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.01, 1.01, 1.01)`;
      if (badge) {
        badge.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 28px)`;
      }
    }, { passive: true });

    element.addEventListener('pointerleave', () => {
      element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      if (badge) {
        badge.style.transform = 'translate3d(0, 0, 24px)';
      }
    });
  });

  // 9. Button press feedback
  const interactiveButtons = document.querySelectorAll(
    '.btn-magnetic, .btn-solaris-primary, .btn-header-cta, .btn-white-pill, .btn-solaris-secondary, .btn-glass-pill'
  );

  interactiveButtons.forEach(btn => {
    // Keep CTA feedback composed: no cursor-following movement.

    btn.addEventListener('pointerleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });

    // 10. Tactile Ripple Feedback: Trigger on pointerdown for ZERO latency (Apple Principle 1)
    btn.addEventListener('pointerdown', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-wave');
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 550);
    });
  });

  // 11. Scroll Reveal & Stagger Animation System (IntersectionObserver with smooth cubic-bezier)
  const revealElements = document.querySelectorAll('.reveal-fade-up, .stagger-children');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});
