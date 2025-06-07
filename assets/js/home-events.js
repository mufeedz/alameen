/**
 * Home page events display for Al-Ameen School website
 * Displays upcoming events on the homepage from events.json
 */

document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  
  // Load events data from JSON file
  fetch('assets/data/events.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      displayHomeEvents(data);
    })
    .catch(error => {
      console.error('Error loading events data:', error);
      document.getElementById('home-main-campus-events').innerHTML = '<div class="alert alert-danger">Failed to load events</div>';
      document.getElementById('home-annex-campus-events').innerHTML = '<div class="alert alert-danger">Failed to load events</div>';
    });
  
  function displayHomeEvents(data) {
    // Parse events and add date object for sorting
    const events = data.events.map(event => {
      return { 
        ...event, 
        dateObj: new Date(event.date)
      };
    });
    
    // Sort events by date (ascending)
    const sortedEvents = events.sort((a, b) => a.dateObj - b.dateObj);
    
    // Filter upcoming events (events with dates on or after the current date)
    const upcomingEvents = sortedEvents.filter(event => event.dateObj >= currentDate);
    
    // Filter events by campus
    const mainCampusEvents = upcomingEvents.filter(event => event.campus === 'main').slice(0, 2);
    const annexCampusEvents = upcomingEvents.filter(event => event.campus === 'annex').slice(0, 2);
    
    // Display events in their respective containers
    const mainCampusContainer = document.getElementById('home-main-campus-events');
    const annexCampusContainer = document.getElementById('home-annex-campus-events');
    
    // Generate HTML for the events
    if (mainCampusEvents.length > 0) {
      mainCampusContainer.innerHTML = generateHomeEventsHTML(mainCampusEvents);
    } else {
      mainCampusContainer.innerHTML = '<div class="no-events-message">No upcoming events scheduled</div>';
    }
    
    if (annexCampusEvents.length > 0) {
      annexCampusContainer.innerHTML = generateHomeEventsHTML(annexCampusEvents);
    } else {
      annexCampusContainer.innerHTML = '<div class="no-events-message">No upcoming events scheduled</div>';
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
