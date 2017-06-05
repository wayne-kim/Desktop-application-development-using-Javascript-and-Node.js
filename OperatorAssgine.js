//대입 연산자
let num1 = 2;
let num2 = 4;

//사칙 연산자
console.log("사칙 연산자");
console.log(num1 += num2); //num1 == 6, 2 + 4
console.log(num1 -= num2); //num1 == 2, 6 - 4
console.log(num1 *= num2); //num1 == 8, 2 * 4
console.log(num1 /= num2); //num1 == 2, 8 / 4
console.log(num1 %= num2); //num1 == 2, 2 % 4

//이동 연산자
console.log("이동 연산자");
//10 <- 4, 100000 을 10진수로 표현하면 32
console.log(num1 <<= num2);
//100000 -> 4, 10 을 10진수로 표현하면 2
console.log(num1 >>= num2);
/*
-14, -14의 2의 보수를 2진수로 표현 (111111111 11111111 11111111 11110010)
111111111 11111111 11111111 11110010 를 부오 없는 오른쪽 시프트 연산하면 00111111 11111111 11111111 11111100
00111111 11111111 11111111 11111100를 10진수로 표현하면 1073741820
*/
let num3 = -14; 
console.log(num3 >>>= 2);

//비트 단위 연산자
/*
2의 2진수 00000000 00000000 00000000 00000010
4의 2진수 00000000 00000000 00000000 00000100
6의 2진수 00000000 00000000 00000000 00000110
*/
console.log("비트 단위 연산자");
console.log(num1.toString(2), num2.toString(2));
console.log(num1 |= num2);
console.log(num1 &= num2);
console.log(num1 ^= num2);
