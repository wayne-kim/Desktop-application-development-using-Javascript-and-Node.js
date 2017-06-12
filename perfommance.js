// let count = {
//   length : 1000000000
// }
// let start = new Date();
// for(let i =0; i<count.length; i++){}
// let end = new Date();
// console.log(end.getTime() - start.getTime());

// let count2 =  count.length;
// let start2 = new Date();
// for(let i =0; i<count2; i++){}
// let end2 = new Date();
// console.log(end2.getTime() - start2.getTime());

///////////////////////////////////////////////////////

// let length = 100000000
 
// console.time('리터럴 형식');
// for(let i=0; i<length; i ++){
//  let obj = {};
// }
// console.timeEnd('리터럴 형식');
 
// console.time('생성자 형식');
// for(let i=0; i<length; i ++){
//  let obj = new Object();
// }
// console.timeEnd('생성자 형식');

//////////////////////////////////////////////////////

// let obj = {
//   name : "Wayne"
// }
// let obj2 = new Object();
// obj2.name = "Wayne2";

// console.log(typeof obj);
// console.log(typeof obj2);

//////////////////////////////////////////////////////////

let sum = 0;
let count = 0;

let start = new Date();
while(true){
  let end = new Date();
  if((end.getTime() - start.getTime()) > 1000)break;
  count = count + 1;
}
console.log("연산 횟수 : "+ count);