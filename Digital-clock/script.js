function clock() {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();

  let am = "AM";

  if (hh >= 12) {
    am = "PM";
  }

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  console.log(hh);

  hour.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;
  ampm.innerText = am;
}
setInterval(clock, 1000);

// Blinking Light

function blink() {
  const redLight = document.querySelector(".red-light");
  redLight.classList.add("blink");
}
setInterval(blink, 1000);
