(function(){
  console.log("익명 함수");
})();

let assginedFn = function(){
  console.log(assginedFn.name);
}
assginedFn();

(function NamedFn(){
  console.log("즉시 실행 함수");
  console.log(NamedFn.name);
}());
// console.log(NamedFn);