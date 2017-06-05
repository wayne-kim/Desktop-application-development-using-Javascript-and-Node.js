class Button {
  constructor() {
    this.btn = document.createElement("BUTTON");
  }
}

class ButtonCustom extends Button{
  constructor(text, css){
    super();
    this.btn.style["background-color"] = css;
    this.btn.innerText = text;
  }
}

let blueBtn = new ButtonCustom("파란버튼","red");
document.body.innerHTML = "";
document.body.appendChild(blueBtn.btn);