// let dayOfWeek = ["월","화","수","목","금","토","일"];
// console.log(0 in dayOfWeek); // true
// console.log(7 in dayOfWeek); // false, dayOfWeek의 인덱스는 0 ~ 6 입니다.
// console.log("length" in dayOfWeek); // true, array의 프로퍼티로 length가 있습니다.

// let obj = {};
// let arr = [];
// let date = new Date();

// console.log(obj instanceof Object); // true
// console.log(arr instanceof Object); // true
// console.log(date instanceof Object); // true

// console.log(date instanceof Date); // true
// console.log(arr instanceof Array); // true

// console.log(arr instanceof Date); // false
// console.log(date instanceof Array); // false

// let happyDay = ["금","토","일"];
// let workDay = ["월","화","수","목", ...happyDay];
// console.log(workDay);

let latLonZoom = function(lat, lon, zoom){
  console.log(lat, lon, zoom);
}

latLonZoom(...[35.1431448,129.0940742,18]);