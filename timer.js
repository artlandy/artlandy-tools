const finishSound = new Audio("sound/timer.mp3");

finishSound.volume = 0.4;

let timer;
let remainingSeconds = 30 * 60;

function updateDisplay() {

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("timer-display").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

function startTimer() {

    clearInterval(timer);

    timer = setInterval(function () {

        if (remainingSeconds > 0) {

            remainingSeconds--;
            updateDisplay();

        } else {

    clearInterval(timer);

    finishSound.play();

    document.getElementById("timer-finish").style.display = "flex";

}

    }, 1000);

}

function pauseTimer() {

    clearInterval(timer);

}

function resetTimer() {

    clearInterval(timer);

    const minutes = Number(document.getElementById("timer-select").value);

    remainingSeconds = minutes * 60;

    updateDisplay();

}

document.getElementById("timer-select").addEventListener("change", function () {

    remainingSeconds = Number(this.value) * 60;
    updateDisplay();

});

updateDisplay();

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

function closeFinish(){

    document.getElementById("timer-finish").style.display = "none";

    resetTimer();

}
