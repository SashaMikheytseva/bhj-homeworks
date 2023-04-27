const elementTimer = document.getElementById("timer");
function countDown() {
  if (elementTimer.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  } else {
    elementTimer.textContent--;
  }
}

const timerId = setInterval(countDown, 1000);