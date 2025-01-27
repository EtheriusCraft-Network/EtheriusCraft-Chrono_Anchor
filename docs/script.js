const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;

nextButton.addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
    slides.style.transform = `translateX(${-index * 300}px)`;
  }
});

prevButton.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slides.style.transform = `translateX(${-index * 300}px)`;
  }
});
