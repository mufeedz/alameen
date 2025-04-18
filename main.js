document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.main-navbar .nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Change icon on toggle
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Change to X icon
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Change back to bars
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                 // Close any open submenus when main menu closes
                 closeAllSubmenus();
            }
        });
    }

    // --- Mobile Submenu Toggle ---
    const menuItemsWithChildren = document.querySelectorAll('.main-navbar .menu-item-has-children > a');

    menuItemsWithChildren.forEach(item => {
        // Find the dropdown indicator within this specific link
        const indicator = item.querySelector('.dropdown-indicator');

        // Create a separate click target for the indicator on mobile
        if (indicator) {
             indicator.addEventListener('click', (e) => {
                // Prevent the main link click event when clicking indicator
                e.preventDefault();
                e.stopPropagation();

                const parentLi = item.parentElement; // Get the parent LI

                // Check if window width is mobile (e.g., <= 768px)
                if (window.innerWidth <= 768) {
                    // Close other open submenus before opening a new one
                    if (!parentLi.classList.contains('open')) {
                         closeAllSubmenus();
                    }
                     // Toggle the 'open' class on the parent LI
                    parentLi.classList.toggle('open');
                }
            });
        }

         // Optional: Allow main link click on mobile if needed, but prevent if indicator is clicked
         item.addEventListener('click', (e) => {
             if (window.innerWidth <= 768 && item.parentElement.classList.contains('menu-item-has-children')) {
                 // If the indicator was clicked, the event propagation was stopped earlier.
                 // If the main link text itself is clicked on mobile, decide behavior:
                 // Option 1: Prevent default navigation and just open submenu
                 // e.preventDefault();
                 // if (!item.parentElement.classList.contains('open')) { closeAllSubmenus(); } // Ensure others close
                 // item.parentElement.classList.toggle('open');

                 // Option 2: Allow navigation (current behavior - does nothing extra here)
             }
         });
    });

    // Function to close all open submenus
    function closeAllSubmenus() {
        document.querySelectorAll('.main-navbar .menu-item-has-children.open').forEach(openItem => {
            openItem.classList.remove('open');
        });
    }

    // Close mobile menu if clicking outside of it (Optional)
    document.addEventListener('click', function(event) {
      // Ensure navLinks and toggle exist before checking classes/contains
      if (mobileMenuToggle && navLinks) {
          const isClickInsideHeader = document.querySelector('.site-header').contains(event.target);
          if (navLinks.classList.contains('active') && !isClickInsideHeader) {
            navLinks.classList.remove('active');
            // Reset toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
             mobileMenuToggle.setAttribute('aria-expanded', 'false');
             closeAllSubmenus(); // Also close submenus
          }
      }
    });


    // --- Hero Slider Code ---
    const slides = document.querySelectorAll('#hero-slider .slide');
    const prevArrow = document.querySelector('#hero-slider .slider-arrow.prev');
    const nextArrow = document.querySelector('#hero-slider .slider-arrow.next');
    const dotsContainer = document.querySelector('#hero-slider .slider-dots');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) { // Check if slider elements exist
        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('slider-dot');
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
        }

        function updateActiveDot() {
             if (!dotsContainer) return;
            const dots = dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function showSlide(n) {
            // Ensure n is within bounds
             n = (n + slides.length) % slides.length;
             currentSlide = n; // Update currentSlide index
            slides.forEach(slide => slide.classList.remove('active'));
            slides[n].classList.add('active');
            updateActiveDot();
        }

        function goToSlide(n) {
            showSlide(n);
        }

        function showNextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }

        function showPrevSlide() {
            let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        }

        function startInterval() {
            clearInterval(slideInterval); // Clear existing interval first
            slideInterval = setInterval(showNextSlide, 6000); // Set interval
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Attach event listeners only if arrows exist
        if (prevArrow && nextArrow) {
            prevArrow.addEventListener('click', () => {
                showPrevSlide();
                resetInterval();
            });

            nextArrow.addEventListener('click', () => {
                showNextSlide();
                resetInterval();
            });
        }

        // Initial setup
        createDots();
        if (slides.length > 0) {
           showSlide(currentSlide); // Show the initial slide
           startInterval(); // Start auto-play
        }

    } // End of slider code block

    // --- End of Slider Code ---

}); // End of DOMContentLoaded