// class Counter {
//   constructor(count) {
//     this.getCounter = function() {
//       return count;
//     }
//     this.decrease = function() {
//       if(count <= 0) count = 0
//       else count = count - 1;
//       this.showCount();
//     }
//     this.showCount = function(){
//       console.log(count);
//     }
//   }
// }

// let counter = new Counter(3);
// counter.decrease();
// counter.decrease();
// counter.decrease();
// console.log(counter.count);

class Counter {
  constructor(count) {
    this.getCounter = function () {
      return count;
    }
    this.decrease = function () {
      if (count <= 0) count = 0
      else count = count - 1;
      showCount();
    }
    function showCount() {
      console.log(count);
    }
  }
}

let counter = new Counter(3);
counter.decrease();
counter.decrease();
counter.decrease();
// counter.showCount();
console.log(counter.count);