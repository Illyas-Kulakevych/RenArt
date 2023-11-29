document.addEventListener('DOMContentLoaded', async function () {

  const response = await fetch('api/events.json');
  const events = await response.json();

  function displayEvents(events) {
    let eventsHtml = '';
    const eventsContainer = document.querySelector('.events__cards');
   
    for( const event of events) {
      eventsHtml += `
      <div class="event__card">
        <div class="event__card-photo">
          <img src="img/img-events/${event.image}" alt="${event.title}">
        </div>
        <div class="event__card-date">
          <p>${event.time}</p>
          <time class="uppercase" datetime="${event.datetime}">${event.fullDate}</time>
        </div>
        <div class="event__card-title">
          <h3 class="italic"><a href="#">${event.title}</a></h3>
          <p>${event.description}</p>
        </div>
      </div>
      `;
    }
      eventsContainer.innerHTML = eventsHtml;

  };

  displayEvents(events);
});

