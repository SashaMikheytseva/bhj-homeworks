const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const signIn = document.querySelector('.signin');
const id = localStorage.getItem('userId');

if (id) {
    welcomeUser(id);
}

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.response.success) {
            const userId = xhr.response.user_id;
            localStorage.setItem('userId', userId);
            welcomeUser(userId);
        } else {
            alert('Неверный логин/пароль');
        }
    }
    xhr.send(formData);
    e.preventDefault();
});


function welcomeUser(user) {
    signIn.classList.remove('signin_active');
    form.reset()
    welcome.querySelector('#user_id').textContent = user;
    welcome.classList.add('welcome_active');
}