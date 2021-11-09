const startBtn = document.querySelector("#start");
const syopBtn = document.querySelector("#stop");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let colors = ["red", "orange", "grey", "green", "blue", "violet"];

let score = document.getElementById("score");

let n = 2;
let x = 0;
let y = 0;

function getRandomSpeed() {}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[index];
}

function draw(x, y) {
    ctx.fillRect(x, y, 20, 15);
}

function move() {
    if (y < canvas.width - 20 && x === 0) {
        y += n;
    }
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(x, y);
    move();
    getRandomSpeed();
    getRandomColor();
    requestAnimationFrame(game);
}
game();

// тут может находится ваш код

document.body.onload = animate;
