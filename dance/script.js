document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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

    function toggleAccordion(header) {
        const accordionItem = header.parentElement;
        const content = accordionItem.querySelector('.accordion-content');
    
        // Toggle the active class on the accordion item
        accordionItem.classList.toggle('active');
    
        // Check if the accordion is active (open)
        if (accordionItem.classList.contains('active')) {
            // Expand the content by setting the height to the content's scrollHeight (dynamic height)
            content.style.height = content.scrollHeight + 'px';
    
            // Change icon to "-"
            header.querySelector('.icon').textContent = '-';
        } else {
            // Collapse the content by setting the height to 0
            content.style.height = '0';
    
            // Change icon back to "+"
            header.querySelector('.icon').textContent = '+';
        }
    };
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    document.querySelector('.next-btn').addEventListener('click', () => {
      moveToNextSlide();
    });
    
    document.querySelector('.prev-btn').addEventListener('click', () => {
      moveToPrevSlide();
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
    // slider two
    var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
      slidesPerView: 4,
      spaceBetween: 0,
      slideToClickedSlide:true,
      centeredSlides:true,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
effect: "coverflow",
      grabCursor: true,
     
      coverflowEffect: {
        rotate: -10,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
   
      loop:true,
      //   autoplay: {
      //     delay: 100000,
      //   },


        keyboard: {
        enabled: true,
        onlyInViewport: true,
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


       breakpoints: {
            
            640: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            },
            320: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            }
      }

    });