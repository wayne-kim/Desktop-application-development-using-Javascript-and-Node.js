 const readlineSync = require('readline-sync');
 let msg = "input number : ";
 let num1 = readlineSync.question(msg);
 let num2 = readlineSync.question(msg);
 
 if(num1>num2){
   console.log(num1);
 }else if(num1 == num2){
   console.log("Same");
 }else{
   console.log(num2)
 }