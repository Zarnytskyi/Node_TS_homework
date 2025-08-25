// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
function greet(name) {
    return "Hi, ".concat(name);
}
;
console.log(greet('Alex'));
;
function showInfo(person) {
    console.log("Name:".concat(person.name));
    console.log("Age:".concat(person.age));
    console.log("City:".concat(person.city));
}
;
var Alex = {
    name: 'Alexandr',
    age: 27,
    city: 'Chicago',
};
showInfo(Alex);
// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
function squareNumber(a) {
    return a * a;
}
console.log(squareNumber(5));
// Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.
function isEven(a) {
    return a % 2 === 0 ? true : false;
}
console.log(isEven(11));
function isEven2(a) {
    return a % 2 === 0;
}
console.log(isEven2(10));
;
function showInfoStudent(person) {
    console.log("Name:".concat(person.name));
    console.log("Grade:".concat(person.grade));
}
;
var student1 = {
    name: 'Alexandr',
    grade: 9,
};
var student2 = {
    name: 'Alexandr',
    grade: 10,
};
showInfoStudent(student1);
showInfoStudent(student2);
// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
function logMessage(message) {
    console.log(message);
}
logMessage("Привет, мир!");
