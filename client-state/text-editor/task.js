const editor = document.getElementById('editor');

editor.value = localStorage.getItem('text');
editor.oninput = () => {
    localStorage.setItem('text', editor.value);
}

const card = document.querySelector('.card');
const btn = document.createElement('button');
btn.textContent = 'Очистить поле';
card.appendChild(btn);

btn.onclick = () => {
    editor.value = '';
    localStorage.removeItem('text');
}