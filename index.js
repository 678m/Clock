const sH = document.querySelector("#sH");
const mH = document.querySelector("#mH");
const hH = document.querySelector("#hH");

const deg = 6;
setInterval(() => {
  let day = new Date();
  let milliSec = day.getMilliseconds() * deg;
  let min = day.getMinutes() * deg;
    let hour = day.getHours() * 30;
  let sec = day.getSeconds() * deg + milliSec / 1000;
  sH.style.transform = `rotateZ(${sec}deg)`;
  mH.style.transform = `rotateZ(${min}deg)`;
    hH.style.transform = `rotateZ(${hour + min / 12}deg)`;
});
