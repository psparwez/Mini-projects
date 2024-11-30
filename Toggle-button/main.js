const input = document.querySelector("input[type='checkbox']");

input.addEventListener("change", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
});
