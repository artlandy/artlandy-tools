<<<<<<< HEAD
/* ===========================
   Artlandy Resin Timer
=========================== */

const finishSound = new Audio("sound/timer.mp3");
finishSound.volume = 0.4;

let timer = null;
let remainingSeconds = 30 * 60;
let isRunning = false;

// ===========================
// 表示更新
// ===========================

function updateDisplay() {

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("timer-display").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

// ===========================
// スタート
// ===========================

function startTimer() {

    if (isRunning) return;

    isRunning = true;

    const startBtn = document.getElementById("startBtn");
    startBtn.textContent = "⏱ 計測中…";
    startBtn.disabled = true;

    document.getElementById("timer-select").disabled = true;

    timer = setInterval(() => {

        if (remainingSeconds > 0) {

            remainingSeconds--;
            updateDisplay();

        } else {

            clearInterval(timer);

            isRunning = false;

            document.getElementById("timer-select").disabled = false;

            finishSound.play();

            document.getElementById("timer-finish").style.display = "flex";

        }

    }, 1000);

}

// ===========================
// 一時停止
// ===========================

function pauseTimer() {

    clearInterval(timer);

    isRunning = false;

    document.getElementById("timer-select").disabled = false;

    const startBtn = document.getElementById("startBtn");

    startBtn.textContent = "▶ 再開";

    startBtn.disabled = false;

}

// ===========================
// リセット
// ===========================

function resetTimer() {

    clearInterval(timer);

    isRunning = false;

    const minutes = Number(document.getElementById("timer-select").value);

    remainingSeconds = minutes * 60;

    document.getElementById("timer-select").disabled = false;

    const startBtn = document.getElementById("startBtn");

    startBtn.textContent = "▶ スタート";

    startBtn.disabled = false;

    updateDisplay();

}

// ===========================
// 時間変更
// ===========================

document.getElementById("timer-select").addEventListener("change", function () {

    if (isRunning) return;

    remainingSeconds = Number(this.value) * 60;

    updateDisplay();

});

// ===========================
// ボタン
// ===========================

document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("pauseBtn").addEventListener("click", pauseTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);

// ===========================
// 完了ポップアップ
// ===========================

function closeFinish() {

    document.getElementById("timer-finish").style.display = "none";

    resetTimer();

}

// ===========================
// 初期表示
// ===========================

=======
/* ===========================
   Artlandy Resin Timer
=========================== */

const finishSound = new Audio("sound/timer.mp3");
finishSound.volume = 0.4;

let timer = null;
let remainingSeconds = 30 * 60;
let isRunning = false;

// ===========================
// 表示更新
// ===========================

function updateDisplay() {

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("timer-display").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

// ===========================
// スタート
// ===========================

function startTimer() {

    if (isRunning) return;

    isRunning = true;

    const startBtn = document.getElementById("startBtn");
    startBtn.textContent = "⏱ 計測中…";
    startBtn.disabled = true;

    document.getElementById("timer-select").disabled = true;

    timer = setInterval(() => {

        if (remainingSeconds > 0) {

            remainingSeconds--;
            updateDisplay();

        } else {

            clearInterval(timer);

            isRunning = false;

            document.getElementById("timer-select").disabled = false;

            finishSound.play();

            document.getElementById("timer-finish").style.display = "flex";

        }

    }, 1000);

}

// ===========================
// 一時停止
// ===========================

function pauseTimer() {

    clearInterval(timer);

    isRunning = false;

    document.getElementById("timer-select").disabled = false;

    const startBtn = document.getElementById("startBtn");

    startBtn.textContent = "▶ 再開";

    startBtn.disabled = false;

}

// ===========================
// リセット
// ===========================

function resetTimer() {

    clearInterval(timer);

    isRunning = false;

    const minutes = Number(document.getElementById("timer-select").value);

    remainingSeconds = minutes * 60;

    document.getElementById("timer-select").disabled = false;

    const startBtn = document.getElementById("startBtn");

    startBtn.textContent = "▶ スタート";

    startBtn.disabled = false;

    updateDisplay();

}

// ===========================
// 時間変更
// ===========================

document.getElementById("timer-select").addEventListener("change", function () {

    if (isRunning) return;

    remainingSeconds = Number(this.value) * 60;

    updateDisplay();

});

// ===========================
// ボタン
// ===========================

document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("pauseBtn").addEventListener("click", pauseTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);

// ===========================
// 完了ポップアップ
// ===========================

function closeFinish() {

    document.getElementById("timer-finish").style.display = "none";

    resetTimer();

}

// ===========================
// 初期表示
// ===========================

>>>>>>> ce769e5cb63be66ae9cf4d95940a68826887b5c6
updateDisplay();