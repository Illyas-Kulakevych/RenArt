document.addEventListener("partialsLoaded", () => {
  import("./header.js");
});

document.addEventListener('DOMContentLoaded', async function () {


  setTimeout(async function(){
    const response = await fetch('api/events.json');
    const events = await response.json();
document.addEventListener("partialsLoaded", async () => {

  const response = await fetch('api/events.json');
  const events = await response.json();

  function displayEvents(events) {
  
    const eventsContainer = document.querySelector(".events__cards");
    let eventsHtml = '';
    
   
    for (const event of events) {
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
          <h3 class="italic"><a href="permanent-exhibition.html">${event.title}</a></h3>
          <p>${event.description}</p>
        </div>
      </div>
      `;
    }
    if (eventsContainer) {
      eventsContainer.innerHTML = eventsHtml;
    } else {
      console.error('Елемент з класом .events__cards не знайдений');
    }

  };
  displayEvents(events);
 
});

