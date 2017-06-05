let obj = {};
console.log(obj instanceof Object); // true

let array = [];
console.log(array instanceof Object); // true
console.log(array instanceof Array); // true

let fn = function(){};
console.log(fn instanceof Object); // true
console.log(fn instanceof Function); // true