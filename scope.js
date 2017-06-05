// //함수 스코프, 클로저는 나중에 배우겠습니다.
// var varNum1 = 10;
// var varNum2 = 20;
// (function myFn(){
//   var varNum1 = 100;
//   varNum2 = 200;

//   varNum3 = 300;
// })();

// console.log("varNum1 : " + varNum1);
// console.log("varNum2 :", varNum2);
// console.log("varNum3 :", varNum3);

// //블록 스코프,
// let letNum1 = 100;

// {
//   let letNum1 = 200;
//   let letNum2 = 200;
// }

// console.log("letNum1 :", letNum1);
// // console.log("letNum2 :", letNum2);

// console.log(hoistring)
// var hoistring = "Yes"
// console.log(hoistring)

let num = 1;
var num2 = 2;

// function test(){
//   console.log(num);
//   console.log(this.num2);
// }

let myObj = {
  num2 : 2,
  test : function(){
    console.log(num);
    console.log(this.num2);
  }  
}

// window.test();
myObj.test();
