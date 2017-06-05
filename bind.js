// function showBookInfo(etc){
//   console.log(this);
//   if(etc){
//     console.log(etc);
//   }
// }

// let book = {
//   name : "자바스크립트로 시작하는 프로그래밍",
//   writer : "김은찬",
//   publisher : "비제이퍼블릭"
// }

// showBookInfo = showBookInfo.bind(book);
// showBookInfo({
//   edtion : "제1판"
// });

//ex
let book = {
  name : "자바스크립트로 시작하는 프로그래밍",
  writer : "김은찬",
  publisher : "비제이퍼블릭",
  paperCut : function(arg1){
    console.log(this.name + " 책 때문에 손 베임!");
    
    console.log(arg1);
    console.log(arguments);
  }
}

let cutFinger = book.paperCut;
cutFinger = cutFinger.bind(book, "지금 이 순간, 그 누구보다 억울하다.");
cutFinger("ㅠㅠ");