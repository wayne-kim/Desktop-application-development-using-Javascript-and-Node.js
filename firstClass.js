let functionIsFirstClass = function(){
  console.log("함수는 일급이므로 하나의 값이다.");
}

function myFn(fn){
  fn();
  return fn;
}
let result = myFn(functionIsFirstClass);

// let arr = [functionIsFirstClass];
// // arr[0]();

// function myFn(fn){
//   fn();
// }
// myFn(functionIsFirstClass);