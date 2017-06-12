class Button{}
Button.prototype.text = "test";
let btn = document.createElement("button");
btn.text = Button.prototype.text;

let btn2 = document.createElement("button");
btn2.text = Button.prototype.text;