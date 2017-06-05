function getName(){
  return name;
}

let obj = {
  name : "obj",
  getName : getNamec
}
// console.log(obj.getName());

let obj2 = {
  name : "obj2",
  getName : function(){
    return name;
  }
}
console.log(obj2.getName());