function updateClocks() {
    const timeZones = [
        { city: "New York", zone: "America/New_York" },
        { city: "London", zone: "Europe/London" },
        { city: "Tokyo", zone: "Asia/Tokyo" },
        { city: "Sydney", zone: "Australia/Sydney" },
        { city: "Chicago", zone: "America/Chicago" },
        { city: "Tuscany", zone: "Europe/Rome" },
        { city: "Wales", zone: "Europe/London" },
        { city: "Austin", zone: "America/Chicago" },
        { city: "New Delhi", zone: "Asia/Kolkata" },
        { city: "Moscow", zone: "Europe/Moscow" },
        { city: "UTC", zone: "UTC" }
    ];
    const clocksContainer = document.getElementById('clocks');
    let clocksHtml = ''; 

    timeZones.forEach(({ city, zone }) => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: zone });
        clocksHtml += `
            <div class="clock">
                <div class="clock-city">${city}</div>
                <div class="clock-time">${time}</div>
            </div>`;
    });

    clocksContainer.innerHTML = clocksHtml;
}

document.addEventListener('DOMContentLoaded', function() {
    updateClocks();
    setInterval(updateClocks, 1000); // Update clocks every second
});
