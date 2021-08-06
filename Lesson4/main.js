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

// Задание 3

let str = "Как однажды Жак звонарь сломал фонарь головой";
let mass = [];
mass = str.split([" "]);
mass = mass[0] + " " + mass[2] + " " + mass[3] + " " + mass[1] + " " + mass[4] + " " + mass[6] + " " + mass[5];
alert(`"${mass}"`);
