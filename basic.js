// const accountId = 309842;   // never change
// let accountName = "John Doe";  // it is a blocked scope avriable , can change
// var accountBalance = 1000.50;  // can change
//   accountcity = "New York"; // valid because var allows undeclared variables (not recommended)
//  accountId = 30; // error: cannot reassign a const
 
// console.log(accountId);
// console.log(accountName);
// console.log(accountBalance);
//  accountName = "rajattiwari"; // valid because accountName is let

//  table output example:
// console.table([{ accountId, accountName, accountBalance ,accountcity}]);



// leacture 2
// "use strict"; // treat all js code as newer version

// alert(3 + 4); // we are using nodejs ,not browser so alert will not work 
// there are some data types in js
// 1. number => 2 to power 53 -1;
// 2. bigint  
// 2. string
// 3. boolean => true or false
// 4. null => empty value , standalone value
// 5. undefined
// 6. symbol (ES6) => unique identifier
// 7. object => collection of key value pairs

// console.log(typeof 123); // number
// console.log(typeof 123n); // bigint
// console.log(typeof "hello"); // string        
// console.log(typeof true); // boolean
// console.log(typeof null); // object (this is a bug in js, but it is kept for backward compatibility)
// console.log(typeof undefined); // undefined
// console.log(typeof Symbol("id")); // symbol
// console.log(typeof { name: "John", age: 30 }); // object



// ********************data types**************************
// // datatype conversion

// let score = 100 
// let valueInNumber = Number(score) // converts to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 100

// //alphanumeric string to number
// let str = "123abc"
// let valueInNumber2 = Number(str) // converts to NaN (Not a Number)
// console.log(typeof valueInNumber2); // number
// console.log(valueInNumber2); // NaN

// // boolean to number
// let bool = true
// let valueInNumber3 = Number(bool) // converts to 1
// console.log(typeof valueInNumber3); // number
// console.log(valueInNumber3); // 1

// // null value
// let nullValue = null
// let valueInNumber4 = Number(nullValue) // converts to 0
// console.log(typeof valueInNumber4); // number
// console.log(valueInNumber4); // 0   

// // undefined value
// let undefinedValue = undefined
// let valueInNumber5 = Number(undefinedValue) // converts to NaN
// console.log(typeof valueInNumber5); // number
// console.log(valueInNumber5); // NaN 

// let typeofNaN = NaN
// console.log(typeof typeofNaN); // number
// console.log(typeofNaN); // NaN




// *******************operations ********* */
 
// console.log(5**2); // 25
// // addition OF string
// let str1 = "hello"
// let str2 = "world"
// console.log(str1 + " " + str2); // hello world 

// //
// console.log("5" + 2 + 2); // 522 (string concatenation)
// console.log(2 + 2 + "5"); // 45 (number addition followed by string concatenation)

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+""); // 0

// let gamecounter = 100
// gamecounter++ // post increment (returns the value before incrementing)
// console.log(gamecounter); // 101


// comparison operators  -->    answer true or false
//    console.log(5 > 3); // true
//     console.log("2"< 3); // false, not predictable because of string comparison
//     console.log(undefined < 0); // false, not predictable because of string comparison
//     console.log(null > 0); // false, not predictable because of string comparison
//     console.log(null == 0); // false, not predictable because of string comparison
//     console.log(null >= 0); // false, not predictable because of string comparison
//     console.log(null <= 0); // true, not predictable because of string comparison
 
//     console.log(5 ==="5"); // false (strict equality, no type coercion)  isme data type bhi check hota hai


// ***********************data types**************************
// on the basis of storeing value
// 1. primitive data types => number, bigint, string, boolean, null, undefined, symbol  ye sab call by value hota hai mtlab inme stored value directly variable 
// me store hota hai, aur jab hum ek variable ko dusre variable me assign karte hai to value copy hoti hai, dono variable alag alag memory location pe store hote
//  hai, isliye ek variable me change karne se dusre variable me koi effect nahi hota hai.
 
// const id = symbol("23820"); // unique identifier
// console.log(id); // Symbol(23820)   
// console.log(typeof id); // symbol;

// const bignum = 1234567890123456789012345678901234567890n; // bigint literal
// console.log(bignum);

// const temperature = null; // number literal
// console.log(typeof temperature); // object  

// 2. non-primitive data types => object (array, function, date, etc.) ye sab call by reference hota hai mtlab inme stored value variable me store nahi hota hai,
//  balki uska reference (memory address) variable me store hota hai, aur jab hum ek variable ko dusre variable me assign karte hai to reference copy hota hai,
//  dono variable same memory location pe store hote hai, isliye ek variable me change karne se dusre variable me bhi change hota hai.

//  const heros = ["superman", "batman", "spiderman"]; // array is a non-primitive data type

