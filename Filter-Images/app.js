// Get Elements from DOM
const btns = document.querySelectorAll(".buttons button");
const imgs = document.querySelectorAll(".images img");

// Add event listeners for buttons
btns.forEach((btn) => {
  btn.addEventListener("click", filterImg);
});

// Set active button on click
function setActiveBtn(e) {
  // Remove active class from all buttons
  btns.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });

  // Add active class to the clicked button
  e.target.classList.add("btn-clicked");
}

// Filter images
function filterImg(e) {
  // Run the active button function
  setActiveBtn(e);

  // Get button type data
  const btnType = parseInt(e.target.dataset.btn);

  imgs.forEach((img) => {
    // Get image type data
    const imgType = parseInt(img.dataset.img);

    if (btnType === 0) {
      // If 'All' button is clicked (assuming button type 0 means 'All')
      img.classList.remove("img-shrink");
      img.classList.add("img-expand");
    } else {
      // If a specific button is clicked
      if (imgType === btnType) {
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");
      } else {
        img.classList.remove("img-expand");
        img.classList.add("img-shrink");
      }
    }
  });
}
