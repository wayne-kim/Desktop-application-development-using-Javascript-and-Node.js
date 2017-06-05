// function factorial(num){
//   if(num == 0) return 1;
//   else return num * factorial(num - 1);
// }

// console.log(factorial(5));

function fiboLoop(num) {
  let before = 0, current = 1, temp;

  if (num == 0) return 0;
  else if (num == 1) return 1;
  else {
    for (let i = 1; i < num; i++) {
      temp = current;
      current = before + current;
      before = temp;
    }
    return current;
  }
}
console.log(fiboLoop(10));

function fiboRecursiveFn(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else return fiboRecursiveFn(num - 2) + fiboRecursiveFn(num - 1);
}
console.log(fiboRecursiveFn(1000));

