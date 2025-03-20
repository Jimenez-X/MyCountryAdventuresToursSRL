let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.carousel-slide img').length;
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds