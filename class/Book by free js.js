class Book {
  constructor(_info){
    Book.id = Book.id + 1;

    for(let x in _info){
      this[x] = _info[x];
    }

    this.setInfo = function(changeInfo){
      for(let x in changeInfo){
        if(x in this){
          if(this[x] !== changeInfo[x])
          this[x] = changeInfo[x];
        }else{
          throw new Error().stack;
        }
      }
    }
    this.getInfo = function(){
      return _info;
    }
  }
}
Book.id = 0;

let book = new Book({
  id : Book.id,
  name : "javascript와 Node.js를 이용한 데스크탑 애플리케이션 개발",
  writers : "김은찬, 고기훈",
  publisher : "비제이퍼블릭",
  category : "컴퓨터/모바일",
  state : "대출가능",
  location : "9층 자료실",
  sayState : function(){
    console.log(this.state);
  }
});

console.log(book);

book.setInfo({ name : "Electron으로 데스크탑 애플리케이션 개발"});
console.log(book);

book.setInfo({ names : "책 이름 결정하기 어렵구만"});
console.log(book);

let book2 = new Book({
  id : Book.id,
  name : "javascript와 Node.js를 이용한 데스크탑 애플리케이션 개발",
  writers : "김은찬, 고기훈",
  publisher : "비제이퍼블릭",
  category : "컴퓨터/모바일",
  state : "대출불가",
  location : "9층 자료실",
  sayState : function(){
    console.log(this.state);
  }
});