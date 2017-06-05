const readlineSync = require('readline-sync');
let num = readlineSync.question("input num : ");
let start = new Date();

loop1:
for(let i=1; i<= num; i++){
  let count = 0;
  for(let j=1; j <= i; j++){
    if(i % j == 0) count ++;
    if(count > 2) continue loop1;
  }
  if(count == 2)console.log(i);
}

let end = new Date();
console.log((end -start)/1000 + "초");