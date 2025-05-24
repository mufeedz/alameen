// Stats counter animation
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate stats when they come into view
    const stats = document.querySelectorAll('.stat-number[data-countup]');
    
    function animateStats() {
        stats.forEach(stat => {
            if (isInViewport(stat) && !stat.classList.contains('counted')) {
                const target = parseInt(stat.getAttribute('data-countup'));
                const duration = 2000; // ms
                const frameDuration = 1000/60; // 60fps
                const totalFrames = Math.round(duration / frameDuration);
                let frame = 0;
                const countTo = parseInt(target, 10);
                
                // Start the animation
                stat.classList.add('counted');
                
                const counter = setInterval(() => {
                    frame++;
                    // Calculate progress (easeOutQuad)
                    const progress = frame / totalFrames;
                    const easing = progress * (2 - progress);
                    const currentCount = Math.round(countTo * easing);
                    
                    // Format the number with commas
                    stat.textContent = currentCount.toLocaleString() + '+';
                    
                    if (frame === totalFrames) {
                        clearInterval(counter);
                    }
                }, frameDuration);
            }
        });
    }

    // Run on scroll and initially
    window.addEventListener('scroll', animateStats);
    animateStats();
});
