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
    
    //убрала цикл -- вешаю обработчик только на добавляемый элемент
    tasksList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('task__remove')) {
            target.closest('.task').remove();
        }
    });
});