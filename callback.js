function myCallBackFn(){
  console.log("나중에 실행할 함수");
}

function highOrderFn(fn){
  fn();
}

highOrderFn(myCallBackFn);