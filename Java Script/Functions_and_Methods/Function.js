//#region 1. General Functions
console.warn(`General Function`);

//#region 1.1 Function Without Arguments & Without Return Type
// console.warn(`Function Without arguments example 1`);
function fun() {
  console.log(`Hello !,this is my 1st example`);
}

// fun()
// fun()
// console.log(typeof fun);

// console.warn(`Function Without arguments example 2`);
function add() {
  let a = 10;
  let b = 20;

  let c = a + b;
  console.log(`${a} + ${b} = ${c}`);
}
// add()
//#endregion

//#region 1.2 Function With Parameters & Without Return Type
//Function Without arguments without returntype
//WAP to add the 2 numbers using the general function with parameters
// console.warn(`Function Without arguments without returntype example 2`);
function add(a, b) {
  let c = a + b;

  console.log(`${a} + ${b} = ${c}`);
}
// add(10,20)
// add(20,30)

// WAP to check the number is even or odd
// console.warn(`Check even number or not`);
function even(a) {
  if (a % 2 == 0) console.log(`${a} is a even number`);
  else console.log(`${a} is a odd number`);
}

// even(10)
// even(3)

//WAP to print hello using the generic function
// console.warn(`Hello word `);
function hello(user) {
  console.log(`${user} hello !,welcome`);
}
// hello("rex")
// hello("max")
//#endregion

//#region 1.3 Function With Return Type
//Function Without arguments with returntype
// console.warn(`Function Without arguments with returntype`);
function out() {
  let x = 100;
  console.log(x);
  return x;
}
// let y = out();
// console.log(y);

//Function Without arguments with returntype
// console.warn(`Function Without arguments with returntype ex 1`);
function out1() {
  let msg = "Hello";
  return msg;
}
// let y1 = out1();
// console.log(y1);

// console.warn(`Function Without arguments`);
function out2(value) {
  console.log(value);
  return `${value}`;
}
// out2(100)
// out2("Hello")
//#endregion

//#region 1.4 Default Parameters & Values
//default values
// console.warn(`Default value`);
function demo(tect) {
  console.log(tect);
}
// demo()
//undefined is the default value of the parameter

//How to change the default value of the parameter
// console.warn(`Default value`);
function demo2(tect = "not null") {
  console.log(tect);
}
// demo2()

//How to change the default value of the parameter
// in here with the let the redecleration is not possible
// console.warn(`Default value`);
function demo1(a, b, tect = NaN) {
  b = "is";
  console.log(a, b, tect);
}
// demo1("dinga")
//#endregion

//#region 1.5 Practice Problem: Print Even Numbers in Range (20 - 30 / User Input)
//wap TO PRINT EVEN numbers from 20 -30 using general function with parameter
function even1() {
  let a = prompt(`Enter the start value`);
  let b = prompt(`Enter the end value`);

  console.warn(`Even numbers from ${a} ${b}`);
  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (i % 2 == 0) {
        console.log(`even number are : ${i}`);
      }
    }
  } else {
    alert(`invalid number`);
  }
}

// even1(20, 30);
// even1(40,50);
//#endregion

//#region 1.6 Practice Problem: Print Odd Numbers in Range (User Input)
// WAP to print odd numbers from start end using the general function
// Note
// --> when button is clicked program should be executed
// --> then takes the values from the end user and print the odd number
function odd1() {
  let a = prompt(`Enter the start value`);
  let b = prompt(`Enter the end value`);

  if (a < b) {
    console.warn(`odd number from the ${a} and ${b} is :`);
    for (let i = a; i <= b; i++) {
      if (i % 2 == 1) {
        console.log(`odd number are : ${i}`);
      }
    }
  } else {
    alert(`invalid number`);
  }
}
//#endregion

//#region 1.7 Practice Problem: Add Two Numbers (User Input)
// WAP to add 2 nnumbers
//  --> collect value from the end user

function add1() {
  let a = parseFloat(prompt(`Enter the first value`));
  let b = parseFloat(prompt(`Enter the second value`));

  if (isNaN(a) || isNaN(b)) {
    alert(`its not a number`);
  } else {
    let c = a + b;
    console.log(`Addition of the ${a} and ${b} is ${c}`);
  }
}
//#endregion

//#region 1.8 Practice Problem: Check Positive, Negative, or Neutral Number
//WAP to check the positive or negative number
// note
//  when a button is clicked the fun should execute
// collect value from the end user

