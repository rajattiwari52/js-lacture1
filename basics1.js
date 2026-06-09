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




//*******************operations ********* */
 
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


//comparison operators  -->    answer true or false
   console.log(5 > 3); // true
    console.log("2"< 3); // false, not predictable because of string comparison
    console.log(undefined < 0); // false, not predictable because of string comparison
    console.log(null > 0); // false, not predictable because of string comparison
    console.log(null == 0); // false, not predictable because of string comparison
    console.log(null >= 0); // false, not predictable because of string comparison
    console.log(null <= 0); // true, not predictable because of string comparison
 
    console.log(5 ==="5"); // false (strict equality, no type coercion)  isme data type bhi check hota hai
    


