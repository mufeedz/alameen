/**
 * Enhanced event display functionality for Al-Ameen School website
 * This file contains the code to render event cards correctly
 */

// Generate HTML for events list
function generateEventsHTML(events) {
  return events.map(event => {
    // Fix for Annex Campus events date display issue
    let displayDate = { day: 'TBD', month: '' };
    
    if (event.date) {
      try {
        const eventDate = new Date(event.date);
        if (!isNaN(eventDate.getTime())) {
          displayDate = {
            day: eventDate.getDate(),
            month: eventDate.toLocaleString('en-US', {month: 'short'})
          };
        }
      } catch (e) {
        console.error('Error parsing date:', e);
      }
    }
      return `
    <div class="event-card mb-3 bg-white shadow-sm rounded p-3" data-campus="${event.campus}">
      <div class="row g-0 align-items-center">
        <div class="col-3 col-md-2 text-center">
          <div class="event-date bg-${event.campus === 'main' ? 'primary-theme' : 'emerald'} text-white rounded p-2">
            <span class="d-block fs-4 fw-bold text-white">${displayDate.day}</span>
            <span class="text-white">${displayDate.month}</span>
          </div>
        </div>
        <div class="col-9 col-md-10">
          <div class="ps-3">
            <h4 class="h5 mb-1">
              ${event.title}
            </h4>
            <p class="small text-muted mb-1"><i class="bi bi-clock me-1"></i> ${event.time}</p>
            <p class="small mb-0">${event.description}</p>
            <div class="d-flex justify-content-end mt-2">
              <button class="btn btn-sm btn--${event.campus === 'main' ? 'primary' : 'accent'}" data-bs-toggle="modal" data-bs-target="#eventModal${event.id}">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}).join('');
}

// Fix for past events display
function generatePastEventHTML(events) {
  return events.map((event, index) => `
    <div class="col-md-4">
      <div class="card h-100">
        <img src="assets/images/slider-${index+1}.png" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="small text-muted mb-2"><i class="bi bi-calendar3 me-1"></i> ${formatDateLong(event.date)}</p>
          <p class="card-text">${event.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Helper function to format dates in long format
function formatDateLong(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Make these functions globally available
window.generateEventsHTML = generateEventsHTML;
window.generatePastEventHTML = generatePastEventHTML;
window.formatDateLong = formatDateLong;
