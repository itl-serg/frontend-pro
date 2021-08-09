// Задание 1
// Напишите функцию max, которая сравнивает два числа и возвращает большее: console.log( max(0, -1) ); // 0

// function max(a, b) {
//     if (a < b) return b;
//     else return a;
// }
// console.log(max(0, -1));

// Задание 2
// Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них: console.log( min(0, -1, 100, 500, 100500) ); // -1

// function min() {
//     let number = [];

//     for (let i = 0; i < arguments.length; i++) {
//         number[i] = arguments[i];
//     }
//     let minNum = Math.min.apply(null, number);
//     return minNum;
// }

// console.log(min(0, -1, 100, 500, 100500));

// Задание 3
// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:

// let user = [
//     {
//         firstName: "John",
//         lastName: "Dou",
//         age: 22,
//     },
//     {
//         firstName: "David",
//         lastName: "Frost",
//         age: 19,
//     },
//     {
//         firstName: "Anna",
//         lastName: "Mirrey",
//         age: 16,
//     },
//     {
//         firstName: "Artur",
//         lastName: "Svone",
//         age: 38,
//     },
//     {
//         firstName: "Tom",
//         lastName: "Roy",
//         age: 17,
//     },
//     {
//         firstName: "Mark",
//         lastName: "Vorn",
//         age: 28,
//     },
//     {
//         firstName: "Miki",
//         lastName: "Viki",
//         age: 22,
//     },
// ];

// // Отфильтруйте пользователей младше 18 лет

// let findYounger = user.filter((user) => user.age < 18);
// console.log(findYounger);

// // Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии

// user.forEach(function (item) {
//     item.fullName = item.firstName + " " + item.lastName;
//     console.log(user);
// });

// // Сформируйте новый массив, который содержит только полное имя пользователей

// let mapFullName = user.map(function (userFullName) {
//     return userFullName.firstName + " " + userFullName.lastName;
// });

// console.log(mapFullName);

// Задание 4
