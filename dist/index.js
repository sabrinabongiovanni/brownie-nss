const menuBtn = document.querySelector(".menu-btn-container");
const hiddenMenu = document.querySelector(".hidden-menu");


window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scroll-active", window.scrollY > 50);
  menuBtn.classList.toggle("btn-scroll-active", window.scrollY > 30);
});

function transformButton(x) {
  x.classList.toggle("change");
  hiddenMenu.classList.toggle("is-hidden");
}


var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slides");

  console.log(slides);
  slides[0].style.display = "block";

  if (n > slides.length) {
    slideIndex = 1
  };

  if (n < 1) {
    slideIndex = slides.length
  };

  for (let slide of slides) {
    slide.style.display = "none";
  }

  if (slideIndex > 0) {
    slides[(slideIndex) - 1].style.display = "block";
  } else {
    slides[slideIndex].style.display = "block";
  }
}