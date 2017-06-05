const names = ["Wayne"]; // 대괄호( [ ] )로 배열을 생성했습니다. 배열은 뒤에서 다룹니다.
names.pop();
names.push("Eunchan");
console.log(names); // ["Wayne"]

//names = "Wayne"; // TypeError: Assignment to constant variable.

const PI = 3.14159265359;

const PI2;
PI2 = 3.14159265359;