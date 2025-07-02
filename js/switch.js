let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.slider a');

// код для галереи
for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.slider .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
};