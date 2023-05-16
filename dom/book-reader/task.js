const book = document.querySelector('.book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

function removeActive() {
    fontSize.forEach((elem) => {
        elem.classList.remove('font-size_active');
    });
}


fontSize.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault()
        removeActive();
        elem.classList.add('font-size_active');
        book.classList.remove('book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${elem.dataset.size}`);
    });
});






