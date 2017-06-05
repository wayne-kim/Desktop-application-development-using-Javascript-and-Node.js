var numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

function showBookInfo(etc){
  console.log(this);
  if(etc){
    console.log(etc);
  }
}

let book = {
  name : "자바스크립트로 시작하는 프로그래밍",
  writer : "김은찬",
  publisher : "비제이퍼블릭"
}

showBookInfo.call(book);
showBookInfo.call(book, ["제 1판", "17년 8월"]);