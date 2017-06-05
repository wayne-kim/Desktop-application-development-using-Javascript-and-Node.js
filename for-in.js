// let nums = [2,4,8];
// for (let i=0; i < nums.length; i++) {
//    console.log(nums[i]);
// }

// console.log("\n")
// for (let num in nums) { // num에는 배열의 인덱스가 할당됩니다.
//   console.log(nums[num]);
// }

// console.log("\n")
// for (let num of nums) { // num에 배열의 순차적 값이 할당됩니다.
//   console.log(num);
// }

let man = {
  name : "wayne",
  age : 26,
  hobby : ["프로그래밍","넝담"],
  act : function(){
    console.log("act")
  }
}

// for(let i in man){
//   console.log(man[i])
// }
console.log(Object.assign(man));

// let arr = [1,2,3,4];

// for(let i in arr){
//   console.log(arr[i])
// }