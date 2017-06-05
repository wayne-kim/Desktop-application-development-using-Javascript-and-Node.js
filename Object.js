//객체 정의
// let meObject = {
//   name : "Wayne",
//   intro : function(){
//     console.log("나의 이름은 " + this.name + "입니다.");
//   }
// }
// meObject.intro()

/////////////////////////////////////////////

//객체 정의
// let meObject = {};

//객체 프로퍼티 및 메소드 추가
// meObject.name = "Wayne";
// meObject.intro = function(){
//   console.log("나의 이름은 "+ this.name + " 입니다.");
// }

// meObject.intro();
// delete meObject.name;
// meObject.intro();

///////////////////////////////////////////////

// let myComputer = {
//  cpu : 'intel i7',
//  ram : {
//    manufacturer : "Samsung",
//    capacity : "16GB",
//  }
// }
// console.log(myComputer.ram.manufacturer);
// console.log(myComputer["ram"]["manufacturer"]);