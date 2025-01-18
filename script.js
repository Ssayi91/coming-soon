// Countdown Timer
const launchDate = new Date("2025-02-01T00:00:00").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 120));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown-timer").textContent = "We're Live!";
  }
}, 1000);

// Subscribe Button
document.getElementById("subscribe-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("subscribe-message");

  if (email) {
    message.textContent = "Thank you for subscribing!";
    message.style.color = "#00ff00";
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "#ff0000";
  }
});
