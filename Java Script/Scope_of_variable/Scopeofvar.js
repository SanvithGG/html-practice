console.warn(`Scope of the variable`);

// Global Scope

// let a = "Hello";
function fun() {
  console.log(a);
}
// fun()

function fun1() {
  console.log(a);
}
// fun()

// block Scope
if (true) {
  var b = "Hi"; // dunction scope / global scope in statement block
  let a = 100; // local scope /block scope
  const r = true; //local scope /block scope
  // console.log(a);
}
// console.log(b);

// Example 1

function fun2() {
  if (true) {
    let b = "hello";
    console.log(b);
    var c = "max"; // function scope
    const d = "rex"; //block scope
  }
  //   console.log(a); Uncaught ReferenceError: a is not defined
  // console.log(b); out tpue is hi cause var is function block wherre it aces as local in the function and global in the statement block
  //   console.log(d); Uncaught ReferenceError: a is not defined
}
// fun2();

// Example 2 nested function

let a1 = "hello"; // global scope
// ouet function
function fun3(){
    let a2 = "hii" // block scope
    // inner function
    function fun4(){ 
        let a3 = "hello" // Block scope    
        console.log(a1); 
        console.log(a2);
        console.log(a3);
    }
    fun4()
}
fun3()

