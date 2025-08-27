// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:  `price` (число)  `quantity` (число)`discount` (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.
function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    var discountTotal = total - (total * discount);
    return discountTotal;
}
;
console.log(calculateTotal(10, 5, 0.1));
// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.  
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID.
//  Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.
function displayId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log("Number:".concat(id * 10));
    }
}
displayId(10);
displayId('HI WORLD');
;
var orders = [
    { orderId: "A001", amount: 100, status: "pending" },
    { orderId: "A002", amount: 250, status: "shipped" },
    { orderId: "A003", amount: 300, status: "delivered" },
    { orderId: "A004", amount: 150, status: "pending" }
];
function fillterOrderByStatus(orders, choosenStatus) {
    return orders.filter(function (order) { return order.status === choosenStatus; });
}
console.log(fillterOrderByStatus(orders, "pending"));
// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:  
// название товара (строка)  
// его цену (число)  
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` 
// (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, 
// обновляет количество товара в объекте `inventory` и возвращает обновленный объект.
var inventory = { Laptop: 5, Phone: 10 };
var productInfo = ["Laptop", 1200, 3];
function updateStock(product) {
    var name = product[0], quantity = product[2];
    inventory[name] = (inventory[name] || 0) + quantity;
    return inventory;
}
console.log(updateStock(productInfo));
