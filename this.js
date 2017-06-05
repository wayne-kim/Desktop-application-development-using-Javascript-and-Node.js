// var globalValue = 1;

// function fuckingThis(){
//   console.log(this.globalValue);
// }
// fuckingThis();

// "use strict"
// let fuckingThis = {
//   reason : "너무 예외가 많아!",
//   showReason : function(){
//     console.log(this.reason);
//   }
// }
// fuckingThis.showReason();

// let fuckingThis2 = {
//   reason : "너무 복합적이 잖아!",
//   showReason : function(){
//     console.log(this.reason);
//   },
//   showReason2 : fuckingThis.showReason
// }
// fuckingThis2.showReason2();

// function fuckingThis(){
//   console.log(this.reason)
// };
// let one = {
//   reason : "많아! 너무 많아!"
// }
// fuckingThis.bind(one);


//  let reason = {
//    reason : "너무 예외가 많아!",
//    showReason : function(){
//      console.log(this.reason);
//    }
//  }
//  reason.showReason(); // 너무 예외가 많아!

//  let reason2 = {
//    reason : "너무 복합적이 잖아!",
//    showReason : reason.showReason
//  }
//  reason2.showReason(); // 너무 복합적이 잖아!
 
//  reason.showReason = function(){
//    console.log("변경했어");
//  }
 
//  reason2.showReason(); // 너무 복합적이 잖아!
//  reason.showReason(); // 변경했어

let callback = ()=>{
  console.log(this);
};
 
let man = {
  name: "Wayne",
  friends: ["Duke","Dean","Harrison"],
  showFriends : function(fn){
    fn();
  }
};
man.showFriends(callback);