function positive() {
  let a = parseFloat(prompt(`Enter the number`));

  if (isNaN(a)) {
    alert(`Its not a number`);
  } else {
    // if(a>0){
    //     console.log(`${a} is a positive number`);
    // }
    // else if(a==0){
    //     console.log(`${a} is a neutral number`);
    // }
    // else{
    //     console.log(`${a} is a negative numbeer`);
    // }

    //     a > 0
    //       ? console.log(`${a} is a positive number`)
    //       : a == 0
    //         ? console.log(`${a} is a neutral number`)
    //         : console.log(`${a} is a negative numbeer`);

    switch (true) {
      case a > 0:
        console.log(`${a} is a positive number`);
        break;

      case a == 0:
        console.log(`${a} is a neutral number`);
        break;

      case a < 0:
        console.log(`${a} is a negative number`);
        break;
    }
  }
}
//#endregion

//#region 1.9 Practice Problem: Addition of 2 Numbers with Type Validation
function Addition1(num1, num2) {
  console.warn(`addition of 2 numbers`);
  if (typeof num1 == "number" && typeof num2 == "number") {
    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
  } else {
    console.log(`its not a number`);
  }
}
// Addition1(30,20)
//#endregion

//#region 1.10 Practice Problem: Multiplication of 2 Numbers with Default Values
//multiple of 2 number
function multiply(num1 = 1, num2 = 1) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    let multiply = num1 * num2;
    console.log(`${num1} * ${num2} = ${multiply}`);
  } else {
    console.log(`Invalid option`);
  }
}
// multiply(10,20)
// multiply('a',10)
// multiply(10)
// multiply('a','c')
// multiply('+',"-")
// multiply()
//#endregion

//#region 1.11 Practice Problem: Check Even or Odd with Return Statement & Type Check
// WAP to check even or odd number using the general function with parameter  and the return type statement
//  note
//   check even or odd number when parameter is holding number data or else return as the invalid option

function eveodd(num1) {
  if (typeof num1 == "number") {
    if (num1 % 2 == 0) {
      return "its even number";
    } else {
      return "odd number";
    }
  } else {
    return "Invalid number";
  }
}

// let y = eveodd(10);
// console.log(y);
// console.log(eveodd(11));
// console.log(eveodd('a'));
//#endregion

//#endregion

//#region 2. Anonymous Functions
console.warn(`Anonymous Function`);

//#region 2.1 Without Parameter and Without Return Type
// function withput parameter and without return type
let afun = function () {
  console.log(`Welcome to the function`);
};

// console.log(typeof afun);
// afun();
//#endregion

//#region 2.2 With Parameter and Without Return Type
// function with parameter and without return type
let afun1 = function (a, b) {
  let sum = a + b;
  console.log(sum);
};
// afun1(10,20)
//#endregion

//#region 2.3 Without Parameter and With Return Type
// function without parameter and with return type
let afun2 = function () {
  let a = "hello";
  return a;
};
// console.log(afun2());
// afun2();
//#endregion

//#region 2.4 With Parameter and With Return Type
// function with parameter and with return type
let afun3 = function (a, b) {
  let sum = a + b;
  return sum;
};
// afun3(10,20)
//#endregion

//#endregion

//#region 3. Arrow Functions
console.warn(`Arrow Function`);

//#region 3.1 Without Parameter and Without Return Type
// function withput parameter and without return type
let arrow = () => {
  console.log(`Welcome to the arrow function`);
};
// arrow();
// console.log(typeof arrow);
//#endregion

//#region 3.2 With Parameter and Without Return Type
// function with parameter and without return type
let arrow1 = (a, b) => {
  let sum = a + b;
  console.log(`Addition is the ${sum}`);
};
// arrow1(10, 20);
//#endregion

//#region 3.3 Without Parameter and With Return Type
// function without parameter and with return type
let arrow2 = () => {
  let sum = "Hello welcome";
  return sum;
};
// console.log(arrow2());
//#endregion

//#region 3.4 With Parameter and With Return Type
// function with parameter and with return type
let arrow3 = (a, b) => {
  let sum = a + b;
  return `Addition is the ${sum}`;
};
// arrow3(20, 20);
//#endregion

//#region 3.5 Practice Problem: Check Even or Odd Number
// even or odd number

let Arroweven = (num) => {
  if (num % 2 == 0) return `Its the even number`;
  else return `Its the odd number`;
};
// let ab = Arroweven(10);
// console.log(ab);
//#endregion

//#region 3.6 Special Syntax Behaviors of Arrow Functions
// Special Behaviour of the arrow function
// Example 1 : in arrow function if we have only one line statement then flower braces is optional
let arr1 = () => console.log(`hello`);
// arr1();

// Example 2 : if there is only one parameter the braces is optional
let arr2 = (text) => {
  console.log(`user name is ${text}`);
};
// arr2("dinga");

