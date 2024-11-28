console.log("Script is running");

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mm");
const sc = document.querySelector("#sc");

const deg = 6;

setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();

  let hrRotation = (hh % 12) * 30 + mm / 2; // 30 degrees per hour, 0.5 degrees per minute
  let mnRotation = mm * deg; // 6 degrees per minute
  let scRotation = ss * deg; // 6 degrees per second

  hr.style.transform = `rotateZ(${hrRotation}deg)`;
  mn.style.transform = `rotateZ(${mnRotation}deg)`;
  sc.style.transform = `rotateZ(${scRotation}deg)`;
}, 1000); // Update every second
