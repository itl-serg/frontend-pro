// Задача 1

document.querySelector(".mouse-pad").onmousemove = function (inside) {
    document.querySelector(".x-inside").innerHTML = inside.offsetX;
    document.querySelector(".y-inside").innerHTML = inside.offsetY;
};

document.querySelector("body").onmousemove = function (outside) {
    document.querySelector(".x-outside").innerHTML = outside.clientX;
    document.querySelector(".y-outside").innerHTML = outside.clientY;
};

// Задача 2

let start;

function startTime() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function clockStart() {
    start = setInterval(startTime, 1000);
    startTime();
}

function clockStop() {
    clearInterval(start);
}

clockStart();
