 const readlineSync = require('readline-sync');
 let score = readlineSync.question('What is your score? ');
  
 if(score > 60){
   console.log("PASS");
 }else{
   console.log("FAIL");
 }