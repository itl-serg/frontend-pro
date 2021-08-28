// Методы объектов и контекст исполнения функции

// Задание 1

// •	Создайте объект calculator с методами:
// •	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// •	sum() возвращает сумму этих двух значений
// •	multi() возвращает произведение этих двух значений
// •	diff() возвращает разницу
// •	div() возвращает частное

let calculator = {
    x: prompt("Значания x?"),
    y: prompt("Значания y?"),

    read: function () {
        alert(this.x + " " + this.y);
    },
    sum: function () {
        return +this.x + +this.y;
    },
    multi: function () {
        return this.x * this.y;
    },
    diff: function () {
        return this.x - this.y;
    },
    div: function () {
        return this.x / this.y;
    },
};

calculator.read();

alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

// Задание 2

// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

let coffeeMachine = {
    delay: 3000,
    message: "Your coffee is ready!",
    start: function () {
        setTimeout(() => alert(this.message), this.delay);
    },
};
coffeeMachine.start();

// Задание 3

// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

let current = {
    counter: 0,
    inc: function () {
        this.counter++;
        return this;
    },
    dec: function () {
        this.counter--;
        return this;
    },
    getValue: function () {
        alert(this.counter);
        return this;
    },
};
current.inc().inc().dec().inc().dec().getValue();

// Задание 4

// Есть следующий код:

let country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
        name: "Kyiv",
        population: 2907817,
        area: 847.66,
    },
};
function format(start, end) {
    console.log(start + this.name + end);
}
// // Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
format.call(country, "", ""); // Ukraine
format.apply(country, ["", ""]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply("", ["", ""]); // undefined

// // Задание 5

// // 	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// // Реализуйте решение текущего задания используя метод bind().

let user = {
    name: "John",
    delay: 1000,
    format: function () {
        setTimeout(
            function (start, end) {
                console.log(start + this.name + " " + end);
            }.bind(this),
            this.delay,
            "",
            "Doe"
        );
    },
};
user.format();

// Задание 6
// Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

let concat = function (a, b) {
    console.log(a + " " + b);
};
let hello = concat.bind(null, "Hello");

hello("World"); // Hello World
hello("John"); // Hello John

// Задание 6

// 	Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

// используя цикл

function cube(x) {
    let result = 1;
    for (let i = 0; i < 3; i++) {
        result *= x;
    }
    return result;
}
console.log(cube(2)); // 8

// используя рекурсию

function cube(x, n = 1) {
    if (n !== 3) {
        return x * cube(x, n + 1);
    }
    return x;
}
console.log(cube(2)); // 8

// Задание 7
// 	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

function sum(...arg) {
    if (arg.length === 0) return 0;
    return arg[0] + sum(...arg.slice(1));
}
console.log(sum(1, 2, 3, 4, 5)); // 15
