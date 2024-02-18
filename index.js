// Set the target date and time for the countdown
const targetDate = new Date("2024-05-15 11:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = targetDate - now;

  // Check if the countdown has ended
  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "Countdown Finished!";
    return;
  }

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the HTML element with the id "countdown"
//   document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

}

