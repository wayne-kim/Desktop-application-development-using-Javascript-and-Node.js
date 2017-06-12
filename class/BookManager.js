class Book {
  constructor(name, writers, publisher) {
    this.name = name;
    this.writers = writers;
    this.publisher = publisher;
  }

  toString() {
    return `name = ${this.name}, 
      writers : ${this.writers},
      publisher :  ${this.publisher}`
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

class BookManager {
  constructor(){
    this.list = [];
  }
  addBook(book){
    this.list.push(book);
  }
  delete(id){
    for(let book of this.book){
      
    }
  }
}