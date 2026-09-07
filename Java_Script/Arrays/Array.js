// console.warn(`Arrays`);

// let arr = [100,"hii","hello",299,266];
// console.log(typeof arr);
// console.log(arr.length);
// console.log(arr[1]);
// console.log(typeof arr[0]);

// todo : create the array
// let fruits = ["mango","bannana","apple","chikko"]
// todo : Accessing the array elements
// console.log(fruits);
// todo : Add array elements
// fruits[4]="Guva"
// console.log(fruits);
// console.log(fruits[4]);
// todo : Update the array elements
// fruits[2]="Pineapple"
// console.log(fruits);
// todo : Delete the array elements
// delete fruits[1]
// fruits.splice(2, 1)
// console.log(fruits);

// Array programs
// Prints all the array elements
// console.warn(`Prints all the array elements`);
// let fruits = ["mango", "bannana", "apple", "chikko"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// print the fruit name grated than 5
// console.warn(`Prints all the array elements`);
// let fruits = ["mango", "bannana", "apple", "chikko"];
// for (let i = 0; i < fruits.length; i++) {
//   if(fruits[i].length>5)
//     console.log(fruits[i]);
// }

// result store it in Array without using inbuilt method
// console.warn(`Prints all the array elements`);
// let fruits = ["mango", "bannana", "apple", "chikko"];
// let fruits1 = [];
// for (let i = 0; i < fruits.length; i++) {
//     fruits1[fruits1.length]=fruits[i]
//   if(fruits[i].length>5)
// }
//     console.log(fruits1);

// Print the fruits name which ends with e
// console.warn(`Prints all the array elements`);
// let fruits = ["mango", "bannana", "apple", "chikko"];
// let fruits1 = [];
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].endsWith("e"))
//   fruits1[fruits1.length] = fruits[i];

// }
// console.log(fruits1);

// Print the fruits name which does not ends with e
// console.warn(`Prints all the array elements`);
// let fruits = ["mango", "bannana", "apple", "chikko"];
// let fruits1 = [];
// for (let i = 0; i < fruits.length; i++) {
//   if (!fruits[i].endsWith("e"))
//   fruits1[fruits1.length] = fruits[i];

// }
// console.log(fruits1);

// ptint only numbers from hetrogenous array
// let arr =["hi",100,true,null,200,'50']
// let fruits1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if ( typeof arr[i] == 'number')
//   fruits1[fruits1.length] = arr[i];

// }
// console.log(fruits1);

// print the even numbers from the array
// let arr =[1,2,3,4,5,6,7,8,9,10]
// let newarray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2==0)
//   newarray[newarray.length] = arr[i];

// }
// console.log(newarray);

// print the odd number from the array
// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let newarray1=[];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2==1)
//     newarray1[newarray1.length]=arr1[i];
// }
// console.log(newarray1);

// seperate the odd and even numebrs
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even=[];
// let odd=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1)
//     even[even.length]=arr[i];
//     else
//     odd[odd.length]=arr[i];
// }
// console.log(`Even number is ${even}`);
// console.log(`Even number is ${odd}`);

// Print only even numbers from the hetorogious array
// let arr = ["hi", 2, true, null, 4, 5, 6, 7, 8, 9, 10];
// let fruits1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0 && typeof arr[i] == "number")
//     fruits1[fruits1.length] = arr[i];
// }
// console.log(fruits1);

// Add all array elements
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum =0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum);

// Sum of all odd array elements
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) sum += arr[i];
// }
// console.log(sum);

// Sum of all even array elements of hetrogenus array
// let arr = ["hi",100, 25 , true, null,50,'50',30,'30'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1 && typeof arr[i] == 'number') sum += arr[i];
// }
// console.log(sum);

// Array methods
// push(): it is used to add the array elements at the ending index & it returns length of the array
// let arr = [100,200,300,304,400,900]
//  let l= arr.push("hii");
// console.log(arr);
// console.log(l);

// 1: pop :it is used to delete the array elements from the lasst and it delets only one array element
// let arr = [100,200,300,304,400,900]
//  let l= arr.push("hii");
// console.log(arr);

// arr.pop()
// console.log(arr);
// console.log(l);

//3 : Unshift : it is used to add the array elements from the first of the array
// let arr = [100,200,300,304,400,900]
// let l = arr.unshift("20")
// console.log(arr);
// console.log(l);

// 4 : shift : it is used to delete  the array elements from the first of the array
// let arr = [100,200,300,304,400,900]
// let l = arr.shift("20")
// console.log(arr);
// console.log(l);

// 5.  `spice()` :it is used to make both operations like add delete the array elements it returns delet elements
// let arr = [100,200,300,304,400,900]
// let l =arr.splice(1 , 2 ,"hii","jii")
// console.log(arr);
// console.log(l);

// 5.  `slice()`
// let arr = [100,200,300,304,400,900]
// let l =arr.slice(2,5)
// console.log(arr);
// console.log(l);

// 6.  `indexOf()`
// let arr = [100,200,100,304,100,900]
// console.log(arr.indexOf(100));
// console.log(arr.lastIndexOf(100));

// 7.  `lastIndexOf()`
// let arr = [100,200,100,304,100,900]
// console.log(arr.indexOf(100));
// console.log(arr.lastIndexOf(100));

// 8.  `includes()`
// let arr = [100,200,100,304,100,900]
// console.log(arr.includes(100));
// console.log(arr.includes(200));

// 9. `concat()`
// let arr = [100,200,100,304,100,900]
// console.log(arr.concat("hi"));
// console.log(arr.concat("hello"));

// let arr = [100,200,100,304,100,900]
// let arr1 = ["Hi","hello"]
// console.log(arr.concat(arr1));

