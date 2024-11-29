const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("input", (e) => {
    // Changed event from "keyup" to "input"
    const currentInput = input,
      nextInput = input.nextElementSibling,
      previousInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = ""; // Clear current input if more than one character is entered
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.inputType === "deleteContentBackward") {
      // Check for backspace event using inputType
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && previousInput) {
          input.setAttribute("disabled", true); // Corrected attribute setting
          currentInput.value = ""; // Clear current input
          previousInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => inputs[0].focus());
