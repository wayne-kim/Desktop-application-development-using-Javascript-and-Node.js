class Book {
  constructor(name, writers, publisher){
    this.name = name;
    this.writers = writers;
    this.publisher = publisher;
  }

  toString(){
    return `name : ${this.name}, writers : ${this.writers}, publisher : ${this.publisher}`;
  }
}

let book = new Book(
  "A",
  "B",
  "C"
);
console.log(book);