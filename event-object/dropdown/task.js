const dropDown = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const dropItem = document.querySelectorAll('.dropdown__item');

dropDown.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
  dropItem.forEach((element) => {
    element.onclick = () => {
      dropDown.textContent = element.textContent;
      list.classList.remove('dropdown__list_active');
      return false;
    }
  });
});







