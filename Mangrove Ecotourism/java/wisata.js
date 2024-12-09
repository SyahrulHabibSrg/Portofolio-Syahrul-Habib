let currentSlide = 1;
const totalSlides = 2;

function showSlide(slideNumber) {
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`slide-${i}`).style.display = 'none';
    }
    document.getElementById(`slide-${slideNumber}`).style.display = 'flex';
}

function nextSlide() {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
}
