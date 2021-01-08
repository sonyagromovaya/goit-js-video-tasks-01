/**
 * Пример 1 - Определение типа значения, оператор typeof
 * За допомогою оператора визначення типу переконайтеся, 
 * що змінних належать типам: string, number, boolean.
 */

const productName = 'Mango';
const pricePerItem = 150;
const isOnSale = false;
const error = null;
let quantity;

console.log(typeof productName); // string
console.log(typeof pricePerItem); // number
console.log(typeof isOnSale); // boolean
console.log(typeof error); // object
console.log(typeof quantity); // undefined