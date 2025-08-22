//            #  DataTypes  : 
//      --------------------------
// ---> Type-1 : Primitive DataTypes :
//                       To Check the dataType use typeof data
//                       1. Numbers  ->         float , number , anycould be number
//                       2. Strings      ->          " " , ' ' , ` `
//                       3. Boolean
//                       4. undefined
//                       5. null
//                       6. bigINT
//                       7. Symbol
                


// 1. Numbes    ----------------------------------------------------------------------------
const randomNumber = 10200;
const favNumber = 21;
let num = 2;

// Basic Math
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 4);
console.log(num++);
console.log(++num);
console.log(num+=15);
console.log(num--);
console.log(num-=15);
console.log(--num);


// 2. Strings  ------------------------------------------------------------------------

let firstName = "String ";
let lastName = "Completed ";

//1. CONCATENATION
let fullName = firstName + lastName;
// let fullName = firstName + " " + lastName
// let fullName = firstName.concat(lastName);
console.log(fullName);

//2. APPEND
// firstName += "Added Something"
// console.log(firstName);

//3. LENGTH
// console.log(firstName.length);

//4. CASES
// const upperCase = firstName.toUpperCase()
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

//5. SLICE
// console.log(fullName.slice(1, 4));

//6. SPLIT & JOIN
// console.log(fullName.split(" ").join("-"));

//7. INCLUDES
// console.log(fullName.includes("m"));

//8. TRIM
// console.log(fullName.trim());


// 4.. Type Conversion  ------------------------------------------------------------------------

let amount = 100;
let money = "100";
let floatValue = "99.5";

// - Convert string to number
// money = parseInt(amount);
// floatValue = parseFloat(floatValue);
// money = +money;
// money = Number(money)
// console.log(money)

//  - Convert number to string
// amount = amount.toString();
// amount = String(amount);
// amount = amount + " ";
// console.log(amount)

// 2. Booleans    ----------------------------------------------------------------------------
let isLoggedIn = NaN;
let numbers = 10;
console.log(numbers + undefined);

// This all are falsy value 
// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (empty strings)

// Rest of all are Truthy value 


// Equality Operator    ---------------------------------------------------------------------

// ***********************************
// RELATIONAL OPERATORS
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// ***********************************
// EQUALITY OPERATORS
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10);

console.log("completed")
