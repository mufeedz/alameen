// Main JS for Al-Ameen School

// Load header and footer partials
function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => { 
      document.getElementById(id).innerHTML = html; 
      
      // Initialize dropdown menus after header is loaded
      if (id === 'header-include') {
        initializeDropdowns();
        initializeBackToTop();
      }
    });
}

// Initialize dropdown menus
function initializeDropdowns() {
  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
      if (window.innerWidth > 991) {
        e.preventDefault();
        if (this.getAttribute('aria-expanded') === 'false') {
          this.setAttribute('aria-expanded', 'true');
          this.nextElementSibling.classList.add('show');
        } else {
          this.setAttribute('aria-expanded', 'false');
          this.nextElementSibling.classList.remove('show');
        }
      }
    });
  });
}

// Initialize back-to-top button
function initializeBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    // Make sure button is initially hidden
    backToTopButton.classList.remove('show');
    
    // Function to check scroll position
    const checkScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };
    
    // Run immediately and after a short delay (for Live Server)
    checkScroll();
    setTimeout(checkScroll, 100);
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
      backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Swiper initialization for pages with hero sliders
function initializeHeroSwiper() {
  const heroSwiper = document.querySelector('.hero-swiper');
  
  if (heroSwiper) {
    new Swiper('.hero-swiper', {
      loop: true,
      autoplay: { delay: 4000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      effect: 'fade',
    });
  }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load header and footer
  if (document.getElementById('header-include')) {
    loadPartial('header-include', 'partials/header.html');
  }
  
  if (document.getElementById('footer-include')) {
    loadPartial('footer-include', 'partials/footer.html');
  }
  
  // Initialize Swiper
  initializeHeroSwiper();
  
  // Initialize Islamic pattern backgrounds
  initializePatternBackgrounds();
  
  // Additional initialization for back-to-top when using Live Server
  window.addEventListener('load', function() {
    // Double-check back-to-top button after everything is loaded
    setTimeout(function() {
      if (document.querySelector('.back-to-top')) {
        initializeBackToTop();
      }
    }, 500);
  });
});

// Function to handle Islamic pattern background sizing
function initializePatternBackgrounds() {
  const patternElements = document.querySelectorAll('.pattern-star-bg, .pattern-rosette-bg, .pattern-girih-bg, .islamic-motif');
  
  // Set initial sizes
  patternElements.forEach(element => {
    // Make sure parent has position relative for proper containment
    if (element.parentElement.style.position !== 'relative') {
      element.parentElement.style.position = 'relative';
    }
    
    // For hero sections, adjust opacity slightly
    if (element.closest('.hero')) {
      element.style.opacity = '0.1';
      element.style.mixBlendMode = 'overlay';
    }
  });
  
  // Adjust pattern sizes on window resize for responsiveness
  window.addEventListener('resize', () => {
    patternElements.forEach(element => {
      // Responsive adjustments can be made here if needed
      if (window.innerWidth < 768) {
        element.style.backgroundSize = 'auto 100%';
      } else {
        // Reset to default background size
        element.style.backgroundSize = '';
      }
    });
  });
}
