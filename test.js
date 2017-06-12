function Baby(name){
  console.log(this.hasOwnProperty.call(this, "name")); //4
  this.name = name;
  this.birthday = new Date();
  this.showBirthday(); //3, prototype와 바인딩 되기 때문에 실행 됩니다.
  console.log(this.hasOwnProperty.call(this, "name")); //4
}
Baby.prototype.showBirthday = function(){
  console.log(this.name, "탄생 축!", this.birthday.toString());
}
 
let baby = new Baby("김은우");
console.log(baby);