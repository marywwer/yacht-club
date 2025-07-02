let articleSections = document.querySelectorAll('.blog-article');

// код для подключения кнопки "Читать дальше"
for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
};