const readlineSync = require('readline-sync');
 let score = readlineSync.question('What is your score? ');
  
 switch (parseInt(score /= 10)) {
   case 10 :
   case 9 : 
     console.log("A");
   case 8 : 
     console.log("B");
   case 7 :
     console.log("C");
   case 6 :
     console.log("D");
   default :
     console.log("가자! 학고!");
 }
