let obj = {a:1};
let obj2 = {b:2};
let obj3 = {c:3};
obj.__proto__ = obj2;
obj2.__proto__ = obj3;

console.log(obj.a,  obj.b, obj.c);

let noProtoObj = {a:1};
let noProtoObj2 = {b:2};
let noProtoObj3 = {c:3};
noProtoObj.protery = noProtoObj2;
noProtoObj2.protery = noProtoObj3;

console.log(noProtoObj.a, noProtoObj.b, noProtoObj.c);