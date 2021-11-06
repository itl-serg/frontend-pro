const startBtn = document.querySelector("#start");
const screen = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const colors = ["red", "orange", "grey", "green", "blue", "violet"];

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    screen[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screen[1].classList.add("up");
        startGame();
    }
});

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("square")) {
        score++;
        event.target.remove();
        createRandomSquare();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomSquare();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add("hide");
    board.innerHTML = `<h1>Счет: <span class = "primary">${score}</span></h1>`;
}

function createRandomSquare() {
    const square = document.createElement("div");

    const size = getRandomNumber(20, 60);
    const { width } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);

    square.classList.add("square");
    square.style.width = `20px`;
    square.style.height = `20px`;
    square.style.top = `0px`;
    square.style.left = `${x}px`;

    square.style.background = getRandomColor();

    board.append(square);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
