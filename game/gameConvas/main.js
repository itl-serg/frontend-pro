const startBtn = document.querySelector("#start");
const syopBtn = document.querySelector("#stop");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = document.getElementById("score");

let n = 4; //скорость в пикселях
let x = canvas.width - Math.floor(Math.random() * canvas.width);
let y = 0;

function getSpeedMove() {}

function getRandomColor() {
    let colors = ["red", "orange", "grey", "green", "blue", "violet"];
    let index = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[index];
    ctx.fill();
}

function createSquare(x, y) {
    ctx.fillRect(x, y, 20, 20);
}

function moveDownSquare() {
    if (y < canvas.width - 20) {
        y += n;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createSquare(x, y);
    moveDownSquare();
    requestAnimationFrame(animate);
}

startBtn.addEventListener("click", () => {
    animate();
    getRandomColor();
    getSpeedMove();
    getRandomPlace();
});

document.body.onload = animate;
