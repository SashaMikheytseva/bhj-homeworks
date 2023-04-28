const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);
for (holeIndex = 1; holeIndex <= 9; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.onclick = function () {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert("Вы победили!");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5) {
            alert("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}