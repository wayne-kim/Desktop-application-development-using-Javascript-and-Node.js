class Paper {
  constructor(text){
    this.text = text;
  }
}

class Sticker extends Paper{
  constructor(text, writer){
    super(text);
    this.writer = writer ? writer : "비회원";
    this.date = new Date();
  }

  get info(){
    return [this.text, this.writer, this.date]
  }
}

let sticker = new Sticker("가나다라마바사아자차카타파하", "김은찬");
console.log(sticker.info);