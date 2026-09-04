console.warn(`Strings`);
// String Concatination
// let str = "javascript"
// console.log(str);
// console.log("i love"+str);
// console.log('i love'+str);

// console.log("i love",str);
// console.log('i love',str);

// string interpolution

// console.log(`i love ${str}`);

// String Methods

// let a = "javascript"
// console.log(typeof a);
// console.log(a.length);
// console.log(a[2]);

// → charAt() and at() are used to get a character from a string based on its index position.

// → In charAt() we can work only with positive index not with negative index (in negative index it return the empty string).

// → In at() we can work with both positive and negative index.
// let text = "javascript"

// let x = text.charAt(7)
// console.log(x);
// console.log(text.charAt(-7));
// console.log(text.at(-7));
// console.log(text.at(7));

// it returnd the ascii value of the character at the specified index position
// console.log(text.charCodeAt(7));

// Startwith endwith
// let text = "javascript"
// console.log(text.startsWith('java'));
// console.log(text.startsWith('a'));
// console.log(text.startsWith('j'));
// console.log(text.startsWith('a',1));

// console.log(text.endsWith('script'));
// console.log(text.endsWith('t'));
// TODO : toUpperCase() , toLowerCase()
/*
-> toUpperCase() is convert complete string to Upper case
-> toLowerCase() is convert complete string to Lower case
*/
// let strSample = "JavaScript";
// console.log(strSample);                     // JavaScript
// console.log(strSample.toUpperCase());       // JAVASCRIPT
// console.log("Hello".toLowerCase());         // hello

// TODO : startsWith() , endsWith()
/*
-> startsWith() Checks whether the string starts with specified text
    syntax : string.startsWith(searchString , indexPosition)
-> endsWith() Checks whether the string ends with specified text.
    syntax : string.endsWith(searchString , length)
-> NOTE : both returns the boolean value(true / false)
*/
// let textVal = "javascript";
// console.log(textVal.startsWith('java'));    // true
// console.log(textVal.startsWith('a'));       // false
// console.log(textVal.startsWith('j'));       // true
// console.log(textVal.startsWith('a', 1));    // true

// console.log(textVal.endsWith('script'));    // true
// console.log(textVal.endsWith('t'));         // true
// console.log(textVal.endsWith('s'));         // false

// todo : indexof() lastindexof()
//  indexof() & lastIndexOf() used to check index position of the character, if character is presetn it returns index position or else 1
// indexof() is returns the 1st occurance of index,lastindexof() is returns the last occcurance of index
// let text = "javascript"
// console.log(text.indexOf('a'));
// console.log(text.lastIndexOf('a'));
// console.log(text.indexOf('z'));

// todo : includes
/* includes() method is used to check wherher a string character is present ot not & it returns boolean(T/F)
 */
// let text = "javascript"
// console.log(text.includes('j'));
// console.log(text.includes('z'));

// todo : Substriing() , substr(), slice()
// string.substring(startindes,endindex)
// string.substring(startindes,length)
// string.slice(startindex,length)
// let text = "javascript";
// console.log(text.substring(0, 4));
// console.log(text.substr(1, 4));
// console.log(text.slice(0, 4));
// console.log(text.slice(-8,8));
// console.log(text.slice(-2,2));
// console.log(text.slice(4,));
// console.log(text.slice(-4,3));

// repeat()
// it is used to repeat the value for given number of times
// let text = "javascript ";
// console.log(text);
// console.log(text.repeat(10));

// trim()
// It is used to removr the extra space from starting and ending of the string 
// let text = "           javascript           ";
// console.log(text.length);
// console.log(text);
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());

// split
// it is used to convert the string to the array
// let str = "i love the javascript"
// console.log(str);
// console.log(str.split());   // it converts the complete string
// console.log(str.split(" ")); //splits the words
// console.log(str.split("")); // splite the characters

// it is used to convert the arry to the string
// let arr = ["hi","hello","bye","bye"]
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(" "));

// concat()

// let str = "hello"
// let str1="dinga"
// console.log(str.concat(str1));
// console.log(str1.concat(str));
// console.log(str1.concat(" how are u...!"));


// replace

// let str = "i love the javascript"
// console.log(str);
// console.log(str.replace("java","JAVA"));
// console.log(str.replaceAll("java","JAVA"));

// padstart(length,what we want to add) padend()
// let str = "5"
// console.log(str);
// console.log(str.padStart(3,'00'));
// console.log(str.padEnd(3,'00'));


// let str = "javascript";

// for (let i = 97; i <= 122; i++) {
//     let char = String.fromCharCode(i);

//     if (
//         char == 'a' ||
//         char == 'e' ||
//         char == 'i' ||
//         char == 'o' ||
//         char == 'u'
//     ) {
//         console.log(char);
//     }
// }

// let str = "javascript";
// let count = 0;
// for (let i = 0; i <= str.length; i++) {
//     if ('aeopu'.includes(str[i])) {
//         count++;
//     }
// }
//     console.log(count);

// todo codunt spaces
// let str = "i love javascript";
// let count = 0;
// for (let i = 0; i <= str.length; i++) {
//     if (' '.includes(str[i])) {
//         count++;
//     }
// }
//     console.log(count);

// todo remove spaces
// todo codunt spaces
// let str = "i love javascript";
// console.log(str.replaceAll(" ",""));

