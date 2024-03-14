document.addEventListener('DOMContentLoaded', function () {
    const movieItems = document.querySelectorAll('.movies__list__item');

    movieItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.toggle('clicked');
        });
    });
});
