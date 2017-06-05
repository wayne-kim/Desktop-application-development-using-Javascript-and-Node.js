const readlineSync = require('readline-sync');
let num = readlineSync.question("input num : ");

function addTow(parameter) {
  let ckeckNum = Number(parameter);
  return Number.isNaN(ckeckNum) ? "숫자 형태로 입력해주세요." : ckeckNum + 2;
}
console.log(addTow(num));