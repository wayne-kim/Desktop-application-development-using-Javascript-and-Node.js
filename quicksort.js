let count = 0;

function quickSort(arr){
  let less = [], greater = [];
  if(arr.length <= 1)
    return arr;
  
  let pivot = arr.pop();
  for(x of arr){
    count = count + 1;
    if(x < pivot) less.push(x);
    else greater.push(x);
  }
  return [].concat(quickSort(less), pivot, quickSort(greater))
}
      
let arr = [4,3,2,1];
arr = quickSort(arr);
console.log(`비교 횟수 : ${count} | 배열 : ${arr}`);