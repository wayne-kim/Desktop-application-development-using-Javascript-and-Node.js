let count = 0;

function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      count = count + 1;
      if(arr[j] < arr[j-1]){
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
}

let arr = [5,4,3,2,1];
bubbleSort(arr);
console.log(`비교 횟수 : ${count} | 배열 : ${arr}`);