const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
    if (curSlide < 2) {
        curSlide++;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    if (curSlide > 0) { 
        curSlide--; 
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});