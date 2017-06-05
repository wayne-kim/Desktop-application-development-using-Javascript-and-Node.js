let map = new Map();

let strKey = "문자열",
    objKey = {},
    fnKey = function() {};

map.set(strKey, "str과 관련된 값");
map.set(objKey, "obj와 관련된 값");
map.set(fnKey, "fn과 관련된 값");

console.log(`${map.get(strKey)}, ${map.get(objKey)}, ${map.get(fnKey)}`);
console.log(`${map.get("문자열")}, ${map.get({})}, ${map.get(function(){})}`);