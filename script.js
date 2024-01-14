function updateClocks() {
    const timeZones = [
        { city: "New York", zone: "America/New_York" },
        { city: "London", zone: "Europe/London" },
        { city: "Tokyo", zone: "Asia/Tokyo" },
        { city: "Sydney", zone: "Australia/Sydney" },
        { city: "UTC" }
    ];
    const clocksContainer = document.getElementById('clocks');
    let clocksHtml = ''; // Store clocks HTML

    timeZones.forEach(({ city, zone }) => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: zone || city });
        clocksHtml += `
            <div class="clock">
                <div class="clock-city">${city}</div>
                <div class="clock-time">${time}</div>
            </div>`;
    });

    clocksContainer.innerHTML = clocksHtml; // Set clocks HTML
}

document.addEventListener('DOMContentLoaded', function() {
    updateClocks();
    setInterval(updateClocks, 1000); // Update clocks every second

    // Other JavaScript code...
});
