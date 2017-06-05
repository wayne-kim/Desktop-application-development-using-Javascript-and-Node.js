// console.log(Symbol() == Symbol()); //false
// console.log(Symbol() === Symbol()); //false

// // 고유한 심볼을 생성
// let obj = {};
// obj[Symbol()] = true;
// obj[Symbol()] = false;

// let objSymbols = Object.getOwnPropertySymbols(obj);
// console.log(obj[objSymbols[0]]);
// console.log(obj[objSymbols[1]]);

let sb = Symbol();
let obj2 = {}
let obj = { 
  [sb] : "고유한 symbol로만 참조 가능",
  sb : "동일한 문자열로 참조 가능",
  [obj2] : "마"
};
console.log(obj[sb]);
console.log(obj["sb"]);
