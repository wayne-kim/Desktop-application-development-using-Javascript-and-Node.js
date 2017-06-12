class Book {
  constructor(name, writers, publisher, content, edition, font) {
    this.name = name;
    this.writers = writers;
    this.publisher = publisher;
    this.content = content;
    this.edition = edition;
    this.font = font;
  }

  toString() {
    return `name = ${this.name}, 
      writers : ${this.writers},
      publisher :  ${this.publisher}, 
      content : ${this.content}, 
      edition : ${this.edition},
      font : ${this.font}`
  }
}

let book = new Book(
  "javascript와 Node.js를 이용한 데스크탑 애플리케이션 개발",
  ["김은찬", "고기훈"],
  "비제이퍼블릭",
  "HTML ... CSS ... Javascript ... Node ... Electron ... Nightmare ...",
  "1판",
  "맑은 고딕"
);

console.log(book.toString());