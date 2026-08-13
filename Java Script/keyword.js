console.log('Var from here')
var a; //declaration
a=10; //initilization
console.log(a);

a="hello";//re-initilization
console.log(a);

var a;
a=20;
console.log(a);

console.log('Let from here');

let b; //declaration
b=30; //initilization
console.log(b);

b="lol";//re-initilization
console.log(b);

// re-desc is not possible in let

console.log('Const from here')

const c=40; //declaration //initilization is possible only in the sinlge line
console.log(c);

// c="HELLO"; //re-initilization is not possible here cause const means unique
// console.log(c);

// var desc init re-init re-desc --> all are possible
// let --> desc init re-init re-desc --> except re-desc everything is possible
// const --> desc init re-init re-desc -->only init and desc is possible that we have to do in the single line
  