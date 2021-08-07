// Задание 1

// let a = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] >= 1) {
//         sum += +a[i];
//     }
// }
// alert(`Сумма всех чисел : ${sum}`);

// Задание 2

// let a = ["AngularJS", "jQuery"];
// a.unshift("Backbone.js");
// a.push("ReactJS", "Vue.js");
// a.splice(1, 0, "CommonJS");
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === "jQuery") {
//         alert(`Это здесь лишнее "${a[i]}"`);
//         a.splice([i], 1);
//         console.log(a);
//     }
// }

// Задание 3 (вариант 1)

// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let mass = [];
// mass = str.split([" "]);

// mass[1] = mass.splice(4, 0, mass[1]);
// mass.splice(1, 1);
// mass[5] = mass.splice(7, 0, mass[5]);
// mass.splice(5, 1);

// let newStr = mass.join(" ");
// alert(`"${newStr}"`);

// Задание 3 (вариант 2) - такой вариант так же работает или есть отличаи?

// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let mass = [];
// mass = str.split([" "]);
// mass = mass[0] + " " + mass[2] + " " + mass[3] + " " + mass[1] + " " + mass[4] + " " + mass[6] + " " + mass[5];
// let newStr = mass.toString();
// console.log(`"${newStr}"`);

// Задание 4

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 22,
//     work: true,
// };
// let checkProperties = prompt("Напишите свойство для проверки:");

// if (checkProperties in person) {
//     alert(checkProperties);
// } else {
//     person[checkProperties] = prompt("Добавим свойство: " + checkProperties + " Введите значение этого свойства:");
// }

// Задание 5

// let phone = {};
// let person = {};

// phone.brand = prompt(" Введите бренд телефона", "iPhone");
// phone.model = prompt(" Введите модель телефона", 8);
// phone.color = prompt(" Введите цвет телефона", "black");
// person = { ...phone };

// console.log(person);

// Задание 6
