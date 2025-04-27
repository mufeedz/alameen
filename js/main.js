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
                    element.innerHTML = data; // <<< HTML is inserted here

                    // --- Initialize JS AFTER specific HTML is loaded ---
                    if (elementId === 'header-placeholder') {
                        setupMobileMenu();
                        setActiveNavLink(); // Header-related JS
                    }
                    // --- ADD THIS ELSE IF block for the footer ---
                    else if (elementId === 'footer-placeholder') {
                        // --- PASTE THE SCROLL-TO-TOP LOGIC HERE ---
                        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
                        const scrollThreshold = 300; // Pixels scrolled before button appears

                        if (scrollToTopBtn) {
                            // Show/Hide button based on scroll position
                            window.addEventListener('scroll', () => {
                                // Use only window.scrollY for simplicity and standard behavior
                                if (window.scrollY > scrollThreshold) {
                                    scrollToTopBtn.classList.add('show');
                                } else {
                                    scrollToTopBtn.classList.remove('show');
                                }
                            });

                            // Scroll to top on click
                            scrollToTopBtn.addEventListener('click', () => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth' // Smooth scrolling animation
                                });
                            });
                        }
                        // --- END OF PASTED SCROLL-TO-TOP LOGIC ---
                    }
                    // --- END OF ADDED ELSE IF block ---

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
    }; // <<< End of loadHTML function

    // --- Load Header and Footer ---
    loadHTML('_header.html', 'header-placeholder');
    loadHTML('_footer.html', 'footer-placeholder');

    // --- Mobile Menu Setup Function ---
    function setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinksContainer = document.querySelector('.main-navbar .nav-links'); // Renamed for clarity

        if (mobileMenuToggle && navLinksContainer) {
            // Mobile Menu Toggle Click Listener
            mobileMenuToggle.addEventListener('click', () => {
                navLinksContainer.classList.toggle('active'); // Use the container
                const icon = mobileMenuToggle.querySelector('i');
                if (navLinksContainer.classList.contains('active')) { // Check container
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
                     if (!indicator.hasAttribute('data-listener-added')) {
                         indicator.addEventListener('click', (e) => {
                            e.preventDefault(); e.stopPropagation();
                            const parentLi = item.parentElement;
                            if (window.innerWidth <= 768) {
                                if (!parentLi.classList.contains('open')) { closeAllSubmenus(); }
                                parentLi.classList.toggle('open');
                            }
                        });
                        indicator.setAttribute('data-listener-added', 'true');
                     }
                }
             });
        } else {
             console.error("Mobile menu elements not found, retrying setup...");
             setTimeout(setupMobileMenu, 150);
        }
    }

    // --- Function to set the active navigation link ---
	function setActiveNavLink() {
	    const currentPagePath = window.location.pathname; // e.g., "/about.html" or "/alameen/about.html" or "/index.html" or "/"
	    const navLinks = document.querySelectorAll('.main-navbar .nav-links > li > a'); // Select only top-level links
	
	    // --- More robust normalization: Get the filename or handle root ---
	    let normalizedCurrentPage;
	    // Check if it's the root path or index.html
	    if (currentPagePath === '/' || currentPagePath.endsWith('/') || currentPagePath.endsWith('/index.html')) {
	        normalizedCurrentPage = 'index.html'; // Consistently use 'index.html' for the root/home page
	    } else {
	        // Get the last part of the path (likely the filename)
	        normalizedCurrentPage = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
	    }
	
	    // Handle query strings or hash fragments if present (remove them)
	    normalizedCurrentPage = normalizedCurrentPage.split('?')[0].split('#')[0];
	
	    // Ensure it's not empty after processing (e.g., if path was just '/')
	    if (normalizedCurrentPage === '') {
	        normalizedCurrentPage = 'index.html';
	    }
	
	    // Optional: Add console log for debugging in the browser's developer tools
	    console.log("Normalized Current Page:", normalizedCurrentPage);
	
	    navLinks.forEach(link => {
	        link.classList.remove('active-link'); // Remove active class from all links first
	        const linkHref = link.getAttribute('href');
	
	        // --- Normalize the link href similarly ---
	        let normalizedLinkHref;
	         if (linkHref === '/' || linkHref.endsWith('/') || linkHref === 'index.html') {
	             normalizedLinkHref = 'index.html';
	         } else {
	             normalizedLinkHref = linkHref.substring(linkHref.lastIndexOf('/') + 1);
	         }
	
	        // Remove query strings or hash fragments from link href as well
	         normalizedLinkHref = normalizedLinkHref.split('?')[0].split('#')[0];
	
	         // Ensure it's not empty
	         if (normalizedLinkHref === '') {
	             normalizedLinkHref = 'index.html';
	         }
	
	        // Optional: Add console log for debugging
	         console.log("Comparing with Link Href:", normalizedLinkHref);
	
	        // --- Compare the normalized names ---
	        if (normalizedLinkHref === normalizedCurrentPage) {
	            link.classList.add('active-link');
	             console.log("Match found for:", linkHref); // Optional debug log
	        }
	    });
	
	    // Safety check: If we are on the effective 'index.html' page and no link is active yet, activate the 'index.html' link.
	     if (normalizedCurrentPage === 'index.html' && !document.querySelector('.main-navbar .nav-links > li > a.active-link')) {
	          const homeLink = document.querySelector('.main-navbar .nav-links > li > a[href="index.html"]');
	          if (homeLink) {
	             homeLink.classList.add('active-link');
	              console.log("Fallback activation for Home link."); // Optional debug log
	         }
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
         const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
         const navLinksContainer = document.querySelector('.main-navbar .nav-links');

         if (siteHeader && mobileMenuToggle && navLinksContainer) {
            const isClickInsideHeader = siteHeader.contains(event.target);
            if (navLinksContainer.classList.contains('active') && !isClickInsideHeader) {
                navLinksContainer.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
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

    if (slides.length > 0) {
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

    }
    // --- End of Slider Code ---

    // --- Scroll To Top Button Logic ---
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
	console.log("Scroll button element:", scrollToTopBtn);
    const scrollThreshold = 300; // Pixels scrolled before button appears

    if (scrollToTopBtn) {
        // Show/Hide button based on scroll position
        window.addEventListener('scroll', () => {
            // Use only window.scrollY for simplicity and standard behavior
            if (window.scrollY > scrollThreshold) { // <-- Simplified condition
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling animation
            });
        });
    }
    // --- End of Scroll To Top Button Logic ---

}); // End of DOMContentLoaded