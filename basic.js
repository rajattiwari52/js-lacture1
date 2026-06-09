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



//leacture 2
"use strict"; // treat all js code as newer version

//alert(3 + 4); // we are using nodejs ,not browser so alert will not work 
// there are some data types in js
// 1. number => 2 to power 53 -1;
// 2. bigint  
// 2. string
// 3. boolean => true or false
// 4. null => empty value , standalone value
// 5. undefined
// 6. symbol (ES6) => unique identifier
// 7. object => collection of key value pairs

console.log(typeof 123); // number
console.log(typeof 123n); // bigint
console.log(typeof "hello"); // string        
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a bug in js, but it is kept for backward compatibility)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof { name: "John", age: 30 }); // object
