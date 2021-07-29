// Задание 1
alert(
    "Задание #1 (Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.)"
);

let a = 2;
let b = a * 3;
let c = a + b;
alert("Данные в консоле");
console.log(a, b, c);

// Задание 2
alert(
    "Задание #2 (Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up John Doe”.)"
);

let firstName = prompt("Имя?", "John");
let lastName = prompt("Фамилия?", "Doe");
alert(`"What’s up ${firstName + " " + lastName}"`);
console.log(`"What’s up ${firstName + " " + lastName}"`);

// //Задание 3
alert(
    "Задание #3 (Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.)"
);

let x = prompt("Введите число X =", 12);
let y = prompt("Введите число Y =", 4);
console.log(x, y);

let multiplication = x * y;
alert(`Произведение ${multiplication}`);
console.log(`x * y = ${multiplication}`);

let division = x / y;
alert(`Частное ${division}`);
console.log(`x / y = ${division}`);

let subtraction = x - y;
alert(`Разность  ${subtraction}`);
console.log(`x - y = ${subtraction}`);

let addition = Number(x) + Number(y);
alert(`Сумма  ${addition}`);
console.log(`x + y = ${addition}`);

//Задание 4
alert(
    "Задание #4 (Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).)"
);

let numberWeeks = prompt("Введите количество недель", 4);
let numberDays = prompt("Введите количество дней", 5);
let numberHours = prompt("Введите количество часов", 8);
let wagesPerHour = prompt("Введите рейт за час", 21);
let wage = numberWeeks * numberDays * numberHours * wagesPerHour;
alert(`з/п за июль  ${wage} $`);
console.log(`з/п за июль  ${wage} $`);

//Задание 5
alert(
    "Задание #5 (Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.)"
);

let oddNumber = prompt("Введите число", 5);
let checkNumber = oddNumber % 2;
if (checkNumber == 0) {
    alert("Четное");
} else {
    console.log(oddNumber + " = " + "Нечетное");
}
if (checkNumber == 1) {
    alert("Нечетное");
} else {
    console.log(oddNumber + " = " + "Четное");
}

//Задание 6
alert("Задание #6 (Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.)");

let meaning = prompt("Введите значение", "Тут может быть число");
if (meaning >= 0) {
    alert("Вы ввели число");
    console.log(`Введенное значение "${meaning}" является числом`);
} else {
    alert("Вы ввели текст");
    console.log(`Введенное значение "${meaning}" является текстом`);
}

//Задание 7
alert(
    "Задание #7 (Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.)"
);

let randomNumber = Math.random();
let enteredNumber = prompt("Введите число", 55);
let roundedNumber = Math.round(randomNumber * 100);
if (roundedNumber > enteredNumber) {
    alert(roundedNumber + ">" + enteredNumber);
    console.log(roundedNumber + ">" + enteredNumber);
} else {
    if (roundedNumber == enteredNumber) {
        alert(roundedNumber + "=" + enteredNumber);
        console.log(roundedNumber + "=" + enteredNumber);
    }
}
if (roundedNumber < enteredNumber) {
    alert(roundedNumber + "<" + enteredNumber);
    console.log(roundedNumber + "<" + enteredNumber);
}

//Задание 8
alert(
    "Задание #8 (Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.)"
);

let str = prompt("Мне нравится изучать Front-end", "Мне нравится изучать Front-end");
let whatStudy = prompt("Что вам нравится изучать?", "JS");
let studyMatch = str.slice(21, 30);
let wordMatches = studyMatch.includes(whatStudy);
let substring = str.slice(0, 21);
let result;
if (wordMatches == true) {
    alert("Нашли савпадение");
} else {
    result = substring + whatStudy;
    alert(result);
    console.log(result);
}
