const fs = require('fs');
const readlineSync = require('readline-sync');

let fileName = readlineSync.question("input a file name : ");
 
// try{
//   while(true){
//     var fileId = fs.openSync('text.txt', 'r');
//     console.log(fileId);
//   }
// }catch(e){
//   console.log("catch "+ e.toString());
// }

try{
  let fileId = fs.openSync(fileName, 'r');
  let buffer = new Buffer(10);
  let result = fs.readSync(fileId, buffer, 5, 5, 1);
  console.log(result);
  console.log(Buffer.from(buffer));
  
}catch(e){
  console.log(e.toString());
}