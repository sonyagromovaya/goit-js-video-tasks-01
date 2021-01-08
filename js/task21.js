// Пример 3 - Цикл for
// При помощи цикла for выведите чётные числа от 2 до 10.

// Решение 1: больше кода и итераций
for(let i = 2; i <= 10; i += 1){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Решение 2: с continue
for(let i = 2; i <= 10; i += 1){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}

// Решение 3: меньше кода и итераций

for(let i = 2; i <= 10; i += 2){
    console.log(i);
}
