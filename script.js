const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const miraDay = "25 Dec 2023";

function countdown() {
  const miraDate = new Date(miraDay);
  const currentDate = new Date();
  const totalSeconds = (miraDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) {
    time=`0${time}`
  } 
  return time;
}

countdown();

setInterval(countdown, 1000);