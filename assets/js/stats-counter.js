// Stats counter animation with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport with offset
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top >= -100 &&
            rect.left >= 0 &&
            rect.bottom <= windowHeight + 100 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate stats when they come into view
    const stats = document.querySelectorAll('.stat-number[data-countup]');
    
    function animateStats() {
        stats.forEach((stat, index) => {
            if (isInViewport(stat) && !stat.classList.contains('counted')) {
                // Add pulsing effect class
                stat.classList.add('pulse-effect');
                
                // Staggered animation start
                setTimeout(() => {
                    const target = parseInt(stat.getAttribute('data-countup'));
                    const duration = 2500; // ms
                    const frameDuration = 1000/60; // 60fps
                    const totalFrames = Math.round(duration / frameDuration);
                    let frame = 0;
                    const countTo = parseInt(target, 10);
                    
                    // Start the animation
                    stat.classList.add('counted');
                    
                    // Add glow effect temporarily
                    stat.closest('.stat-item').classList.add('stats-glow');
                    
                    const counter = setInterval(() => {
                        frame++;
                        // Calculate progress (easeOutQuad)
                        const progress = frame / totalFrames;
                        const easing = progress * (2 - progress);
                        const currentCount = Math.round(countTo * easing);
                        
                        // Format the number based on the original text content
                        const originalText = stat.textContent;
                        if (originalText.includes('%')) {
                            stat.textContent = currentCount + '%';
                        } else if (originalText.includes('+')) {
                            stat.textContent = currentCount.toLocaleString() + '+';
                        } else {
                            // For years like 1980, no suffix
                            stat.textContent = currentCount.toLocaleString();
                        }
                        
                        if (frame === totalFrames) {
                            clearInterval(counter);
                            // Add a subtle bounce at the end
                            stat.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                stat.style.transform = 'scale(1)';
                                // Remove effects after animation completes
                                setTimeout(() => {
                                    stat.classList.remove('pulse-effect');
                                    stat.closest('.stat-item').classList.remove('stats-glow');
                                }, 300);
                            }, 200);
                        }
                    }, frameDuration);
                }, index * 200); // Stagger each animation by 200ms
            }
        });
    }

    // Run on scroll and initially
    window.addEventListener('scroll', animateStats);
    animateStats();
});
