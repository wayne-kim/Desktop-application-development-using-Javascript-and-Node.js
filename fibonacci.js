// function fibonacci(num) {
//  let before = 0, current = 1, temp;
//  console.log(before, current)

//  if (num == 0) return 0;
//  else if (num == 1) return 1;
//  else {
//    for (let i = 1; i < num; i++) {
//      temp = current;
//      current = before + current;
//      before = temp;
//      console.log(before, current)
//    }
//    return current;
//  }
// }
// fibonacci(1000);

function fib(term, val = 1, prev = 0)
{
 if(term == 0) return prev;
 if(term == 1) return val;
 return fib(term - 1, val+prev, val);
}
console.log(fib(100000));