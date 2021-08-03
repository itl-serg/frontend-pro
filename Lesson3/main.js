// Условные и логические операторы

// Задание 1.1

let x = prompt("Введите число", "");
if (x > 0) {
    alert("Вы ввели 'положительное' число");
}
if (x < 0) {
    alert("Вы ввели 'отрицательное' число");
}
if (x === 0) {
    alert("Вы ввели 'ноль'");
}

// Задание 1.2

let a = prompt("Введите число для переменной 'a'", "");
let b = prompt("Введите число для переменной 'b'", "");
let c = prompt("Введите число для переменной 'c'", "");

let min =
    a < b
        ? a < c
            ? alert(`Имя переменной a = ${a}`)
            : b < c
            ? alert(`Имя переменной b = ${b}`)
            : alert(`Имя переменной c = ${c}`)
        : b < c
        ? alert(`Имя переменной b = ${b}`)
        : alert(`Имя переменной c = ${c}`);

// Задание 1.3

let iHave = prompt("Сколько у меня в кармане денег?", "");
let atMyFriend = prompt("Сколько у моего друга в кармане денег?", "");
let whatAreWeDoing = iHave + atMyFriend > 1000 ? alert("Едем на Майорку") : alert("Пьем пиво");

// Задание 1.4

let age = prompt("Возраст человека?", "");
20 <= age && age < 27 ? alert("Выслать повестку") : false;

// Задание 1.5

let minibus = prompt("Какой номер маршрутки приехал?", "");
minibus == 7 || minibus == 225 || minibus == 255 ? alert("Еду домой") : alert("Ожидаю");

// Задание 1.6

let date = new Date();
let day = date.getDay();

let weekDay = new Array(7);
weekDay[0] = "Воскресенье";
weekDay[1] = "Понедельник";
weekDay[2] = "Вторник";
weekDay[3] = "Среда";
weekDay[4] = "Четверг";
weekDay[5] = "Пятница";
weekDay[6] = "Суббота";

day == 0 || day == 6
    ? alert(`Сегодня ${weekDay[date.getDay()]} выходной`)
    : alert(`Сегодня ${weekDay[date.getDay()]} идти на работу`);

// Задание 1.7

let x = prompt("Введите значение 'x' от -20 до 20", "");
let y = prompt("Введите значение 'y' от -20 до 20", "");

(x <= 1 && y >= 3) || (x <= 1 && y < 0) ? alert(+x + +y) : alert("Неверно");

// Задание 1.8

let x = prompt("Введите значение 'x', ''");
let y = prompt("Введите значение 'y', ''");

(x > 2 && x < 11) || (y >= 6 && y < 14) ? alert(`Переменная "x" = ${+x + 2}`) : alert(`Переменная "x" = ${+x + 5}`);

// Задание 1.9

let username = prompt("Введите свое имя", "");
username ? alert(`Здравствуйте ${username}`) : alert("Вы не ввели имя");

// Задание 1.10

let greeting = "Вы не ввели 'ru' или 'en' или 'de'";
let lang = prompt("Введите значение 'ru' или 'en' или 'de'", "");

// через if-else

if (lang == "ru") {
    greeting = "Привет";
} else {
    if (lang == "en") {
        greeting = "Good afternoon";
    } else {
        if (lang == "de") {
            greeting = "Guten Tag";
        }
    }
}
alert(greeting);

// через switch-case

switch (lang) {
    case "ru":
        greeting = "Привет";
        break;
    case "en":
        greeting = "Good afternoon";
        break;
    case "de":
        greeting = "Guten Tag";
        break;
    default:
        greeting = "Вы ничего не ввели";
}
alert(greeting);

// Задание 1.11

let month = new Date();
let timeOfTheYear = month.getMonth();

let monthYear = new Array(12);
monthYear[0] = "январь";
monthYear[1] = "февраль";
monthYear[2] = "март";
monthYear[3] = "апрель";
monthYear[4] = "май";
monthYear[5] = "июнь";
monthYear[6] = "июль";
monthYear[7] = "август";
monthYear[8] = "сентябрь";
monthYear[9] = "октябрь";
monthYear[10] = "ноябрь";
monthYear[11] = "декабрь";

