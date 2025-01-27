/*
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;
*/

document.addEventListener('DOMContentLoaded', function() {
  const blockquote = document.querySelector('.imgur-embed-pub');

  // Bloqueia apenas os links de redirecionamento
  if (blockquote) {
    blockquote.querySelectorAll('a[href^="//imgur.com"]').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
  }
  
/*
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.imgur-embed-pub a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('//imgur.com')) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  });
});
*/

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
