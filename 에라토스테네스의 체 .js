const readlineSync = require('readline-sync');
let num = readlineSync.question("input num : ");

let arr = new Array();
let i = 2;

for (i = 2; i <= num; i++) {
    arr.push(i)
}

let start = new Date();

for (i = 2; i <= num; i++) { 
    if (arr[i] == 0) // 이미 체크된 수의 배수는 확인하지 않는다
        continue;
    for (let j = i + i; j <= num; j += i) { // i를 제외한 i의 배수들은 0으로 체크
        arr[j] = 0;
    }
}

// print
for (i = 2; i <= num; i++) {
    if (arr[i] != 0)
        console.log(arr[i])
}

let end = new Date();
console.log((end -start)/1000 + "초");