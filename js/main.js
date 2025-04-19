document.addEventListener('DOMContentLoaded', function() {

    // --- Function to load HTML partials ---
    const loadHTML = (url, elementId) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} while fetching ${url}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                    // --- Re-initialize mobile menu AFTER header is loaded ---
                    if (elementId === 'header-placeholder') {
                        setupMobileMenu(); // *** UNCOMMENTED THIS LINE ***
                    }
                } else {
                    console.error(`Element with ID '${elementId}' not found.`);
                }
            })
            .catch(error => {
                console.error('Error loading HTML partial:', error);
                const element = document.getElementById(elementId);
                 if (element) {
                     element.innerHTML = `<p style="color: red; text-align: center;">Error loading content from ${url}.</p>`;
                 }
            });
    };

    // --- Load Header and Footer ---
    loadHTML('_header.html', 'header-placeholder');
    loadHTML('_footer.html', 'footer-placeholder');

    // --- Mobile Menu Setup Function ---
    function setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.main-navbar .nav-links');

        if (mobileMenuToggle && navLinks) {
            // Mobile Menu Toggle Click Listener
            mobileMenuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    mobileMenuToggle.setAttribute('aria-expanded', 'true');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    closeAllSubmenus();
                }
            });

            // Mobile Submenu Indicator Click Listeners
             const menuItemsWithChildren = document.querySelectorAll('.main-navbar .menu-item-has-children > a');
             menuItemsWithChildren.forEach(item => {
                const indicator = item.querySelector('.dropdown-indicator');
                if (indicator) {
                     // Prevent adding listener multiple times if setup runs again somehow
                     if (!indicator.hasAttribute('data-listener-added')) {
                         indicator.addEventListener('click', (e) => {
                            e.preventDefault(); e.stopPropagation();
                            const parentLi = item.parentElement;
                            if (window.innerWidth <= 768) {
                                if (!parentLi.classList.contains('open')) { closeAllSubmenus(); }
                                parentLi.classList.toggle('open');
                            }
                        });
                        indicator.setAttribute('data-listener-added', 'true'); // Mark as added
                     }
                }
             });
        } else {
             // Optional: Retry mechanism if elements aren't found immediately
             console.error("Mobile menu elements not found, retrying setup...");
             setTimeout(setupMobileMenu, 150); // Slightly increased delay
        }
    }

    // Function to close all open submenus
    function closeAllSubmenus() {
         document.querySelectorAll('.main-navbar .menu-item-has-children.open').forEach(openItem => {
             openItem.classList.remove('open');
         });
     }

     // Close mobile menu if clicking outside page header
     document.addEventListener('click', function(event) {
         const siteHeader = document.querySelector('.site-header');
         const mobileMenuToggle = document.querySelector('.mobile-menu-toggle'); // Check element exists
         const navLinks = document.querySelector('.main-navbar .nav-links'); // Check element exists

         // Ensure elements exist before accessing properties/methods
         if (siteHeader && mobileMenuToggle && navLinks) {
            const isClickInsideHeader = siteHeader.contains(event.target);
            if (navLinks.classList.contains('active') && !isClickInsideHeader) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                // Check if icon exists before changing classes
                if (icon) {
                   icon.classList.remove('fa-times');
                   icon.classList.add('fa-bars');
                }
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                closeAllSubmenus();
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
                 dot.addEventListener('click', () => { goToSlide(index); resetInterval(); });
                 dotsContainer.appendChild(dot);
             });
         }

        function updateActiveDot() {
             if (!dotsContainer) return;
            const dots = dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                 dot.classList.toggle('active', index === currentSlide);
            });
        }

        function showSlide(n) {
             n = (n + slides.length) % slides.length;
             currentSlide = n;
             slides.forEach((slide, index) => {
                 slide.classList.toggle('active', index === n);
             });
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
             clearInterval(slideInterval);
             slideInterval = setInterval(showNextSlide, 6000);
         }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        if (prevArrow && nextArrow) {
            prevArrow.addEventListener('click', () => { showPrevSlide(); resetInterval(); });
            nextArrow.addEventListener('click', () => { showNextSlide(); resetInterval(); });
        }

        createDots();
        if (slides.length > 0) {
           showSlide(currentSlide);
           startInterval();
        }

    } // End of slider code block
    // --- End of Slider Code ---

}); // End of DOMContentLoaded