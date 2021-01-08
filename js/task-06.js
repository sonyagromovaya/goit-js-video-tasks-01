const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
console.log(numberInputRef.value);

const buttonRef = document.querySelector('#buttonPower');

buttonRef.addEventListener('click', function(){
    console.log('Number: ', numberInputRef.value);
    console.log('Power: ', powerInputRef.value);
    const number = Number(numberInputRef.value);
    const power = Number(powerInputRef.value);
    const result = Math.pow(number, power);
    console.log('Result: ', result);
})