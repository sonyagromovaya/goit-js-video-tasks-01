console.log(true && 3); // 3
console.log(false && 3); //false 
console.log(true && 4 && "hello"); //'hello'
console.log(true && 0 && "hello"); //0
console.log(true || 3); // true
console.log(true || 3 || 4); //true
console.log(true || false || 7); //true
console.log(null || 2 || undefined); //2
console.log((1 && null && 2) > 0);//false
console.log(null || 2 && 3 || 4); // 3

