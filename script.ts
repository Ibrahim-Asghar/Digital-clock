function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    
    document.getElementById('time')!.innerText = timeString;
}

function formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
