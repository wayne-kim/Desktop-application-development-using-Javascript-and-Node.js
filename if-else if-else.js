const readlineSync = require('readline-sync');
let score = readlineSync.question('What is your score? ');
score /= 10;

if(score >= 9){
console.log("A");
}else if(score >= 8){
console.log("B");
}else if(score >= 7){
console.log("C");
}else if(score >= 6){
console.log("D");
}else {
console.log("가자! 학고")
}