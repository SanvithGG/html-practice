//#region 1. For Loops & Practice Problems

//#region 1.1 Print 1 to 5 Numbers
// write a program to print the 1 to 5 numbers
// console.warn(`For Loop`);
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
//#endregion

//#region 1.2 Print Even Numbers from 10 to 20
// // WAP to print even numberd from 10 to 20 usinh hte for loop
// console.warn(`even numbers from 10 to 20`);
// for (let i = 10; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
// }
//#endregion

//#region 1.3 Print Even Numbers from 30 to 40 in Reverse Order
// //WAP to display the even numbers in the reverse order
// console.warn(`even numbers from 30 to 40 in rev order`);
// for (let i = 30; i <= 40; i++) {
//   if (i % 2 == 0)
//      console.log(i);
// }
//#endregion

//#region 1.4 User Input: Print Full Name & Add Two Numbers
// WAP to print the 2 string by taking the input form the end user
// let fname = prompt(`Enter the first name`)
// let lname = prompt(`Enter the last name`)
// console.log(`my name is `,fname,lname);

// WAP to add 2 numbers while collecting the values form the end users
// let num1 = Number(prompt(`Enter the 1st val`))
// let num2 = Number(prompt(`Enter the 2nd val`))
// console.warn(`Addition of the 2 number is`);
// let sum = num1 + num2
// console.log(sum);
//#endregion

//#region 1.5 Even/Odd Number Checks & isNaN Validation
// WAP to print even numberd from 10 to 20 using the for loop and taking the values from the end user
// let sval = Number(prompt(`Enter the Starting value`))
// let lval = Number(prompt(`Enter the Ending value`))

// console.warn(`even numbers`);
// for ( i = sval; i <= lval; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// Check wethrt the given number is even or odd
// let num1 = prompt(`Enter the number`);
// if (num1 == typeof(Number)) {
//   if (num1 % 2 == 0) {
//     console.log(`Its the even number`);
//   } else {
//     console.log(`Its the odd number`);
//   }
// } else {
//   console.log(`its not a number`);
// }

// Check wether the given number is even or odd using the isnan method
// the isnan method is used to check wether the number is number is not and it will written the boolean value as the result
// let num1 = Number(prompt(`Enter the number`));
// if (Number.isNaN(num1)) {
//     console.log(`Its not a Number`);
// } else {
//   (num1%2==0)?
//           console.log(`${num1} is even number`) :
// console.log(`${num1} is odd number`);
// }
//#endregion

//#region 1.6 User Input Range: Print Odd Numbers & Calculate Sum
// print odd numbers from start to end while taking values from the end user
// let sval = Number(prompt(`Enter the Starting Number`));
// let lval = Number(prompt(`Enter the Ending Number`));
// console.warn(`The even num from ${sval} to ${lval} are :`);
// if(Number.isNaN(sval,lval))
// {
//   console.log(` the ${sval} or ${lval} is not a number`);
// }
// else{
// for (i = sval; i <= lval; i++) {
//   if(i%2==1)
//   console.log(i);
// }
// }

// let sval = Number(prompt(`Enter the Starting Number`));
// let lval = Number(prompt(`Enter the Ending Number`));
// console.warn(`The even num from ${sval} to ${lval} are :`);
// if (Number.isNaN(sval, lval)) {
//   console.log(` the ${sval} or ${lval} is not a number`);
// } else {
//   let sum = 0;
//   for (i = sval; i <= lval; i++) {
//     sum = sum + i;
//   }
//   console.log(`The sum from ${sval} to ${lval} is ${sum}`);
// }
//#endregion

//#region 1.7 Factorial of a Number
//Factorial of numbers
// let fact =1;
// console.warn(`Factorial of number is `);
// for(let i = 1; i<=5; i++)
// {
//   fact = fact*i;
// }
//   console.log(fact);
//#endregion

//#region 1.8 Multiplication Table
//multiplication table
// let num = 2;
// console.warn(`Multiplication of number is `);
// for (let i = 1; i <= 10; i++) {
// let mul = num * i;
// console.log(`${num} * ${i} = ${mul}`);
// }
//#endregion

//#region 1.9 Interview Question (For Loop Expressions)
//interview question
// console.warn(`Interwiew Questions`);
// let i=0;
// for(console.log(`Hello`);i<=5;console.log(`World`))
// {
//   console.log(`Bye`);
//   i+=2;
// }
//#endregion

//#endregion

//#region 2. While Loops & Practice Problems

//#region 2.1 Basic While Loop: Print 1 to 5
//while loop execution
// let i=1;
// console.warn(`While Loop`);
// while(i<=5){
//   console.log(i);
//   i++;
// }
//#endregion

//#region 2.2 Factorial of Number using While Loop
// Factorial of numbers
// let i=1;
// let num=10;
// console.warn(`Factorial While Loop`);
// let fact=1;
// while(i<=num){
//   fact = fact*i;
//   i++;
// }
//   console.log(fact);
//#endregion

//#region 2.3 Even Numbers in Reverse Order (35 to 25)
//print numbers from 5-10 reverse order
// console.warn(`5-10 in reverse order`);
// let i = 35;
// while (i >= 25) {
//   if (i % 2 == 0)
//     console.log(i);
//   i--;
// }
//#endregion

//#region 2.4 Odd Numbers from 35 to 45
// print the odd number from 35-45 in reverse order
// console.warn(`35-45 odd number`);
// let i=35;
// let num=45;
// while(i<=num)
// {
//   if(i%2==1)
//     console.log(i);
//   i++;
// }
//#endregion

//#region 2.5 Odd Numbers in Reverse Order (65 to 55)
// print the odd number from 65-55 in reverse order
// console.warn(`65-55 in reverse order`);
// let i = 65;
// while (i >= 55) {
//   if (i % 2 == 1)
//     console.log(i);
//   i--;
// }
//#endregion

//#endregion

//#region 3. Jumping Statements (break, continue, throw)
//jumping statements (break,continue,return,throw)
// console.warn(`The jumping statements`);

//#region 3.1 Break Statement
// console.warn(`Break statements`);
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
//#endregion

//#region 3.2 Continue Statement
// console.warn(`Continue statements`);
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }
//#endregion

//#region 3.3 Throw Statement
// console.warn(`Thorw statements`);
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     throw(`Eligible `);
//   }
//   console.log(i);
// }
//#endregion

//#endregion
