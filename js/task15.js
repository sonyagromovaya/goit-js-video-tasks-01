/**
 * Пример 7 - if...else и prompt
 * Используя конструкцию if..else, напишите код, который будет спрашивать:
 * «Какое «официальное» название JavaScript?». 
 * Если пользователь вводит «ECMAScript», то показать: «Верно!», 
 * в противном случае – отобразить: «Не знаете? ECMAScript!»
 */
let message;
while(true){
    message = prompt('Какое официальное название JavaScript?');
    if(message === 'ECMAScript'){
        console.log('Верно');
        break;
    }else{
        console.log('Не знаете? ECMAScript!');
    }
}