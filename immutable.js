"use strict"
// let str1 = "In Javascript, string is immutable?";
// str1 = "Does not this change?";
// str1 = new String("Does not this change?");
// str1[str1.length - 1] = "!";

let youthIsBest = Object.defineProperties({}, {
  age: {
    value: 26,
    writable: false
  }
})
youthIsBest.age = 27; // TypeError: Cannot assign to read only property 'age' of object