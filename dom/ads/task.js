const rotatorCase = document.querySelectorAll('.rotator__case');
let count = 0;

function removeActive() {
    rotatorCase.forEach((elem) => {
        elem.classList.remove('rotator__case_active');
    });
}

const rotation = function () {
    removeActive();
    rotatorCase.forEach(function(elem, index) {
        elem.classList.toggle('rotator__case_active', count === index);
    });
    count++;
    if (count >= rotatorCase.length) {
       count = 0;
    }
}

setInterval(rotation, 1000);