const input = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
        return;
    }
    
    tasksList.insertAdjacentHTML('beforeend', 
    `<div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);

    input.value = '';
    
    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    taskRemove.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            elem.closest('.task').remove();
        });
    });
});