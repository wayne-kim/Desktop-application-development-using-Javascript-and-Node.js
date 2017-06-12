class Book {
  constructor(name, writers, publisher) {
    this.name = name;
    this.writers = writers;
    this.publisher = publisher;
  }

  toString(){
    return `name : ${this.name}, writers : ${this.writers}, publisher : ${this.writers}`;
  }
}

class BookLibrary extends Book{
  constructor(name, writers, publisher, category, state, location) {
    super(name, writers, publisher);
    this.category = category;
    this.state = state;
    this.location = location;
  }

  toString(){
    return super.toString() + `, category : ${this.category}, state : ${this.state},
     location : ${this.location}`;
  }
}

class BookPublication extends Book{
  constructor(name, writers, publisher, content, edition, font) {
    super(name, writers, publisher);
    this.content = content;
    this.edition = edition;
    this.font = font;
  }

  toString(){
    return super.toString() + `, content : ${this.content}, edition : ${this.edition}, font : ${this.font}`;
  }
}

let book = new BookLibrary(
  "javascript와 Node.js를 이용한 데스크탑 애플리케이션 개발",
  ["김은찬", "고기훈"],
  "비제이퍼블릭",
  "컴퓨터/모바일",
  "대출가능",
  "9층 자료실"
);
console.log(book.toString());

let book2 = new BookPublication(
  "javascript와 Node.js를 이용한 데스크탑 애플리케이션 개발",
  ["김은찬", "고기훈"],
  "비제이퍼블릭",
  "HTML ... CSS ... Javascript ... Node ... Electron ... Nightmare ... 이하생략",
  "1판",
  "맑은 고딕"
);
console.log(book2.toString());