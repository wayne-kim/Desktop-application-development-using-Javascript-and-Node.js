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