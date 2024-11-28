// Hamburger Button
let hamburgerBtn = document.getElementById("hamburger_btn");
let navLinks = document.querySelector(".nav__links");
let navLinksAll = document.querySelectorAll(".nav__links ul li");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

function close() {
  hamburgerBtn.classList.remove("active");
  navLinks.classList.remove("active");
}
navLinksAll.forEach((li) => {
  li.addEventListener("click", close);
});
