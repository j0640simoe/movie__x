const moviesList = document.querySelector('.movies__list');
const moviesListItems = document.querySelectorAll('.movies__list__item');
const totalMovies = moviesListItems.length;
const carouselSpeed = 3000; 

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalMovies;
    updateCarousel();
}
function startCarousel() {
    setInterval(nextSlide, carouselSpeed); 
}

window.addEventListener('load', startCarousel);
