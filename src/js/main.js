import { initAccessibility } from './accessibility';

document.addEventListener('DOMContentLoaded', function() {

    // Initialize accessibility features
    initAccessibility();

    // Load HTML partials
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

                    // Initialize Bootstrap components after loading header/footer
                    if (elementId === 'header-placeholder') {
                        initializeBootstrapNav();
                        setActiveNavLink();
                    } else if (elementId === 'footer-placeholder') {
                        initializeScrollToTop();
                    }
                }
            })
            .catch(error => {
                console.error('Error loading HTML partial:', error);
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = `<p class="alert alert-danger text-center">Error loading content from ${url}.</p>`;
                }
            });
    };

    // Load header and footer
    loadHTML('_header.html', 'header-placeholder');
    loadHTML('_footer.html', 'footer-placeholder');

    // Initialize Bootstrap navigation
    function initializeBootstrapNav() {
        // Initialize dropdowns
        var dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach(dropdown => {
            new bootstrap.Dropdown(dropdown);
        });
    }

    // Set active navigation link
    function setActiveNavLink() {
        const currentPagePath = window.location.pathname;
        let normalizedCurrentPage;

        if (currentPagePath === '/' || currentPagePath.endsWith('/') || currentPagePath.endsWith('/index.html')) {
            normalizedCurrentPage = 'index.html';
        } else {
            normalizedCurrentPage = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
        }

        normalizedCurrentPage = normalizedCurrentPage.split('?')[0].split('#')[0];
        if (normalizedCurrentPage === '') {
            normalizedCurrentPage = 'index.html';
        }

        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            let normalizedLinkHref;

            if (linkHref === '/' || linkHref === 'index.html') {
                normalizedLinkHref = 'index.html';
            } else {
                normalizedLinkHref = linkHref.substring(linkHref.lastIndexOf('/') + 1);
            }

            normalizedLinkHref = normalizedLinkHref.split('?')[0].split('#')[0];
            if (normalizedLinkHref === '') {
                normalizedLinkHref = 'index.html';
            }

            if (normalizedLinkHref === normalizedCurrentPage) {
                link.classList.add('active');
            }
        });
    }

    // Initialize scroll to top functionality
    function initializeScrollToTop() {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        const scrollThreshold = 300;

        if (scrollToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > scrollThreshold) {
                    scrollToTopBtn.classList.add('show');
                } else {
                    scrollToTopBtn.classList.remove('show');
                }
            });

            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Initialize Bootstrap carousels if they exist
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        new bootstrap.Carousel(heroSlider, {
            interval: 6000,
            ride: 'carousel'
        });
    }

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Masonry layout for gallery if it exists
    const galleryGrid = document.querySelector('[data-masonry]');
    if (galleryGrid) {
        var masonry = new Masonry(galleryGrid, {
            percentPosition: true,
            itemSelector: '.col-sm-6'
        });

        // Re-layout Masonry after all images are loaded
        imagesLoaded(galleryGrid).on('progress', function() {
            masonry.layout();
        });
    }
});