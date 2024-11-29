const form = document.querySelector("form");
const loadingMessage = document.querySelector("[data-loading-message]");
const inputs = form.querySelectorAll("input"); // Get all input elements
const textarea = form.querySelector("textarea");

// Simple validation
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if all input fields and textarea are filled
  let allFilled = true;

  // Check all inputs
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "";
    }
  });

  // Check the textarea
  if (!textarea.value.trim()) {
    allFilled = false;
    textarea.style.borderColor = "red";
  } else {
    textarea.style.borderColor = "";
  }

  if (!allFilled) {
    alert("Please fill out all fields.");
    return; // Stop form submission
  }

  loadingMessage.style.display = "inline-block";

  // Simulate form submission with a delay
  setTimeout(() => {
    loadingMessage.style.display = "none";
    alert("Form submitted successfully!");
    form.reset(); // Reset the form after submission
  }, 2000);
});

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "";
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
    }
  });
});

textarea.addEventListener("focus", () => {
  textarea.style.borderColor = "";
});

textarea.addEventListener("blur", () => {
  if (!textarea.value.trim()) {
    textarea.style.borderColor = "red";
  }
});
