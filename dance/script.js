// JavaScript to toggle the mobile menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li');

// Toggle the active class to show/hide the menu and change the burger icon
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close the menu when a link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active'); // Reset burger icon
    });
});


    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    
    let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 5000; // Change slide every 5 seconds

// Auto-slide functionality
let autoSlideInterval = setInterval(() => {
  moveToNextSlide();
}, intervalTime);

document.querySelector('.next-btn').addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Clear the auto-slide timer on manual click
  moveToNextSlide();
  autoSlideInterval = setInterval(() => {
    moveToNextSlide();
  }, intervalTime); // Restart the auto-slide timer
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Clear the auto-slide timer on manual click
  moveToPrevSlide();
  autoSlideInterval = setInterval(() => {
    moveToNextSlide();
  }, intervalTime); // Restart the auto-slide timer
});

function updateSlideClasses() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  document.querySelector('.slider-wrapper').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlideClasses();
}

function moveToPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlideClasses();
}

updateSlideClasses(); // Initialize the first active slide
