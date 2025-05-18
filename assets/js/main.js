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

// Initialize dropdown menus with keyboard accessibility support
function initializeDropdowns() {
  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    // Click event handler
    item.addEventListener('click', function(e) {
      if (window.innerWidth > 991) {
        e.preventDefault();
        toggleDropdown(this);
      }
    });
    
    // Keyboard event handler
    item.addEventListener('keydown', function(e) {
      // Enter or Space key
      if (e.key === 'Enter' || e.key === ' ') {
        if (window.innerWidth > 991) {
          e.preventDefault();
          toggleDropdown(this);
        }
      }
      // Down arrow key
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (window.innerWidth > 991) {
          // Open dropdown if closed
          if (this.getAttribute('aria-expanded') === 'false') {
            toggleDropdown(this);
          }
          // Focus on first item in dropdown
          const firstDropdownItem = this.nextElementSibling.querySelector('a');
          if (firstDropdownItem) {
            firstDropdownItem.focus();
          }
        }
      }
      // Escape key closes dropdown
      else if (e.key === 'Escape') {
        if (window.innerWidth > 991 && this.getAttribute('aria-expanded') === 'true') {
          toggleDropdown(this);
          this.focus(); // Return focus to the dropdown toggle
        }
      }
    });
  });
  
  // Add keyboard navigation within dropdown menus
  document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('keydown', function(e) {
      if (window.innerWidth > 991) {
        const parent = this.closest('.dropdown-menu');
        const items = Array.from(parent.querySelectorAll('a'));
        const currentIndex = items.indexOf(this);
        const lastIndex = items.length - 1;
        
        // Down arrow - move to next item or loop to first
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
          items[nextIndex].focus();
        }
        // Up arrow - move to previous item or loop to last
        else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
          items[prevIndex].focus();
        }
        // Escape key - close dropdown and return focus to toggle
        else if (e.key === 'Escape') {
          e.preventDefault();
          const toggle = parent.previousElementSibling;
          toggleDropdown(toggle);
          toggle.focus();
        }
      }
    });
  });
}

// Helper function to toggle dropdown state
function toggleDropdown(toggleElement) {
  if (toggleElement.getAttribute('aria-expanded') === 'false') {
    toggleElement.setAttribute('aria-expanded', 'true');
    toggleElement.nextElementSibling.classList.add('show');
  } else {
    toggleElement.setAttribute('aria-expanded', 'false');
    toggleElement.nextElementSibling.classList.remove('show');
  }
}

// Initialize back-to-top button with accessibility improvements
function initializeBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    // Make sure button is initially hidden and properly labeled
    backToTopButton.classList.remove('show');
    
    // Ensure button has proper attributes for accessibility
    if (!backToTopButton.hasAttribute('tabindex')) {
      backToTopButton.setAttribute('tabindex', '0');
    }
    
    // Function to check scroll position and update button state
    const checkScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
        backToTopButton.setAttribute('tabindex', '0');
        backToTopButton.setAttribute('aria-hidden', 'false');
      } else {
        backToTopButton.classList.remove('show');
        backToTopButton.setAttribute('tabindex', '-1');
        backToTopButton.setAttribute('aria-hidden', 'true');
      }
    };
    
    // Run immediately and after a short delay (for Live Server)
    checkScroll();
    setTimeout(checkScroll, 100);
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Handle both click and keyboard events
    backToTopButton.addEventListener('click', handleBackToTop);
    backToTopButton.addEventListener('keydown', function(e) {
      // Respond to Enter or Space key
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleBackToTop(e);
      }
    });
  }
  
  // Function to handle back to top action
  function handleBackToTop(e) {
    e.preventDefault();
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // After scrolling, move focus to the main content area for better user experience
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        const firstFocusableElement = mainContent.querySelector('h1, [tabindex="0"]');
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        }
      }
    }, 500); // Allow time for the scroll to complete
  }
}

