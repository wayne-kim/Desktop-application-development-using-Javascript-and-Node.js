class document {
  constructor(content) {
    if (new.target === document) {
      throw new TypeError("Cannot construct document instances directly");
    }
    this.content = content;
  }
  showContent(){
    console.log(this.content);
  }
}

class ColorBook extends document {
  constructor(content, color) {
    super(content);
    this.color = color;
  }
}

// const book = new Book();

const colorBook = new ColorBook("이렇게 추상화를 구현하디니...");
colorBook.showContent();