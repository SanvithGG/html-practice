// function calculate(a,b,callback){
//     console.log(callback(a,b));
// }
// calculate(10,20,(a,b)=>{return a+b})



function calculate(callback){
   let a = 10 + callback()
   console.log(a); 

   let b = 10 * callback()
   console.log(b); 

}
calculate(()=>{ return 5;})

// 1. Even or Odd
let checkNumber = (a)=>{
    if(a%2==1)
        console.log(`${a} is odd number`);
}
checkNumber(15)

// 2. Find the Largest

let largest = (a,b,c) =>{
    (a>b)? console.log(`${a} is largest`): (b>c) ? console.log(`${b} is largest`) : console.log(`${c} is largest`);
}
largest(10, 25, 17);

// 3. Calculator

let calculate = (a,b,c)=>{
    if (c === "+") {
        d = a + b;
    } 
    else if (c === "*") {
        d = a * b;
    } 
    else if (c === "/") {
        d = a / b;
    }

    console.log(`${a} ${c} ${b} = ${d}`);
}
calculate(20, 5, "+");
calculate(20, 5, "*");
calculate(20, 5, "/");