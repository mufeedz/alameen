/**
 * Enhanced event filtering functionality for Al-Ameen School website
 * This improves the filter functionality by ensuring proper button states and layout changes
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
        
        // Reset all column classes first to ensure proper layout switching
        const mainCampusColumn = document.querySelector('#all-events > div:nth-child(1)');
        const annexCampusColumn = document.querySelector('#all-events > div:nth-child(2)');
        
        if (mainCampusColumn && annexCampusColumn) {
          // Reset both columns to default state
          [mainCampusColumn, annexCampusColumn].forEach(col => {
            col.classList.remove('d-none', 'col-12');
            col.classList.add('col-lg-6');
          });
        }
        
        // Apply filtering logic
        if (filter === 'holidays') {
          // Show only holidays section
          document.getElementById('all-events').classList.add('d-none');
          document.getElementById('holidays-section').classList.remove('d-none');
        } else if (filter === 'all') {
          // Show all sections
          document.getElementById('all-events').classList.remove('d-none');
          document.getElementById('holidays-section').classList.remove('d-none');
          
          // Show all campus events
          document.querySelectorAll('#all-events .event-card').forEach(card => {
            card.classList.remove('d-none');
          });
        } else {
          // For campus-specific filters (main, annex)
          document.getElementById('all-events').classList.remove('d-none');
          document.getElementById('holidays-section').classList.add('d-none');
          
          // Show only the column for the selected campus, hide the other
          if (filter === 'main') {
            mainCampusColumn.classList.remove('col-lg-6');
            mainCampusColumn.classList.add('col-12');
            annexCampusColumn.classList.add('d-none');
          } else if (filter === 'annex') {
            annexCampusColumn.classList.remove('col-lg-6');
            annexCampusColumn.classList.add('col-12');
            mainCampusColumn.classList.add('d-none');
          }
          
          // Also filter individual event cards for safety
          document.querySelectorAll('#all-events .event-card').forEach(card => {
            if (card.getAttribute('data-campus') === filter) {
              card.classList.remove('d-none');
            } else {
              card.classList.add('d-none');
            }
          });
        }
      });
    });
  }

  // Initialize event filters if on events page
  if (document.querySelector('.event-filter')) {
    setupEventFilters();
  }
});
