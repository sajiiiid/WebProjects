const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let ampm = "AM";

  // Convert to 12-hour format
  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;

  // Add leading zeros
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = seconds.toString().padStart(2, "0");

  // Update DOM
  hourEl.textContent = hoursStr;
  minuteEl.textContent = minutesStr;
  secondEl.textContent = secondsStr;
  ampmEl.textContent = ampm;

  // Schedule next update
  setTimeout(updateClock, 1000);
}

// Start the clock
updateClock();