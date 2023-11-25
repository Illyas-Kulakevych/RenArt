let dest = new Date("2023-12-08 01:00:00").getTime();

function updateTimer() {
  let now = new Date().getTime();
  let diff = dest - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days}d, ${hours}hrs: ${minutes}m: ${seconds}s`;
}
updateTimer();

let x = setInterval(updateTimer, 1000);