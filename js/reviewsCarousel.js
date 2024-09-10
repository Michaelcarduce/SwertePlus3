
    // const carousel = document.querySelector('.carousel');
    // const reviews = document.querySelectorAll('.review');
    // const prevBtn = document.querySelector('.prev-btn');
    // const nextBtn = document.querySelector('.next-btn');

    // let currentIndex = 0;

    // function updateCarousel() {
    // const reviewWidth = reviews[currentIndex].offsetWidth;
    // carousel.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
    // }

    // nextBtn.addEventListener('click', () => {
    // currentIndex = (currentIndex + 1) % reviews.length;
    // updateCarousel();
    // });

    // prevBtn.addEventListener('click', () => {
    // currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    // updateCarousel();
    // });

    // // Auto-slide every 5 seconds
    // setInterval(() => {
    // currentIndex = (currentIndex + 1) % reviews.length;
    // updateCarousel();
    // }, 5000);

    // // Ensure carousel size is correct on resize
    // window.addEventListener('resize', updateCarousel);



document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('.carousel');
const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let isSwiping = false;
const intervalTime = 6000; // Time between automatic slides (3 seconds)

// Function to show the next review
function showNextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    carousel.style.transform = `translateX(-${currentIndex * 140}%)`;
}

// Function to show the previous review
function showPrevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    carousel.style.transform = `translateX(-${currentIndex * 140}%)`;
}

// Automatic swipe
let autoSlide = setInterval(showNextReview, intervalTime);

// Next button event
nextBtn.addEventListener('click', () => {
    showNextReview();
    clearInterval(autoSlide);  // Reset the auto slide after a manual action
    autoSlide = setInterval(showNextReview, intervalTime);
});

// Previous button event
prevBtn.addEventListener('click', () => {
    showPrevReview();
    clearInterval(autoSlide);  // Reset the auto slide after a manual action
    autoSlide = setInterval(showNextReview, intervalTime);
});

// Swipe functionality
let startX, endX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const threshold = 50; // Minimum swipe distance
    if (startX - endX > threshold) {
        showNextReview();
    } else if (endX - startX > threshold) {
        showPrevReview();
    }
    isSwiping = false;

    // Reset the auto slide after a manual swipe
    clearInterval(autoSlide);
    autoSlide = setInterval(showNextReview, intervalTime);
});
});