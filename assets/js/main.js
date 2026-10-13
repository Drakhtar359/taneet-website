/**
 * Taneet - Next-Gen Maritime Intelligence & Fleet Management
 * Interactive Controller (White Theme & Brand Colors #28ada4 / #7b0b76)
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

  // --- Interactive Product Simulator: Tabs ---
  const tabButtons = document.querySelectorAll('.simulator-tab-btn');
  const tabPanes = document.querySelectorAll('.simulator-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button styles
      tabButtons.forEach(b => {
        b.classList.remove('bg-[#28ada4]', 'text-white', 'shadow-sm');
        b.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-[#28ada4]', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');

      // Update tab contents
      tabPanes.forEach(pane => {
        if (pane.id === `tab-${targetTab}`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });

      // Refresh icons
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // --- Tab 1: Live Vessel Simulator Search & Filter ---
  const vesselSearch = document.getElementById('vesselSearch');
  const filterPills = document.querySelectorAll('.vessel-filter-pill');
  const vesselItems = document.querySelectorAll('.vessel-row-item');

  function filterVessels() {
    const query = vesselSearch ? vesselSearch.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.vessel-filter-pill.active');
    const filterType = activePill ? activePill.getAttribute('data-status') : 'all';

    vesselItems.forEach(item => {
      const name = item.getAttribute('data-name')?.toLowerCase() || '';
      const imo = item.getAttribute('data-imo')?.toLowerCase() || '';
      const status = item.getAttribute('data-status') || '';

      const matchesSearch = name.includes(query) || imo.includes(query);
      const matchesFilter = filterType === 'all' || status === filterType;

      if (matchesSearch && matchesFilter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (vesselSearch) {
    vesselSearch.addEventListener('input', filterVessels);
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active', 'bg-[#28ada4]', 'text-white');
        p.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });
      pill.classList.add('active', 'bg-[#28ada4]', 'text-white');
      pill.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      filterVessels();
    });
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

  // --- Live Demo Request Modal ---
  const demoModal = document.getElementById('demoModal');
  const openDemoBtns = document.querySelectorAll('.open-demo-modal-btn');
  const closeDemoBtn = document.getElementById('closeDemoBtn');
  const demoForm = document.getElementById('demoForm');
  const formStateDefault = document.getElementById('formStateDefault');
  const formStateSuccess = document.getElementById('formStateSuccess');

  function openModal() {
    if (!demoModal) return;
    demoModal.classList.remove('hidden');
    demoModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!demoModal) return;
    demoModal.classList.add('hidden');
    demoModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeDemoBtn) {
    closeDemoBtn.addEventListener('click', closeModal);
  }

  // Close on outside click
  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && !demoModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Handle Demo Form Submit
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = demoForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg> Scheduling Consultation...
        `;
      }

      setTimeout(() => {
        if (formStateDefault && formStateSuccess) {
          formStateDefault.classList.add('hidden');
          formStateSuccess.classList.remove('hidden');
          if (window.lucide) window.lucide.createIcons();
        }
      }, 600);
    });
  }
});
