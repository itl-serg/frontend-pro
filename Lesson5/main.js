// Задание 1
// Напишите функцию max, которая сравнивает два числа и возвращает большее: console.log( max(0, -1) ); // 0

function max(a, b) {
    if (a < b) return b;
    else return a;
}
console.log(max(0, -1));

// Задание 2
// Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них: console.log( min(0, -1, 100, 500, 100500) ); // -1

function min() {
    let number = [];

    for (let i = 0; i < arguments.length; i++) {
        number[i] = arguments[i];
    }
    let minNum = Math.min.apply(null, number);
    return minNum;
}

console.log(min(0, -1, 100, 500, 100500));

// Задание 3
// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:

let user = [
    {
        firstName: "John",
        lastName: "Dou",
        age: 22,
    },
    {
        firstName: "David",
        lastName: "Frost",
        age: 19,
    },
    {
        firstName: "Anna",
        lastName: "Mirrey",
        age: 16,
    },
    {
        firstName: "Artur",
        lastName: "Svone",
        age: 38,
    },
    {
        firstName: "Tom",
        lastName: "Roy",
        age: 17,
    },
    {
        firstName: "Mark",
        lastName: "Vorn",
        age: 28,
    },
    {
        firstName: "Miki",
        lastName: "Viki",
        age: 22,
    },
];

// // Отфильтруйте пользователей младше 18 лет

let findYounger = user.filter((user) => user.age < 18);
console.log(findYounger);

// // Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии

user.forEach(function (item) {
    item.fullName = item.firstName + " " + item.lastName;
    console.log(user);
});

// // Сформируйте новый массив, который содержит только полное имя пользователей

let mapFullName = user.map(function (userFullName) {
    return userFullName.firstName + " " + userFullName.lastName;
});

console.log(mapFullName);

// Задание 4
// Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент

let mas = [];
let deleteNumberOne = function (mas) {
    let newMas = [];
    for (let i = 0; i < arguments.length - 1; i++) {
        newMas[i] = arguments[i + 1];
        console.log(newMas);
    }
};

deleteNumberOne("a", "b", "c", "d", "e", "f", "g", "h", "j");

// Задание 5
// Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

let mas = [];
let a = prompt("Введите число элементов, которое необходимо добавить в конец массива:");
let addNumberMas = function () {
    let newMas = [];
    for (let i = 0; i < arguments.length + 1 * a; i++) {
        newMas[i] = arguments[i];

        console.log(newMas);
    }
};

addNumberMas("a", "b", "c", "d", "e", "f", "g", "h", "j");

// Задание 6
// Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

let extend = (fullName, ...names) => {
    for (let i of names) {
        for (let key in i) fullName[key] = (fullName[key] = i[key]) ? (fullName[key] = i[key]) : fullName[key];
    }
    return fullName;
};

let source = { firstname: "Tom", age: 10 };
let s = extend(source, { firstname: "John" }, { lastname: "Doe" });
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// Задание 7
// Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате:

function setComment(date, message, author) {
    if (author == undefined) {
        author = "Anonymous";
    }
    console.log(author + " " + date);
    console.log(message);
    if (date == undefined || message == undefined) {
        alert("данные переданы некорректно");
    }
}
setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");
setComment("2016-11-02");