if (month.getMonth() == 11 || timeOfTheYear == 0 || timeOfTheYear == 1) {
    alert(`Сейчас зима, месяц ${monthYear[month.getMonth()]}`);
}
if (month.getMonth() == 2 || timeOfTheYear == 3 || timeOfTheYear == 4) {
    alert(`Сейчас осень, месяц ${monthYear[month.getMonth()]}`);
}
if (month.getMonth() == 5 || timeOfTheYear == 6 || timeOfTheYear == 7) {
    alert(`Сейчас лето, месяц ${monthYear[month.getMonth()]}`);
}
if (month.getMonth() == 8 || timeOfTheYear == 9 || timeOfTheYear == 10) {
    alert(`Сейчас лето, месяц ${monthYear[month.getMonth()]}`);
}

// Задание 1.12

let lang = "ru" || "en";
lang = prompt("Введите значение 'ru' или 'en'");
let day = new Date();
let result = day.getDay();

let weekDayRu = new Array(7);
weekDayRu[0] = "Воскресенье";
weekDayRu[1] = "Понедельник";
weekDayRu[2] = "Вторник";
weekDayRu[3] = "Среда";
weekDayRu[4] = "Четверг";
weekDayRu[5] = "Пятница";
weekDayRu[6] = "Суббота";

let weekDayEn = new Array(7);
weekDayEn[0] = "Sunday";
weekDayEn[1] = "Monday";
weekDayEn[2] = "Tuesday";
weekDayEn[3] = "Wednesday";
weekDayEn[4] = "Thursday";
weekDayEn[5] = "Friday";
weekDayEn[6] = "Saturday";

if (lang == "ru") {
    alert(weekDayRu[day.getDay()]);
} else {
}
if (lang == "en") {
    alert(weekDayEn[day.getDay()]);
}

// Циклы

// Задание 2.1

let str = "";
for (let i = 0; i < 5; i++) {
    str = str + ".#";
}
alert(str);
console.log(str);

// Задание 2.2

for (let y = 1; y <= 10; y++) {
    if (y % 2 == true) continue;
    let x = y * y;
    alert(x);
}

// Задание 2.3

let username = prompt("Введите имя");

do {
    console.log(`Happy birthday to you Happy birthday to you Happy birthday dear "${username}" Happy birthday to you`);
} while (username == true);

// Задание 2.4

let x;
do {
    x = confirm("Прерывается при нажатии на Ok");
} while (x === false);

// Задание 2.5

let rdmNumber = prompt("Введите любое число");
let summ = 0;
for (let i = 0; i <= rdmNumber; i++) {
    if (i % 2 != 1) continue;
    summ += i;
}
console.log(summ);

// Задание 2.6

let i = 0;
let n;
while (true) {
    n = Math.random();
    if (n > 0.9) {
        break;
    } else {
        i++;
    }
}
console.log(`Количество циклов: ${i}, Значение: ${n}`);

// Задание 2.7

for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
        let result = k * i;
        console.log(`${i} x ${k} = ${result}`);
    }
}

// Задание 2.8 (Нашел похожий вариант через гугл, сам не смог сделать)

let fib;
let n1 = 1;
let n2 = 0;
for (let i = 0; i <= 10; i++) {
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
    console.log(fib);
}

// Задание 2.9

let summ = 0;
let average = 0;
for (let i = 1; true; i++) {
    let rdmNumber = prompt("Введите число:");
    if (rdmNumber) {
        summ += +rdmNumber;
        average = summ / i;
        console.log(`Kоличество введенных чисел = ${i} / Общая сумма = ${summ} / Среднее арифметическое = ${average}`);
        continue;
    } else {
        break;
    }
}

// Задание 2.10 (не работает)

let password = 123;
outer: for (let i = 0; true; i++) {
    let enteredPassword = prompt("Введите пароль:");
    if (enteredPassword) {
        enteredPassword == +password;
        alert('"Вы успешно авторизованы"');
        break;
    }
    if (enteredPassword) {
        enteredPassword != +password;
        continue;
    } else {
        confirm('"Вы уверенны?"');

        if (true) {
            alert('"Вы отменили авторизацию"');
            break;
        } else {
            continue outer;
        }
    }
}

// Задание 2.11

let Fizz = "Fizz";
let Buzz = "Buzz";

for (let i = 1; i <= 50; i++) {
    let j = "";

    if (i % 3 == 0) {
        j += Fizz;
    }
    if (i % 5 == 0) {
        j += Buzz;
    }
    console.log(i, j);
}
