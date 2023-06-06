const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

if (!getCookie('modalClosed')) {
    modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
    setCookie('modalClosed', 'true');
    modal.classList.remove('modal_active');
});

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(el => el.startsWith(name + '='));
}







 