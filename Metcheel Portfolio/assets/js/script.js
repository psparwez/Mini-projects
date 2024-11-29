document.addEventListener("DOMContentLoaded", () => {
  // change menu icon to cross icon
  const checkbox = document.getElementById("check");
  const label = document.getElementById("checkbox");
  const navlists = document.querySelectorAll(".navlists");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.innerHTML = `<i class="ri-close-large-fill"></i>`;
    } else {
      label.innerHTML = '<i class="ri-menu-line"></i>';
    }

    navlists.forEach((navlist) => {
      navlist.addEventListener("click", () => {
        checkbox.checked = false;
        label.innerHTML = '<i class="ri-menu-line"></i>';
      });
    });
  });
});
