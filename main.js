const moviesList = document.querySelector('.movies__list');

// Function para fazer a rolagem infinita
function scrollMovies() {
    const firstItem = moviesList.firstElementChild;
    moviesList.appendChild(firstItem.cloneNode(true));
    moviesList.removeChild(firstItem);
}

// Aqui você define o tempo em q vai ficar passando a rolagem. Coloquei 1 segundo por hora pra você ter uma visão melhor
let autoScrollInterval = setInterval(scrollMovies, 1000);


// Aqui ja vamos trabalhar com todas as sections series
const seriesSections = document.querySelectorAll('.series');


function scrollSeries() {
    seriesSections.forEach(section => {
        const seriesList = section.querySelector('.series__list');
        const firstItem = seriesList.firstElementChild;
        seriesList.appendChild(firstItem.cloneNode(true));
        seriesList.removeChild(firstItem);
    });
}

let autoScrollIntervalSeries = setInterval(scrollSeries, 1000);

