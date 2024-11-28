window.onload = () => {
  addColor();
};

for (let i = 0; i < 12; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.setAttribute("title", "Click to copy");
  let cont = document.querySelector(".container");
  cont.appendChild(box);
}

const btn = document.querySelector(".btn");

const randomColorBlock = document.querySelectorAll(".box");

function randomColorHexCode() {
  let chars = "0123456789abcdef";
  let colorLength = 6;
  let color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return `#${color}`;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    let newColor = randomColorHexCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;

    e.addEventListener("click", () => {
      copyToClipboard(newColor);
    });
  });
}

// Copy color to clipboard
function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  showTooltip("Copied!", event.clientX, event.clientY);
}

// Show tooltip message
function showTooltip(message, x, y) {
  const tooltip = document.createElement("span");
  tooltip.classList.add("tooltip");
  tooltip.textContent = message;
  tooltip.style.position = "absolute";
  tooltip.style.top = y + "px";
  tooltip.style.left = x + "px";
  document.body.appendChild(tooltip);

  // Remove tooltip after 1 seconds
  setTimeout(() => {
    tooltip.remove();
  }, 1000);
}
