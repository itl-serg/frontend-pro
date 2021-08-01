//Условные и логические операторы

//Задание 1.1

// let x = prompt("Введите число");
// if (x > 0) {
//     console.log("Вы ввели положительное число");
// }
// if (x < 0) {
//     console.log("Вы ввели отрицательное число");
// }
// if (x === 0) {
//     console.log("Вы ввели 'ноль'");
// }

//Задание 1.2

// let a = prompt("Введите число для переменной 'a'");
// let b = prompt("Введите число для переменной 'b'");
// let c = prompt("Введите число для переменной 'c");

// let min =
//     a < b
//         ? a < c
//             ? alert(`Имя переменной a = ${a}`)
//             : b < c
//             ? alert(`Имя переменной b = ${b}`)
//             : alert(`Имя переменной c = ${c}`)
//         : b < c
//         ? alert(`Имя переменной b = ${b}`)
//         : alert(`Имя переменной c = ${c}`);

//Задание 1.3

// let iHave = prompt("Сколько у меня в кармане денег?");
// let atMyFriend = prompt("Сколько у моего друга в кармане денег?");
// let whatAreWeDoing = iHave + atMyFriend > 1000 ? alert("Едем на Майорку") : alert("Пьем пиво");

//Задание 1.4

// let age = prompt("Возраст человека?");
// 20 <= age && age < 27 ? alert("Выслать повестку") : false;

//Задание 1.5

// let minibus = prompt("Какой номер маршрутки приехал?");
// minibus == 7 || minibus == 225 || minibus == 255 ? alert("Еду домой") : alert("Ожидаю");

//Задание 1.6

// let date = new Date();
// let day = date.getDay();

// let weekDay = new Array(7);
// weekDay[0] = "Воскресенье";
// weekDay[1] = "Понедельник";
// weekDay[2] = "Вторник";
// weekDay[3] = "Среда";
// weekDay[4] = "Четверг";
// weekDay[5] = "Пятница";
// weekDay[6] = "Суббота";

// day == 0 || day == 6
//     ? alert(`Сегодня ${weekDay[date.getDay()]} выходной`)
//     : alert(`Сегодня ${weekDay[date.getDay()]} идти на работу`);

//Задание 1.7

// let x = prompt("Введите значение 'x' от -20 до 20");
// let y = prompt("Введите значение 'y' от -20 до 20");

// (x <= 1 && y >= 3) || (x <= 1 && y < 0) ? alert(+x + +y) : alert("Неверно");

//Задание 1.8

// let x = prompt("Введите значение 'x'");
// let y = prompt("Введите значение 'y'");

// (x > 2 && x < 11) || (y >= 6 && y < 14) ? alert(`Переменная "x" = ${+x + 2}`) : alert(`Переменная "x" = ${+x + 5}`);

//Задание 1.9

let username = prompt("Введите свое имя");

username ? alert(`Здравствуйте ${username}`) : alert("Вы не ввели имя");
