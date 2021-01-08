/**
 * Пример 10 - Оператор %
 * Написать программу которая получит от пользователя число (количество минут) 
 * и выведёт на экран строку в формате часов и минут.
 * 70 покажет 01:10
 * 450 покажет 07:30
 * 
 */
const answer = +prompt('Введите количество минут');
const minutesPerHour = 60;

const hours = Math.floor(answer / minutesPerHour);
const minutes = answer % minutesPerHour;
console.log(`${hours} : ${minutes}`);