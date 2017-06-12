const fs = require("fs");

console.time("동기적 파일 입출력");
const fd = fs.openSync('temp.txt', 'w+');
fs.writeFileSync(fd, "동기적으로 파일 입력");
console.log("저장 완료");
console.timeEnd("동기적 파일 입출력")

console.log("");

console.time("비동기적 파일 입출력 요청 완료");
fs.open('temp2.txt', 'w+', function (err, fd) {
  fs.writeFile(fd, "비동기적으로 파일 입력", function (err) {
    if (err) throw err;
    console.log("저장 완료");
  });
});
console.log("파일 저장하고 있어. 나는 다른 일하고 있을게");
console.timeEnd("비동기적 파일 입출력 요청 완료");