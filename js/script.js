// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
});

// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            question.classList.remove('active');
        } else {
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.classList.remove('show');
                    q.classList.remove('active');
                }
            });
            answer.classList.add('show');
            question.classList.add('active');
        }
    });
});

// Initialize Swiper.js for Testimonials
const swiper = new Swiper('.swiper-container', {
    direction: 'rtl',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});