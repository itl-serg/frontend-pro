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
