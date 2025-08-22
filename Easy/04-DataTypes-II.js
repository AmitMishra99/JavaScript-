//              # DataTypes : 
//      --------------------------
// ---> Type-2 : Non-Primitive DataTypes :
//                       1. Arrays
//                       2. Objects
//                       3. Functions


// 1. Arrays    ----------------------------------------------------------------------------
// An array is an object that can store multiple values at once. For example,

// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
// const newData = ["work", "exercise", 1, true];

// -----------------------------------
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

// Javascript Arrays built-in-function :-

const arr = [1,2,3,4,"Amit" , "Tipendra" ,100 ]
const arr1 = [1,22,30,4 ,100 ]

// 1.Includes  - return result as boolean
// console.log(arr.includes(100));   

// 2.Concat - reutrn result as final array by merging two arrays
// console.log(arr.concat(arr1))

// 3.push()
arr.push("Added from last")
// arr.pop()          --> Deleting the last elem from Array
arr.unshift("Added from first")
// arr.shift()     --> Deleting the first elem from Array

// 4.sort()
const str = ['Amit','sumit','Sanjana',"Tarak","ganga",'madhuri']
let len = str.length;
str.sort();
// console.log(str)

// 5. Slice
// console.log(str.splice(0,len/2))

// 6. Reverse 
str.reverse();
console.log(str)
console.log(str.join(" -> "))

const num = [23,4,23,4,5,23,456,67,1]
console.log(num.sort()
)

                                         // Part - 1


// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");

// CONCAT
// const fruits = ["apples", "pomegranate", "mango"];
// let moreFruits = ["strawberries", "pineapple", "grapefruit"];
// let totalFruits = fruits.concat(moreFruits);

console.log(fruits);


                // Part - 2

// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array

let pl = ["JavaScript", "Golang", "Python", "php"];
let numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 3));
console.log(pl.sort());


// 2. Objects    ----------------------------------------------------------------------------
// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}

// ------------------------
// Creating Object
let person = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};

// Accessing Properties
console.log(typeof person);
console.log(person.location[1]);
console.log(person["isProgrammer"]);
// console.log(person[isProgrammer]); // ERROR -> without quotes

// Updating Properties
console.log(person.firstName);
console.log((person.firstName = "Sam"));

// Add new properties
console.log((person.isProgrammer = false));
console.log(person);

