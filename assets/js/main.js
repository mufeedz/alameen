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
    // Initially hide the button
    backToTopButton.style.display = 'none';
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    
    backToTopButton.addEventListener('click', () => {
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
});
