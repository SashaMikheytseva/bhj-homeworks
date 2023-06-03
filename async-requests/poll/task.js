const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const pollTitle = document.querySelector('.poll__title');
        pollTitle.textContent = xhr.response.data.title;
        const pollAnswerText = xhr.response.data.answers;
        pollAnswerText.forEach((answer) => {
            pollAnswers.insertAdjacentHTML('beforeend', 
            `<button class="poll__answer">
                ${answer}
            </button>`);
        });

        const btnAnswer = document.querySelectorAll('.poll__answer');
        btnAnswer.forEach((btn) => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});