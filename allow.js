// function printFriends(){
//   console.log(this.friends)
// }

// let man = {
//   name: "Wayne",
//   friends: ["Duke","Dean","Harrison"],
//   showFriends : function(fn){
//     fn();
//   }
// };

// man.showFriends(printFriends.bind(man));

// let man = {
//   name: "Wayne",
//   friends: ["Duke","Dean","Harrison"],
//   showFriends : function(){
//     (()=>{
//       console.log(this.friends);
//     })();
//   }
// };
// man.showFriends();

// let callback = ()=>{
//   console.log(this);
// };

// let man = {
//   name: "Wayne",
//   friends: ["Duke","Dean","Harrison"],
//   showFriends : function(fn){
//     fn();
//   }
// };
// man.showFriends(callback);

let arrow = (...args) => {
  let numbers = [];
  for (let index in args) {
    numbers.push(args[index] * args[index]);
  }
  return numbers;
}

console.log(arrow(2, 4, 8, 16, 32));