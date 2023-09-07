document.addEventListener('DOMContentLoaded', function () {
    let dateTime = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = daysOfWeek[dateTime.getDay()];

    document.getElementById("currentDayOfTheWeek").textContent = currentDay;
    document.getElementById("currentUTCTime").textContent = dateTime.toUTCString();
});
