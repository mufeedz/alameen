/**
 * Home page events display for Al-Ameen School website
 * Displays upcoming events on the homepage from events.json
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set current date to start of today to compare only dates, not times
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  // Load events data from JSON file
  fetch('assets/data/events.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Events data loaded successfully:', data);
      displayHomeEvents(data);
    })
    .catch(error => {
      console.error('Error loading events data:', error);
      // More user-friendly error messages
      const errorMessage = '<div class="alert alert-warning small">Unable to load events at this time. Please check back later.</div>';
      const mainContainer = document.getElementById('home-main-campus-events');
      const annexContainer = document.getElementById('home-annex-campus-events');
      
      if (mainContainer) mainContainer.innerHTML = errorMessage;
      if (annexContainer) annexContainer.innerHTML = errorMessage;
    });
  
  function displayHomeEvents(data) {
    console.log('Displaying home events...');
    
    // Parse events and add date object for sorting
    const events = data.events.map(event => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0); // Set to start of day for proper comparison
      return { 
        ...event, 
        dateObj: eventDate
      };
    });
    
    console.log('Total events:', events.length);
    
    // Sort events by date (ascending)
    const sortedEvents = events.sort((a, b) => a.dateObj - b.dateObj);
    
    // Filter upcoming events (events with dates on or after the current date)
    const upcomingEvents = sortedEvents.filter(event => {
      const isUpcoming = event.dateObj >= currentDate;
      console.log(`Event "${event.title}" on ${event.date}: ${isUpcoming ? 'upcoming' : 'past'}`);
      return isUpcoming;
    });
    
    console.log('Upcoming events:', upcomingEvents.length);
    
    // Filter events by campus - since both campuses use the same events, 
    // we'll show the same main campus events for both sections
    const mainCampusEvents = upcomingEvents.filter(event => event.campus === 'main').slice(0, 2);
    const annexCampusEvents = upcomingEvents.filter(event => event.campus === 'main').slice(2, 4); // Show next 2 events for variety
    
    console.log('Karungalpalayam campus events:', mainCampusEvents.length);
    console.log('Ellapalayam campus events:', annexCampusEvents.length);
    
    // Display events in their respective containers
    const mainCampusContainer = document.getElementById('home-main-campus-events');
    const annexCampusContainer = document.getElementById('home-annex-campus-events');
    
    if (!mainCampusContainer || !annexCampusContainer) {
      console.error('Event containers not found in DOM');
      return;
    }
    
    // Remove loading indicators
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => el.remove());
    
    // Generate HTML for the events
    if (mainCampusEvents.length > 0) {
      const mainHTML = generateHomeEventsHTML(mainCampusEvents);
      console.log('Generated main campus HTML:', mainHTML);
      mainCampusContainer.innerHTML = mainHTML;
    } else {
      mainCampusContainer.innerHTML = '<div class="no-events-message">No upcoming events scheduled</div>';
    }
    
    if (annexCampusEvents.length > 0) {
      const annexHTML = generateHomeEventsHTML(annexCampusEvents);
      console.log('Generated annex campus HTML:', annexHTML);
      annexCampusContainer.innerHTML = annexHTML;
    } else {
      // If there aren't enough events for the second section, show a different message
      if (upcomingEvents.filter(event => event.campus === 'main').length < 3) {
        annexCampusContainer.innerHTML = '<div class="no-events-message">Check back for more upcoming events</div>';
      } else {
        annexCampusContainer.innerHTML = '<div class="no-events-message">No upcoming events scheduled</div>';
      }
    }
  }
  
  // Generate HTML specifically for home page events to match original static design
  function generateHomeEventsHTML(events) {
    return events.map(event => {
      // Format date to match original static design
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
      <div class="event-card mb-2 bg-white shadow-sm rounded p-3 hover-lift">
        <div class="row g-0 align-items-center">
          <div class="col-3 col-md-2 text-center">
            <div class="event-date bg-accent text-primary rounded p-2">
              <span class="d-block fs-4 fw-bold">${displayDate.day}</span>
              <span>${displayDate.month}</span>
            </div>
          </div>
          <div class="col-9 col-md-10">
            <div class="ps-3">
              <h4 class="h5 mb-1">${event.title}</h4>
              <p class="small text-muted mb-1"><i class="bi bi-clock me-1"></i> ${event.time}</p>
              <p class="small mb-0">${event.description}</p>
            </div>
          </div>
        </div>
      </div>
      `;
    }).join('');
  }
});