// 10. `reverse()`
// let arr = [100,200,100,304,100,900,"hi"]
// console.log(arr);
// let rev = arr.reverse();
// console.log(rev);

// 11. `join()`
// let arr = [100,200,100,304,100,900,"hi"]
// console.log(arr);
// let rev = arr.join("-");
// console.log(rev);

// 12. `flat()` : it is used to cpnvert the multi dimensional array to the single array
// let arr = [100,200,[100,304],100,900,"hi"]
// console.log(arr);
// let rev = arr.flat();
// console.log(rev);

// created using with the higher ordder function
// 13. `forEach()`
// 14. `map()`
// 15. `filter()`
// 16. `reduce()`
// 17. `sort()`
// 18. `find()`

// todo : Example 1 :

// let cart = [
//     "Milk",
//     "Bread",
//     "Eggs",
//     "Rice",
//     "Coffee"
// ];

// let rev = cart.reverse();

// let result = rev.join("->");

// console.log(result);

// todo : Example 2 :
// let orders = [
//     "ORD1001",
//     "ORD1002",
//     "ORD1003",
//     "ORD1004",
//     "ORD1005"
// ];

// let searchOrder = "ORD1003";

// if(orders.includes(searchOrder)){
//     console.log(`Order found: ${searchOrder}`);
// }
// else{
//     console.log(`Order not found`);
// }

// todo : Example 3 :

// let locations = [
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Mumbai",
//     "Delhi"
// ];

// let rev = locations.reverse();
// let result = rev.join("->")
// console.log(result);

// todo : Example 4 :
// let cart = [
//     "Milk",
//     "Bread",
//     "Eggs",
//     "Rice"
// ];

// cart.push("Coffee");
// cart.unshift("Butter");
// cart.pop();
// cart.shift();
//  if(cart.includes("Eggs")){
//     console.log("Egg exisis");
//  }
//  else{
//     console.log("Egg does not  exisis");
//  }

// console.log(cart.indexOf("Rice"));

// let result = cart.join("->")

// console.log(rev);

// console.log("using the for loop");
// let arr = [10,20,40,50,30,50];
// for(i=0;i<arr.length;i++){
//     console.log("Index is "+i);
//     console.log("Elements are"+arr[i]);
// }

// using for ,fot in , and for off
// for in
// let arr = [10,20,40,50,30,50];
// for(let index in arr){
// console.log(arr[index]);
// }

// for off
// let arr = [1,2,3,4,5];
// for(let ele of arr){
//     if(ele%2==0)
//       console.log(ele);
// }

// let arr = ["hello","Hii"];
// for(let ele of arr){
//   console.log(ele);
// }
// for Each : its a higher order function
// let arr = [10, 20, 40, 50, 30, 50];

// for (let i = 0; i < arr.length; i++) {
// console.log(arr);
//   console.log(i);
//   console.log(arr[i]); //gives elements
// }

// console.log(arr);
// arr.forEach((ele) => {
//   console.log(ele);
// }); //gives elements

// console.log(arr);
// arr.forEach((ele, index) => {
//   console.log(ele);
//   console.log(index);
// }); //gives elements

// console.log(arr);
// arr.forEach((ele,index,arr) => {
//   console.log(ele);
//   console.log(index);
//   console.log(arr);
// }); //gives elements

// let arr = [10, 20, 40, 50, 30, 50];

// let newArray = [];

// For Each
// arr.forEach((ele)=>{
//     newArray[newArray.length] = ele + 2;
// })
// console.log(newArray);

// For of
// for ( ele of arr ) {
//     newArray[newArray.length] = ele + 2;
// }
// console.log(newArray);

// for

// for(let i =0;i<arr.length; i++){
//     newArray[newArray.length] = arr[i] + 2;
// }
// console.log(newArray);

// todo : map
// let arr = [10, 20, 40, 50, 30, 50];

// let newArray = [];

// let res = arr.map((ele)=>{
//        return(ele+2)        // insted of this => newArray[newArray.length] = ele + 2; | we use the return here which is not possuble in the others like gor each of anf in
// })
// console.log(res);

// let newArray = [];

// console.log(arr.map( ele => ele+2));

// ! TASK :

// let fruit = ["Appke", "Mango", "Bannana", "Orange", "Grapes"];

// let newArray = [];

// for (let i = 0; i < fruit.length; i++) {
//   newArray[newArray.length] = fruit[i].toUpperCase();
// }

// console.log(newArray);

// for of

// for( ele of fruit){
//    newArray[newArray.length] = ele.toUpperCase();
// }
// console.log(newArray);

// for in

// for( index in fruit){
//    newArray[newArray.length] = fruit[index].toUpperCase();
// }
// console.log(newArray);

// fpr each
//  fruit.forEach((ele)=>{
//     newArray[newArray.length] = ele.toUpperCase();
//  })
// console.log(newArray);

// Map

// let res = fruit.map((ele)=>{
//     return ele.toUpperCase();
// })

// console.log(fruit.map((ele) => ele.toUpperCase()));
/* for => normal for loop 
   for in => used for the index val of arr no function needed
   fro of => used for the element of the arr no function is needed
   for each=> used for all cases like index ele and also arr 
   map => its a higher order fun and also in this we can use the return statement and the function is necessary (arrow functionh)*/


// let arr =[1,2,3,4,5,7,]

// let res = arr.filter((ele)=>{
//     return ele%2==1
// })
// console.log(res);


// Example p : 2
let fruit = ["Appke", "Mango", "Bannana", "Orange", "Grapes"];

let res = fruit.map((ele)=>{
    if(ele.endsWith('e'))
        return ele
    ele
    return null
})
console.log(res);

// Filter :
// let res = fruit.filter((ele)=>{
//     return ele.endsWith('e')
// })
// console.log(res);
