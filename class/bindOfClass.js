// this와 strict mode를 제대로 이해했다면 필요 없는 예제이다. 그럼으로 빼자.
class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

var obj = new Animal();
var speak = obj.speak;
console.log(speak());

var eat = Animal.eat;
console.log(eat())

function test(){
  return this;
}
// console.log(test());