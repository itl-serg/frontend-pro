const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = document.getElementById("score");
let start = false;

let n = 6; //скорость в пикселях
let x = canvas.width - Math.floor(Math.random() * canvas.width - 20);
let y = 0;

function createSquare(x, y) {
    ctx.fillRect(x, y, 20, 20);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createSquare(x, y);
    moveDownSquare();
    requestAnimationFrame(animate);
}

function getSpeedMove() {}

function getRandomColor() {
    let colors = ["red", "orange", "grey", "green", "blue", "violet"];
    let index = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[index];
}
function moveDownSquare() {
    if (y < canvas.width - 20) {
        y += n;
    }
}

startBtn.onclick = () => {
    if (start === false) {
        start === true;
        score = 0;
        animate();
    }
};
stopBtn.onclick = () => {
    start = false;
};

getRandomColor();

// document.body.onload = animate;
