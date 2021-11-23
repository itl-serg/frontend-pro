const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let score = document.getElementById("score");
let start = false;
let speed = 4;
let x = canvas.width - Math.floor(Math.random() * canvas.width);
let y = 0;

function getRandomColor() {
    let colors = ["black", "red", "orange", "grey", "green", "blue", "violet"];
    let index = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[index];
}

function createSquare(x, y) {
    ctx.fillRect(x, y, 20, 20);
}

function moveDownSquare() {
    if (y < canvas.height) {
        y += speed;
    } else {
        x = canvas.width - Math.floor(Math.random() * canvas.width);
        y = 0;
        getRandomColor();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createSquare(x, y);
    moveDownSquare();

    // canvas.addEventListener("mousedown", (event) => { });

    requestAnimationFrame(animate);
}

startBtn.onclick = () => {
    if (start === false) {
        start = true;
    }
};
stopBtn.onclick = () => {
    start = false;
};

document.body.onload = animate;
