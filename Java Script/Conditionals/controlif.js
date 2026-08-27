let num = 10;

console.warn("if statement");
if (num > 0) {
  console.log("its the positive mumber");
}

console.warn("if else statement");
let num1 = -10;
if (num1 > 0) {
  console.log("its the positive mumber");
} else {
  console.log("negative nnumber");
}

console.warn("if else if statement");

console.warn("even or odd");
let num3 = 10;
if (num3 % 2 == 0) {
  console.log("its the positive mumber");
} else {
  console.log("negative nnumber");
}

console.warn("if else if statement");

let num2 = -0;
if (num2 > 0) {
  console.log("its the positive mumber");
} else if (num2 < 0) {
  console.log("negative nnumber");
} else {
  console.log("neutral");
}

console.warn(`Nested if Statements`);
let num11 = 101;

if (typeof num == "number") {
  console.log(`Welcome`);

  if (num11 % 2 == 0) {
    console.log(`Even number`);
  } else {
    console.log(`Odd number`);
  }
} else {
  console.log(`Its not a number`);
}

//real word example

console.warn(`Nested if Statements (real word example)`);
let email = "sam@123";
let pass = "user123";

if (email == "sam@123") {
  console.log(`Welcome`);

  if (pass == "user123") {
    console.log(`welcome to the home page`);
  } else {
    console.log(`Invalid credintials`);
  }
} else {
  console.log(`invalid email address`);
}

// real word example path 2

console.warn(`Nested if Statements (real word example)`);
let email1 = "sam@123";
let pass1 = "user123";

if (email1 == "sam@123" && pass == "user123") {
  console.log(`Welcome`);
  console.log(`welcome to the home page`);
} else {
  console.log(`invalid email address or password`);
}

//Switch

console.warn(`Switch Statement`);
let color = "red";

switch (color) {
  case "red":
    console.log(`Stop ❤️`);
    break;
  case "green":
    console.log(`Goooooooooooo 💚`);
    break;
  case "yellow":
    console.log(`Be Ready 💛`);
    break;
  default:
    console.log(`RIP `);
}

// real example 1

console.warn(`Finding the person jobs based on the age `);

let age2 = 10;

switch (true) {
  case (age2 <=5):
    console.log(`The person is the kid`);
    break;
  case (age2 > 5 && age2 <= 10):
    console.log(`The person is the student`);
    break;
  case (age2 > 15):
    console.log(`The person is the College student`);
    break;
  default:
    console.log(`invalid age `);
}
