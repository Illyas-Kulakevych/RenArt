const eventsContainer = document.querySelector('.events__cards');

function displayEvents(array) {
    eventsContainer.innerHTML = "";
  
    array.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event__card';
  
      eventDiv.innerHTML = `
        <div class="event__card-photo">
          <img src="img/img-events/${event.image}" alt="${event.title}">
        </div>
        <div class="event__card-date">
          <p>${event.time}</p>
          <time class="uppercase" datetime="${event.date}">${event.formattedDate}</time>
        </div>
        <div class="event__card-title">
          <h3 class="italic"><a href="#">${event.title}</a></h3>
          <p>${event.description}</p>
        </div>
      `;
  
      eventsContainer.appendChild(eventDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
  
    fetch('../api/events.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка отримання даних');
        }
        return response.json();
      })
      .then(eventData => {
        displayEvents(eventData);
      })
      .catch(error => {
        console.error('Помилка:', error.message);
      });
  });


  displayEvents(eventData);