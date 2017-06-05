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
showBookInfo.call(book, ["제 1판"]);