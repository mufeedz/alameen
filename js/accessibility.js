// Accessibility enhancements
export const initAccessibility = () => {
    // Handle keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.click();
            }
        });
    });

    // Focus management for modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', () => {
            const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        });
    });

    // Focus trap for modals
    const handleModalKeyboard = (e) => {
        const modal = e.target.closest('.modal');
        if (!modal) return;

        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    };

    document.addEventListener('keydown', handleModalKeyboard);

    // Add ARIA attributes dynamically
    const updateAriaAttributes = () => {
        // Update current page in navigation
        const currentPath = window.location.pathname;
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.setAttribute('aria-current', 'page');
            }
        });

        // Mark required form fields
        document.querySelectorAll('form input[required], form select[required], form textarea[required]')
            .forEach(field => {
                const label = document.querySelector(`label[for="${field.id}"]`);
                if (label) {
                    label.classList.add('required');
                }
            });
    };

    // Call initially and on dynamic content changes
    updateAriaAttributes();
    const observer = new MutationObserver(updateAriaAttributes);
    observer.observe(document.body, { childList: true, subtree: true });
};