function toggleImage() {
    const poster = document.querySelector('.poster-img');
    const rules = document.querySelector('.rules-img');

    if (poster.style.display === 'none') {
        poster.style.display = 'block';
        rules.style.display = 'none';
    } else {
        poster.style.display = 'none';
        rules.style.display = 'block';
    }
}
const countdownDate = new Date("2025-03-07T09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Event has started!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(3, '0') + "<div>Day(s)</div>";
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0') + "<div>Hour(s)</div>";
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0') + "<div>Minute(s)</div>";
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0') + "<div>Second(s)</div>";
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();