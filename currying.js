let numbers = [10,2,3,4,5,6,7,8,9,1];
let count = 0;
numbers.sort(function(a,b){
  console.log(a, b);
  count ++;
  return a - b
});
console.log(numbers, count);