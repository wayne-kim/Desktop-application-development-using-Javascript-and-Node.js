function MyError(){
  this.name = "내가 정의한 에러";
}

try{
  // throw new MyError();
  console.log(undefinedVariable);
  //throw new TypeError();
  //throw new ReferenceError();
}catch(e){
  if(e instanceof MyError){
    console.log(e.name);
  }else if(e instanceof TypeError){
    console.log(e.name);
  }else if(e instanceof Object){
    console.log(e.name);
  }
}