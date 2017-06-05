// let obj = {
//   lifeTime : "생존주기를 벗어나거나 모든 참조가 해지되면 가비지 컬렉션이 수집합니다."
// }
// let obj2 = obj;

// obj = null;
// obj2 = null;

  
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o는 o2를 참조한다.
  o2.a = o; // o2는 o를 참조한다.

  return "azerty";
}

while(true){
  f();
  global.gc();
}
  