// let foo = {one: 1, two: 2};
// let bar = {three: 3};

// let newFoo = foo;
// let newBar = newFoo.__proto__;

// bar.__proto__ = foo;
// console.log(bar.one, bar.two, bar.three);
// foo.one = 2;
// foo.two = 4;
// console.log(bar.one, bar.two, bar.three);

// let man = {"name":"Wayne"};
// man.showName();
//모든 객체는 Object 생성자의 원형(Prototype)을 가리키고 있습니다.
// Object.prototype.showName = function(){
//   console.log(this.name);
// }
// Object.prototype.name = "은찬";
//객체는 생성자의 원형에 바로 접근할 수 있습니다.
// man.showName();
//프로퍼티를 찾을 때 
// delete man.name;
// console.log(man.name === man.__proto__.name);

console.log(Object.prototype);