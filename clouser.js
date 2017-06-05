// function outer(){
//   let outerValue = "외부 값"

//   return function innerFn(){
//     console.log(outerValue);
//   }
// }
// let clouser = outer();
// clouser();



// function countFn(){
//   let count = 0;
//   function print(){
//     console.log(count);
//   }
//   return {
//   do : function(){
//     count++;
//     print();
//   }
//   }
// }
// let counter = countFn();
// counter.do();
// counter.do();

function Baby(name){
  this.name = name;
  this.birthday = new Date();
  this.showBirthday(); // 구문 실행 전에, ptototype와 바인딩 되기 때문에 실행 됩니다.
}
Baby.prototype.showBirthday = function(){
  console.log(this.name, "탄생 축!", this.birthday.toString());
}

let baby = new Baby("김은우");