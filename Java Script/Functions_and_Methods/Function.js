console.error(`General Function`);
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

//PROGRAMS

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

//default programs

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

//multiple of 2 number
function multiply(num1 = 1, num2 = 1) {
  if (typeof num1 == "number" && typeof num2) {
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

// WAP to check even or odd number using the general function with parameter  and the return type statement
//  note
//   check even or odd number when parameter is holding number data or else return as the invalid option

function eveodd(num1) {
  if (typeof num1 == "number") {
    if (num1 % 2 == 0) {
      return "its even number";
    }
    else{
        return "odd number"
    }
  }
  else{
    return "Invalid number"
  }
}

let y = eveodd(10);
console.log(y);
console.log(eveodd(11));
console.log(eveodd('a'));

