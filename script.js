function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = "".concat(formatTime(hours), ":").concat(formatTime(minutes), ":").concat(formatTime(seconds));
    document.getElementById('time').innerText = timeString;
}
function formatTime(time) {
    return time < 10 ? "0".concat(time) : "".concat(time);
}
// Update the clock every second
setInterval(updateClock, 1000);
// Initial update
updateClock();
