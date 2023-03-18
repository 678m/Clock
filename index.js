const sH = document.querySelector("#sH");
const mH = document.querySelector("#mH");

const deg = 6;
setInterval(() => {
  let day = new Date();
  let milliSec = day.getMilliseconds() * deg;
  let min = day.getMinutes() * deg;
  let sec = day.getSeconds() * deg + milliSec / 1000;
  sH.style.transform = `rotateZ(${sec}deg)`;
  mH.style.transform = `rotateZ(${min}deg)`;
});
