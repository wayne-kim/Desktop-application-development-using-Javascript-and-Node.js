console.log("모든 생성자 함수는 Object 생성자 함수로 만들었다.");
console.log(typeof Object);
console.log(Boolean instanceof Object);
console.log(Number instanceof Object);
console.log(String instanceof Object);
console.log(Array instanceof Object);
console.log(Function instanceof Object);
console.log(Symbol instanceof Object);

console.log("모든 함수는 Object 생성자 함수로 만들었다.");
function MyFn(){

}
console.log(typeof MyFn);
console.log(MyFn instanceof Object);

let myFn = new MyFn();
console.log(typeof myFn);
console.log(myFn instanceof Object);
console.log(myFn instanceof MyFn);

let object = new Object();
console.log(object instanceof Object);