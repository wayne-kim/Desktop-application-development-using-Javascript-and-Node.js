let num1 = 10;
let num2 = 20;
//num1과 num2의 값 중 하나라도 잃어버리면 바꿀 수 없습니다.

console.log(`num1 : ${num1} num2 : ${num2}`);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(`num1 : ${num1} num2 : ${num2}`);