//  let myobject = {
//     name: "John", age: 30, city: "New York" // object is a non-primitive data type
//       };

//       const myfunction = function() {
//         console.log("Hello World"); // function is a non-primitive data type
//         // function is a first class citizen in js, mtlab hum function ko variable me store kar sakte hai, function ke argument me pass kar sakte hai, function ke return value me use kar sakte hai
//       }

// //type of operator => to check the data type of a variable
// console.log(typeof heros); // object (array is a type of object)
// console.log(typeof myobject); // object
// console.log(typeof myfunction); // function (function is a special type of object)  
// console.log(typeof bignum); // bigint
// console.log(typeof id); // symbol
// console.log(typeof temperature); // object (null is a special type of object)   

// js is a dynamically typed language, mtlab hum variable ko declare karte time uska data type specify nahi karte hai, js automatically data type assign kar deta
//  hai based on the value assigned to the variable.


//***************************memoery ************************* */

//stack(primitive data types) and heap (non-primitive data types) memory allocation
//stack memory => when a variable is assigned to another , you get a copy of the value,
//and both variables are independent of each other, because they are stored in different memory locations.

// heap memory => when a variable is assigned to another, you get a reference to the same value,
//  and both variables are dependent on each other, because they are stored in the same memory location.

let myyoutube = "rajattiwari";
let anotheryoutube = myyoutube; // copy of the value is created in stack memory
  anotheryoutube = "rajattiwari2"; // change the value of anotheryoutube
console.log(anotheryoutube); // rajattiwari
console.log(myyoutube); // rajattiwari (myyoutube is not affected because it is stored in a different memory location)

let user1 = {
   name: "rajattiwari",
    age: 30
   };
   let user2 = user1; // reference to the same object is created in heap memory
   user2.name = "rajattiwari2"; // change the name property of user2
   console.log(user2.name); // rajattiwari2
   console.log(user1.name); // rajattiwari2 (user1 is affected because it is 
                           // stored in the same memory location as user2)
                           

/************************string********************* */
 // string declaration
 const game = new String("football"); // string object
 console.log(game); // string literal
 console.log(typeof game); // object (string is a primitive data type, but when we create a string object using the String constructor, it becomes an object)

const myname = "rajattiwari";
const repocount = 1000;

console.log(myname + repocount); // rajattiwari1000 (string concatenation because of the presence of string
console.log(`hello my name is ${myname} and my repo count is ${repocount}`); // (``)backticks are used for template literals, which allow for string interpolation and multi-line strings

//uses of key value pairs in js

console.log(myname.length); // 11 (length property of string)
console.log(myname.toUpperCase()); // RAJATTIWARI (toUpperCase method of string)
console.log(myname.toLowerCase()); // rajattiwari (toLowerCase method of string)
console.log(myname.charAt(2)); // j (charAt method of string)
console.log(myname.indexOf("t")); // 5 (indexOf method of string, returns the index of the first occurrence of the specified value, or -1 if not found)
console.log(myname.includes("tti")); // true (includes method of string, returns true if the string contains the specified value, otherwise false)
console.log(myname.startsWith("raja")); // true (startsWith method of string, returns true if the string starts with the specified value, otherwise false)
console.log(myname.endsWith("wari")); // true (endsWith method of string, returns true if the string ends with the specified value, otherwise false)    

const newstring  = gameName.substring(0, 4); // substring method of string, returns the part of the string between the start and end indexes, or to the end of the string if the end index is omitted
console.log(newstring); // foot (substring from index 0 to 4, not including 4)

const newstring2 = gameName.slice(-6, 4); // slice method of string, returns the part of the string between the start and end indexes, or to the end of the string if the end index is omitted
console.log(newstring2); // ball (slice from index -6 to 4, not including 4)

const newstring1 = "   rajat  " ;
console.log(newstring1); // "   rajat  " (string with whitespace)
console.log(newstring1.trim()); // "rajat" (trim method of string, removes whitespace from both ends of the string) 
// trim starts from es5, it is used to remove whitespace from both ends of a string, but it does not change the original string, it returns a new string with the whitespace removed.      
// trim endsWith method of string, returns true if the string ends with the specified value, otherwise false)

const url = "https://www.youtube.com/channel/UC9r3qWwYjvH8sQhXyZtH7A";
url.replace(url.replace('uc9r', 'rajat')); // replace method of string, returns a new string with some or all matches of a pattern replaced by a replacement, the original string is not changed
console.log(url); // https://www.youtube.com/channel/UC9r3qWwYjvH8sQhXyZtH7A (original string is not changed)

console.log(url.includes("youtube")); // true (includes method of string, returns true if the string contains the specified value, otherwise false )

console.log(gameName.split("o")); // ["f", "tball"] (split method of string, splits a string into an array of substrings, and returns the new array, the original string is not changed 
