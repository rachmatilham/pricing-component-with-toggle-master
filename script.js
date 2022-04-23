const toggleElement = document.querySelector(".toggle");
const prices = document.querySelectorAll(".price");

toggleElement.addEventListener("click", () => {
  toggleElement.firstElementChild.classList.toggle("month-selector");
  prices.forEach((e) => {
    e.classList.toggle("hidden");
  });
});
