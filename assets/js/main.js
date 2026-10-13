/**
 * Taneet - Next-Gen Maritime Intelligence & Fleet Management
 * Controller (Description & Showcase Platform)
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

  // --- Dynamic ROI & Fleet Efficiency Calculator ---
  const sliderFleet = document.getElementById('sliderFleet');
  const sliderCrew = document.getElementById('sliderCrew');
  const fleetValLabel = document.getElementById('fleetValLabel');
  const crewValLabel = document.getElementById('crewValLabel');

  const metricHoursSaved = document.getElementById('metricHoursSaved');
  const metricRiskReduction = document.getElementById('metricRiskReduction');
  const metricCostSavings = document.getElementById('metricCostSavings');

  function calculateROI() {
    if (!sliderFleet || !sliderCrew) return;

    const fleetCount = parseInt(sliderFleet.value, 10);
    const crewCount = parseInt(sliderCrew.value, 10);

    if (fleetValLabel) fleetValLabel.textContent = `${fleetCount} Vessels`;
    if (crewValLabel) crewValLabel.textContent = `${crewCount} Seafarers`;

    // Calculations based on maritime benchmark studies:
    const hoursSavedMonth = Math.round(fleetCount * 14.5 + crewCount * 0.4);
    const riskReduction = Math.min(99, Math.round(82 + (fleetCount > 20 ? 12 : 8)));
    const annualSavingsUSD = (fleetCount * 4400) + (crewCount * 180);
    
    const formattedSavings = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(annualSavingsUSD);

    if (metricHoursSaved) metricHoursSaved.textContent = `${hoursSavedMonth.toLocaleString()} hrs/mo`;
    if (metricRiskReduction) metricRiskReduction.textContent = `${riskReduction}%`;
    if (metricCostSavings) metricCostSavings.textContent = formattedSavings;
  }

  if (sliderFleet && sliderCrew) {
    sliderFleet.addEventListener('input', calculateROI);
    sliderCrew.addEventListener('input', calculateROI);
    calculateROI();
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
});
