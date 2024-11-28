const form = document.querySelector("form");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("active");
      isValid = false;
    } else {
      input.classList.remove("active");
    }
  });

  if (isValid) {
    alert("Signup Successful. Please login!");
    form.submit();
  }
});
