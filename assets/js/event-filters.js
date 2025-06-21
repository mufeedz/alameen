/**
 * Enhanced event filtering functionality for Al-Ameen School website
 * Updated to work with unified event display without campus-specific columns
 */

document.addEventListener('DOMContentLoaded', function() {
  // Setup event filters
  function setupEventFilters() {
    const filterButtons = document.querySelectorAll('.event-filter button');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Toggle active class on buttons - make sure to remove active from all buttons first
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.classList.add('btn--outline-primary');
          btn.classList.remove('btn--primary');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        this.classList.add('btn--primary');
        this.classList.remove('btn--outline-primary');
        
        // Apply filtering logic
        if (filter === 'holidays') {
          // Show only holidays section
          document.getElementById('all-events').classList.add('d-none');
          document.getElementById('holidays-section').classList.remove('d-none');
        } else if (filter === 'all') {
          // Show all sections
          document.getElementById('all-events').classList.remove('d-none');
          document.getElementById('holidays-section').classList.remove('d-none');
          
          // Show all event cards
          document.querySelectorAll('#all-events .event-card').forEach(card => {
            card.classList.remove('d-none');
          });
        } else {
          // For campus-specific filters (main, annex)
          document.getElementById('all-events').classList.remove('d-none');
          document.getElementById('holidays-section').classList.add('d-none');
          
          // Filter individual event cards by campus
          document.querySelectorAll('#all-events .event-card').forEach(card => {
            if (card.getAttribute('data-campus') === filter) {
              card.classList.remove('d-none');
            } else {
              card.classList.add('d-none');
            }
          });
          
          // Check if any events are visible, show message if none
          const visibleEvents = document.querySelectorAll('#all-events .event-card:not(.d-none)');
          const eventsContainer = document.querySelector('#all-events-dynamic');
          const noEventsMessage = document.querySelector('#all-events .no-events-message');
          
          if (visibleEvents.length === 0 && eventsContainer) {
            if (!noEventsMessage) {
              const messageDiv = document.createElement('div');
              messageDiv.className = 'no-events-message';
              messageDiv.textContent = `No upcoming events scheduled for ${filter === 'main' ? 'Karungalpalayam Campus' : 'Ellapalayam Campus'}`;
              eventsContainer.appendChild(messageDiv);
            }
          } else if (noEventsMessage) {
            noEventsMessage.remove();
          }
        }
      });
    });
  }

  // Initialize event filters if on events page
  if (document.querySelector('.event-filter')) {
    setupEventFilters();
  }
});
