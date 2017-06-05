let arr = [1,2,3,4,5];

function LIFO(arr, value){
  if(arguments.length == 2){
    arr.push(value);
    return arr;
  }else if(arguments.length == 1){
    if(arr instanceof Array) {
      arr.pop();
      return arr;
    }
    else console.log("배열을 입력해주세요.");
  }
}

console.log(LIFO(arr, 6));
console.log(LIFO(arr));
console.log(LIFO(arr));
console.log(LIFO(arr));
console.log(LIFO(arr));
console.log(LIFO(arr));
console.log(LIFO(arr));