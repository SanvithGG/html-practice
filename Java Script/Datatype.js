document.write("<h1>Data types</h1>");

console.warn(`Number datatype`); //NOTE : 'number' is the datatype of any integer or decimal number including 'Infinity'
let a = 10;
console.log(a); //Number
console.log(typeof a);

console.warn(` String datatype`); //NOTE : 'string' is the sequence of characters
let b = `Hello , i am here`;
console.log(b); //String
console.log(typeof b);

console.warn(` boolean datatype`); //NOTE : 'true' or 'false' are the only values of boolean datatype
let c = true;
console.log(c); //Boolean
console.log(typeof c);

console.warn(`undefined datatype`); //NOTE : 'undefined' is the default value of any variable in the java script
let d;
console.log(d);
console.log(typeof d);

console.warn(`null datatype`); //NOTE : 'null' is the intentional absence of any value
let e = null;
console.log(e);
console.log(typeof e);

//!using the inbuilt Method
console.error(`using inbuilt method`);

console.error(`Number inbuilt Method`);
let x = Number(a);
console.log(x);
console.log(typeof x); //number

console.warn(`passing non-numeric string to number`);
let q = Number("Hello World"); //Note:if value is not number then it will return NaN
console.log(q);
console.log(typeof q);

console.warn(`passing boolean to number`);
let r = Number(true); //true -> 1 and false -> 0
console.log(r);
console.log(typeof r);

console.error(`String inbuilt Method`);
let y = String(b);
console.log(y);
console.log(typeof y);

console.warn(`passing number to string `);
let z = String(a); //converting number to string
console.log(z);
console.log(typeof z);

console.warn(`passing boolean to string `);
let w = String(c); //converting boolean to string
console.log(w);
console.log(typeof w);

console.error(`Boolean inbuilt Method`);
let v = Boolean(true);
console.log(v);
console.log(typeof v);

console.warn(`passing number to boolean`);
let t = Boolean(a);
console.log(t);
console.log(typeof t);

console.warn(`passing string to boolean`);
let s = Boolean(b);
console.log(s);
console.log(typeof s);

console.warn(`passing undefined to boolean`);
let r1 = Boolean(d);
console.log(r1);
console.log(typeof r1);

console.warn(`passing null to boolean`);
let u = Boolean(e);
console.log(u);
console.log(typeof u);

console.warn(`Passing the " " to boolean`);
let u1 = Boolean(" ");
console.log(u1);
console.log(typeof u1);

console.warn(`Passing the back tick the boolean`);
let u2 = Boolean(` `);
console.log(u2);
console.log(typeof u2);

console.error(`undefined keyword`);
let u3 = undefined;
console.log(u3);
console.log(typeof u3);

console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// todo default value of inbuilt method
/*
Number() -> 0
String() -> ""
Boolean() -> false
*/

console.warn(`default values of the inbuilt method`);
console.log(Number()); //return 0
console.log(typeof Number()); //return number

console.log(String()); //return ""
console.log(typeof String()); //return string

console.log(Boolean()); //return false
console.log(typeof Boolean()); //return boolean

//string interpretation

let fname = "sanvith";
let lname = "A R";
let age = 21;

console.log("name" + fname);
console.log(`first name %(fname) age %(age)`);
