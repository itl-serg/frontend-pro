// Методы объектов и контекст исполнения функции

// Задание 1

// •	Создайте объект calculator с методами:
// •	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// •	sum() возвращает сумму этих двух значений
// •	multi() возвращает произведение этих двух значений
// •	diff() возвращает разницу
// •	div() возвращает частное

// let calculator = {
//     x: prompt("Значания x?"),
//     y: prompt("Значания y?"),

//     read: function () {
//         alert(this.x + " " + this.y);
//     },
//     sum: function () {
//         return +this.x + +this.y;
//     },
//     multi: function () {
//         return this.x * this.y;
//     },
//     diff: function () {
//         return this.x - this.y;
//     },
//     div: function () {
//         return this.x / this.y;
//     },
// };

// calculator.read();

// alert(calculator.sum());
// alert(calculator.multi());
// alert(calculator.diff());
// alert(calculator.div());

// Задание 2

// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

// let coffeeMachine = {
//     delay: 3000,
//     message: "Your coffee is ready!",
//     start: function () {
//         setTimeout(() => alert(this.message), this.delay);
//     },
// };
// coffeeMachine.start();

// Задание 3

// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

// let current = {
//     counter: 0,
//     inc: function () {
//         this.counter++;
//         return this;
//     },
//     dec: function () {
//         this.counter--;
//         return this;
//     },
//     getValue: function () {
//         alert(this.counter);
//         return this;
//     },
// };
// current.inc().inc().dec().inc().dec().getValue();

// Задание 4

// Есть следующий код:

// let country = {
//     name: "Ukraine",
//     language: "ukrainian",
//     capital: {
//         name: "Kyiv",
//         population: 2907817,
//         area: 847.66,
//     },
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// // Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(country, "", ""); // Ukraine
// format.apply(country, ["", ""]); // [Ukraine]
// format.call(country.capital, "", ""); // Kyiv
// format.apply(country.capital, ["", ""]); // Kyiv
// format.apply("", ["", ""]); // undefined

// // Задание 5
// // 	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
    console.log(start + this.name + end);
}

let user = {
    name: "John",
};

// // Реализуйте решение текущего задания используя метод bind().
