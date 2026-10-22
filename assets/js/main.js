/**
 * Taneet - Next-Gen Maritime Intelligence & Fleet Management
 * Controller (Documentation, Certification & Digital Log Platform)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('hidden');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) {
        mobileNav.classList.add('hidden');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // --- Sticky Navigation Bar scroll shadow effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-sm', 'border-slate-200/90', 'bg-white/95');
        navbar.classList.remove('bg-white/85');
      } else {
        navbar.classList.remove('shadow-sm', 'border-slate-200/90', 'bg-white/95');
        navbar.classList.add('bg-white/85');
      }
    }
  });

  // --- Pricing Billing Cycle Toggle (Yearly vs Monthly) ---
  const billingYearlyBtn = document.getElementById('billingYearlyBtn');
  const billingMonthlyBtn = document.getElementById('billingMonthlyBtn');
  const litePriceValue = document.getElementById('litePriceValue');
  const litePriceSubtext = document.getElementById('litePriceSubtext');
  const fullPriceValue = document.getElementById('fullPriceValue');
  const fullPriceSubtext = document.getElementById('fullPriceSubtext');

  function setBillingCycle(cycle) {
    if (!billingYearlyBtn || !billingMonthlyBtn) return;

    if (cycle === 'yearly') {
      billingYearlyBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 bg-white text-slate-900 shadow-sm flex items-center gap-2';
      billingMonthlyBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-slate-600 hover:text-slate-900';
      if (litePriceValue) litePriceValue.textContent = '€85*';
      if (litePriceSubtext) {
        litePriceSubtext.innerHTML = '<span class="block">Paid yearly</span><span class="block text-slate-400">€99/mo if paid monthly</span>';
      }
      if (fullPriceValue) fullPriceValue.textContent = '€165*';
      if (fullPriceSubtext) {
        fullPriceSubtext.innerHTML = '<span class="block">Paid yearly</span><span class="block text-slate-400">€189/mo if paid monthly</span>';
      }
    } else {
      billingMonthlyBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 bg-white text-slate-900 shadow-sm';
      billingYearlyBtn.className = 'px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-slate-600 hover:text-slate-900 flex items-center gap-2';
      if (litePriceValue) litePriceValue.textContent = '€99*';
      if (litePriceSubtext) {
        litePriceSubtext.innerHTML = '<span class="block">Paid monthly</span><span class="block text-slate-400">€85/mo if paid yearly</span>';
      }
      if (fullPriceValue) fullPriceValue.textContent = '€189*';
      if (fullPriceSubtext) {
        fullPriceSubtext.innerHTML = '<span class="block">Paid monthly</span><span class="block text-slate-400">€165/mo if paid yearly</span>';
      }
    }
  }

  if (billingYearlyBtn && billingMonthlyBtn) {
    billingYearlyBtn.addEventListener('click', () => setBillingCycle('yearly'));
    billingMonthlyBtn.addEventListener('click', () => setBillingCycle('monthly'));
  }

  // --- FAQ Accordions ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        
        // Close others
        faqItems.forEach(other => {
          const otherContent = other.querySelector('.faq-content');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current
        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    }
  });

  // --- Cookie Consent Pop-up Banner ---
  const cookieBanner = document.getElementById('cookieConsentBanner');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
  const rejectCookiesBtn = document.getElementById('rejectCookiesBtn');
  const closeCookieBtn = document.getElementById('closeCookieBanner');

  function showCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
    cookieBanner.classList.add('translate-y-0', 'opacity-100');
  }

  function hideCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('translate-y-0', 'opacity-100');
    cookieBanner.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
  }

  // Check if consent has already been recorded
  const existingConsent = localStorage.getItem('taneet_cookies_consent');
  if (!existingConsent) {
    // Delay appearance slightly so page loads gracefully first
    setTimeout(showCookieBanner, 700);
  }

  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('taneet_cookies_consent', 'accepted_all');
      hideCookieBanner();
    });
  }

  if (rejectCookiesBtn) {
    rejectCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('taneet_cookies_consent', 'essential_only');
      hideCookieBanner();
    });
  }

  if (closeCookieBtn) {
    closeCookieBtn.addEventListener('click', () => {
      hideCookieBanner();
    });
  }
});
