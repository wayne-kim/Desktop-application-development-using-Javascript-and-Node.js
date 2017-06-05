let arr = [1,2,3,4,5];

function FIFO(arr){
  return (arr instanceof Array) ? arr.shift() : "배열을 입력해주세요."
}
console.log(FIFO(arr));