// Initialize gallery features if on gallery page with accessibility improvements
function initializeGallery() {
  // Check if we're on the gallery page
  if (document.querySelector('.gallery-grid')) {
    // Wait for images to load for better layout
    window.addEventListener('load', function() {
      // Add keyboard navigation to filter buttons
      const filterButtonGroup = document.querySelector('.filter-button-group');
      if (filterButtonGroup) {
        // Set ARIA attributes for the filter button group
        filterButtonGroup.setAttribute('role', 'tablist');
        filterButtonGroup.setAttribute('aria-label', 'Gallery category filters');

        // Set up each filter button with proper ARIA attributes
        const filterButtons = filterButtonGroup.querySelectorAll('button');
        filterButtons.forEach((btn, index) => {
          // Set appropriate ARIA attributes
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
          btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
          
          // Add keyboard event listeners
          btn.addEventListener('keydown', function(e) {
            // Left/Right arrows to navigate between filter buttons
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault();
              
              // Calculate next button index (with wrapping)
              const direction = e.key === 'ArrowLeft' ? -1 : 1;
              const nextIndex = (index + direction + filterButtons.length) % filterButtons.length;
              
              // Move focus to next button
              filterButtons[nextIndex].focus();
            }
            // Space or Enter to activate the filter
            else if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              btn.click();
            }
          });
        });
      }
      
      // Initialize Isotope if it exists with accessibility improvements
      if (typeof Isotope !== 'undefined') {
        const grid = document.querySelector('.gallery-grid');
        const iso = new Isotope(grid, {
          itemSelector: '.gallery-item',
          layoutMode: 'fitRows',
          percentPosition: true
        });
        
        // Make gallery container accessible
        grid.setAttribute('role', 'region');
        grid.setAttribute('aria-label', 'Gallery images');
        
        // Filter items on button click or keyboard activation
        document.querySelector('.filter-button-group').addEventListener('click', function(event) {
          if (!event.target.matches('button')) return;
          
          const filterValue = event.target.getAttribute('data-filter');
          iso.arrange({ filter: filterValue === '*' ? '' : filterValue });
          
          // Update active button state and ARIA attributes
          document.querySelectorAll('.filter-button-group .btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
            btn.setAttribute('tabindex', '-1');
          });
          
          // Set new active button
          event.target.classList.add('active');
          event.target.setAttribute('aria-selected', 'true');
          event.target.setAttribute('tabindex', '0');
          
          // Announce filter change to screen readers
          const filterName = event.target.textContent.trim();
          announceForScreenReaders(`Showing ${filterName} images`);
        });
        
        // Make gallery items keyboard navigable
        document.querySelectorAll('.gallery-item a').forEach((link, index, links) => {
          // Add appropriate ARIA attributes
          link.setAttribute('role', 'link');
          link.setAttribute('aria-label', link.getAttribute('data-title') || `Gallery image ${index + 1}`);
          
          // Add keyboard navigation between gallery items
          link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
              
              let nextIndex;
              const filteredLinks = Array.from(links).filter(l => {
                const item = l.closest('.gallery-item');
                return window.getComputedStyle(item).display !== 'none';
              });
              
              const currentFilteredIndex = filteredLinks.indexOf(link);
              
              // Determine next focus target based on arrow key
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                nextIndex = (currentFilteredIndex + 1) % filteredLinks.length;
              } else {
                nextIndex = (currentFilteredIndex - 1 + filteredLinks.length) % filteredLinks.length;
              }
              
              filteredLinks[nextIndex].focus();
            }
          });
        });
      }
      
      // Initialize Lightbox if it exists with accessibility improvements
      if (typeof lightbox !== 'undefined') {
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'albumLabel': "Image %1 of %2",
          'fadeDuration': 300,
          'alwaysShowNavOnTouchDevices': true
        });
        
        // Add keyboard listener to document to handle Escape key properly
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && document.querySelector('.lb-container')) {
            lightbox.end();
            // Return focus to the gallery item that was clicked
            const activeItem = document.querySelector('.gallery-item a[data-lightbox="school-gallery"].active');
            if (activeItem) activeItem.focus();
          }
        });
      }
    });
  }
}

// Helper function to announce changes to screen readers
function announceForScreenReaders(message) {
  const announcer = document.getElementById('screen-reader-announcer') || 
    (() => {
      const el = document.createElement('div');
      el.id = 'screen-reader-announcer';
      el.setAttribute('aria-live', 'polite');
      el.setAttribute('aria-atomic', 'true');
      el.classList.add('visually-hidden');
      document.body.appendChild(el);
      return el;
    })();
  
  announcer.textContent = message;
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

// Optimization for performance
function optimizePagePerformance() {
  // Defer non-critical images using IntersectionObserver
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    // Find all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
  
  // Optimize event handlers by using event delegation where possible
  document.addEventListener('click', function(e) {
    // Handle dropdown clicks
    if (e.target.closest('.dropdown-toggle')) {
      // Dropdown handling is already done separately
    }
    
    // Handle back-to-top button
    if (e.target.closest('.back-to-top')) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
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
  
  // Enable lazy loading for all images
  enableLazyLoading();
  
  // Initialize performance optimizations
  optimizePagePerformance();
  
  // Initialize Swiper
  initializeHeroSwiper();
  
  // Initialize Islamic pattern backgrounds
  initializePatternBackgrounds();
  
  // Initialize Gallery features if on gallery page
  initializeGallery();
  
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

// Function to add lazy loading attribute to all images that don't have it
function enableLazyLoading() {
  // Skip the first few images (above the fold) for better performance
  const allImages = document.querySelectorAll('img:not([loading])');
  
  // Add lazy loading to all images except for the first few visible ones
  allImages.forEach((img, index) => {
    // Don't lazy load the first 2-3 images (likely above the fold)
    if (index > 2) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Ensure all images have proper alt text for accessibility
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
      
      // Mark decorative images appropriately
      if (img.closest('[aria-hidden="true"]') || 
          img.classList.contains('banner-accent') || 
          img.classList.contains('decoration')) {
        img.setAttribute('aria-hidden', 'true');
      }
    }
  });
}

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
