function getName(){
  return this.name;
}

let obj = {
  name : "obj",
  getName : getName
}
console.log(obj.getName());

let obj2 = {
  name : "obj2",
  getName : function(){
    return this.name;
  }
}
console.log(obj2.getName());