// Example 3 : if there is only one parameter and the one line statement the braces and the flowerbraces  is optional
let arr3 = (text1) => console.log(`user name is ${text1}`);
// console.log(arr3());

// Example 4 : if in the arrow function if we have only one return then the return and the Flower braces is optional
let arr5 = () => `Tell me somthing !`;
// console.log(arr5());
//#endregion

//#endregion

//#region 4. Self Invoking Functions (IIFE)
console.warn(`Self Invoking Function`);

//#region 4.1 General Function using SIF
// general function using the Self Invoking Function

// in the General Function we can invoke inside / outside the SIF bodu.but General function is not useful becausee we are ibvoking the function without function name

// in general function we can invoke
// inside the block
// (function hello() {
//   console.log(`Hello welcome`);
// })
// ();

// Outside the block
// (function hello() {
//   console.log(`Hello welcome`);
// })
// ();
//#endregion

//#region 4.2 Anonymous Function using SIF
// Anonymous Functions using the Self Invoking Function

// in the Anonymous Function we can invoke inside / outside the SIF bodu, anynomous function is useful in SIF because SIF will invoke without function name & even though anomyous function not having function name

// inside the block
// (function () {
//   console.log(`Hello welcome`);
// })
// ();

// Outside the block
// (function () {
//   console.log(`Hello welcome`);
// })
// ();
//#endregion

//#region 4.3 Arrow Function using SIF
// Arrow Functions using the Self Invoking Function

// in the Arrow Function we can invoke  outside the SIF bodu,
// we can seperate the SLF with the semicolon(;)

// inside the block
// (() => {
//   console.log("Hello word !");
// })
// ();
//#endregion

//#region 4.4 SIF with Parameters & Return Type (Examples)
// Example 1 : SIF eith parameter and with return type(Anynomous Function)
let val = function (a, b) {
  let res = a + b;
  return `${a} + ${b} = ${res}`;
};
// (10, 20);
// console.log(val);

// Example 2 : SIF eith parameter and with return type (Arrow Function)
let rest = (num) => {
  return num % 2 == 0 ? `its even number` : `its odd number`;
};
// (10);
// console.log(rest);

// Example 3 : SIF eith parameter and with return type (Arrow Function)

// console.log(
//   ((num) => {
//     return num % 2 == 0 ? `its even number` : `its odd number`;
//   })(10),
// );
//#endregion

//#endregion

//#region 5. Callback Functions (IIFE) And Higher Order function
// a function we can call as a argument of another function is called callback function
// Accepting the call back function as a parameter that function is called ad higher order function

console.warn(`Callback Dunction`);
// Example : 1
// NOTE : Here in above example num7 is the cbf function and the num4 is a hof
let num7 = () => {
  return 100;
};

let num4 = (a, b) => {
  let res = a + b;
  console.log(res);
};
// num4(num7(), 10);

// Example : 2
// NOTE : Here in above example num8 is the cbf function and the num9 is a hof
let num8 = () => {
  return 100;
};

let num9 = (a, b) => {
  let res = a() + b;
  console.log(res);
};
// num9(num8, 10);

// Example : 3
// NOTE : Here in above example , a is the cbf function and the sum is a hof
let sum = (a, b) => {
  let res = a() + b;
  console.log(res);
};
sum(() => {
  return 100;
}, 10);

// Example : 4
// NOTE : Here in above example , sname is the cbf function and the name is a hof
let sname = () =>{
  return "A R"
}

let name = (fName,sName) =>{
  let user = `My name is ${fName} ${sName()}`
  console.log(user);
}
// name("sanvith","A R")
// name("sanvith",sname())
name("sanvith",sname)

// Example : 4
// NOTE : Here in above example , callback is the cbf function and the value is a hof
let value = (callback) =>{
  let add = 100 + callback()
  console.log(add);

  let div = 100 / callback()
  console.log(div);

  let mul = 100 * callback()
  console.log(mul);
}

value(()=>{
  return 200;
})

// here settimeout is a higher order function and this function is used to delay the executiom 
// Syntax : setTimeout (CBF,timer)
setTimeout(()=>{
  console.log(`Hello`);
},2000)

// in anbove the example the output will be printed in the 2 sec 
// Here the setTimeout

//#endregion

//#region 6. Theory & Notes on Functions

/* # Functions :

    -> Functions are reusable blocks of code. It is used to write and
       perform specific task on webpage.

    -> Function will execute when it is invoked/called. If we need to
       execute multiple times, we can define it once in a function and
       call it multiple times.

    -> Datatype of function is function


# Why Use Functions?

    -> Reuse code
    -> Reduce code duplication
    -> Improve readability
    -> Make code easier to maintain
    -> Support modular programming


# Types of Functions */

//#endregion
