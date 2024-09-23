document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.header__nav__slides');
    const slides = document.querySelectorAll('.header__nav-link');
    const prev = document.querySelector('.header__nav-prev');
    const next = document.querySelector('.header__nav-next');
    const slideCount = slides.length;
    let currentIndex = 0;
    let step = 0;

    const burgerButton = document.querySelector(".header__mob__burger");
    const closeButton = document.querySelector(".modal__close");
    const menu = document.querySelector(".modal");
    const page = document.querySelector(".container");

    burgerButton.addEventListener('click', () => {
        menu.style.display = "flex";
        page.style.display = "none";
        
    });

    closeButton.addEventListener('click', () => {        
        page.style.display = "block";        
        menu.style.display = "none";
    });

    function getSlideWidth() {
        const slideWidth = slides[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(slides[0]).marginRight) || 0;
        return slideWidth + gap;
    }
    
    function updateSlider() {
        container.style.transform = `translateX(-${step}px)`;

        if (currentIndex === 0) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }
    }

    next.addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            step += getSlideWidth();
        } else {
            currentIndex = 0;
            step = 0;
        }
        updateSlider();
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            step -= getSlideWidth();
        } 
        updateSlider();
    });

});
