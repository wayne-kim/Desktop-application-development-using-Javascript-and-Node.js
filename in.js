let datOfWeekObj = {
  "월" : 0,
  "화" : 1,
  "수" : 2,
  "목" : 3,
  "금" : 4,
  "토" : 5,
  "일" : 6
}
console.log("월" in datOfWeekObj);
console.log("금금금" in datOfWeekObj);
console.log("length" in datOfWeekObj);


let dayOfWeekArr = ["월","화","수","목","금","토","일"];
console.log(0 in dayOfWeekArr);
console.log(7 in dayOfWeekArr);
console.log("length" in dayOfWeekArr);
