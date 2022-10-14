const button = document.getElementById("submit");
const resultBox = document.getElementById("result");
const secondsInDay = 60 * 60 * 24;  // minute - hour - day
const secondsInHour = 60 * 60;  // minute - hour
const secondsInMinute = 60;

button.addEventListener('click', () => calculate());

function calculate() {
    const start = new Date("2022-09-01 09:30");
    const end = new Date("2022-12-18 15:20");

    let secDiff = (end.getTime() - start.getTime()) / 1000;

    const dayDiff = Math.floor(secDiff / secondsInDay);
    secDiff -= dayDiff * secondsInDay;

    const hourDiff = Math.floor(secDiff / secondsInHour);
    secDiff -= hourDiff * secondsInHour;

    const minuteDiff = Math.floor((secDiff / secondsInMinute));

    resultBox.value = `${dayDiff} діб, ${hourDiff} годин, ${minuteDiff} хвилин`;
}
