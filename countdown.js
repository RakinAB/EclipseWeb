// countdown from the eclipse
// script.js
// Define the date and time of the next eclipse (replace with your desired date)
const nextEclipseDate = new Date('2024-04-08T08:30:00');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = nextEclipseDate - now;

    if (timeRemaining <= 0) {
        // The eclipse has already occurred or is happening now
        document.getElementById('countdown').textContent = 'Eclipse in progress!';
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown on the webpage
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
// Update the countdown every second
setInterval(updateCountdown, 1000);
