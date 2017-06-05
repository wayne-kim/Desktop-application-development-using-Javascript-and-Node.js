class MyDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    return this.getFullYear() + months[this.getMonth()] + this.getDate();
  }
  showDate(){
    console.log(this.getFormattedDate());
  }
}
let date = new MyDate();
date.showDate();