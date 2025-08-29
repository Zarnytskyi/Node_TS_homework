// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
function greet(name: string):string{
    return `Hi, ${name}`
};
console.log(greet('Alex'));

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.
interface Person {
    name:string;
    age:number;
    city:string;
};
function showInfo (person:Person):void{
    console.log(`Name:${person.name}`);
    console.log(`Age:${person.age}`);
    console.log(`City:${person.city}`);
};

const Alex:Person={
    name:'Alexandr',
    age:27,
    city:'Chicago',
};
showInfo(Alex)

// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
function squareNumber(a:number):number{
    return a*a
}
console.log(squareNumber(5))

// Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.
function isEven (a:number): boolean{
   return a % 2 === 0? true : false
}
console.log(isEven(11))

function isEven2(a: number): boolean {
    return a % 2 === 0;
}
console.log(isEven2(10))

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.
interface Student {
    name:string;
    grade:number;
};
function showInfoStudent (person:Student):void{
    console.log(`Name:${person.name}`);
    console.log(`Grade:${person.grade}`);
};

const student1:Student={
    name:'Alexandr',
    grade:9,
};
const student2:Student={
    name:'Alexandr',
    grade:10,
};
showInfoStudent(student1)
showInfoStudent(student2)

// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Привет, мир!")