let input = document.querySelector("input");
let colorCode = document.querySelector("#color-code");

input.addEventListener("input", () => {
  let inputVal = input.value;
  colorCode.innerText = `Code : ${inputVal}`;

  document.body.style.backgroundColor = inputVal;
});
