#include <stdio.h>
 
/* function declaration */
int add(int num1, int num2);
 
int main () {
   int result;
   result = add(a, b);
   printf( "result : %d\n", result);
   return 0;
}
 
int add(int num1, int num2) {
   return num1 + num2;
}