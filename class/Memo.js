class Memo {
  constructor(){
    this.title = null;
    this.text = null;
    this.dateUpdate = null;
    this.dateCreation = new Date();
  }
  setTitle(title){
    this.title = title;
  }
  getTitle(){
    return this.title;
  }
  setText(text){
    this.text = text;
  }
  getText(){
    return this.text;
  }
}
let myMemo = new Memo();
myMemo.setText("텍스트 내용");
console.log(myMemo.getText());