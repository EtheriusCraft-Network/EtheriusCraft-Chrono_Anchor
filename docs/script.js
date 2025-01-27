/*
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;
*/

document.addEventListener("DOMContentLoaded", function () {
  const blockquote = document.querySelector(".imgur-embed-pub");

  if (blockquote) {
    blockquote.querySelectorAll('a[href^="//imgur.com"]').forEach((link) => {
      link.setAttribute("href", "javascript:void(0);"); // Remove o redirecionamento mantendo somente a interação
      link.style.pointerEvents = "none"; // Desativa os eventos de clique nos links
    });
  }
});

/*
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
*/
