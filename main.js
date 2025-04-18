const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
/*navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#hero-slider .slide');
    const prevArrow = document.querySelector('#hero-slider .slider-arrow.prev');
    const nextArrow = document.querySelector('#hero-slider .slider-arrow.next');
    const dotsContainer = document.querySelector('#hero-slider .slider-dots');
    let currentSlide = 0;
    let slideInterval; // To manage the auto-play interval

    if (slides.length === 0) return; // Exit if no slides found

    // --- Create Dots ---
    function createDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        slides.forEach((_, index) => {
            const dot = document.createElement('button'); // Use button for accessibility
            dot.classList.add('slider-dot');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval(); // Reset auto-play timer on manual interaction
            });
            dotsContainer.appendChild(dot);
        });
    }

    // --- Update Active Dot ---
    function updateActiveDot() {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // --- Show Slide Function (Updated) ---
    function showSlide(n) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Add active class to the target slide
        slides[n].classList.add('active');
        // Update the active dot indicator
        updateActiveDot();
    }

    // --- Go To Slide (Handles Index Updates) ---
    function goToSlide(n) {
        currentSlide = n;
        showSlide(currentSlide);
    }

    // --- Next Slide ---
    function showNextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // --- Previous Slide ---
    function showPrevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    // --- Auto-play Interval ---
    function startInterval() {
        // Clear existing interval before starting a new one
        clearInterval(slideInterval);
        slideInterval = setInterval(showNextSlide, 6000); // Increased interval to 6s
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // --- Event Listeners for Arrows ---
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => {
            showPrevSlide();
            resetInterval(); // Reset auto-play timer
        });

        nextArrow.addEventListener('click', () => {
            showNextSlide();
            resetInterval(); // Reset auto-play timer
        });
    }

    // --- Initial Setup ---
    createDots(); // Create dots on load
    showSlide(currentSlide); // Show the initial slide
    startInterval(); // Start auto-play

    // --- Responsive Menu Code (Keep existing code) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
    // --- End Responsive Menu Code ---

}); // End of DOMContentLoaded