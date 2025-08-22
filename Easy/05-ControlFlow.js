// ----------------> 1. If - Else ( Condtional Statements )
// if (condition) {...}
// else if (condition_2) {...}
// else {...}

// ------------------------ Ex-1
let a = 10,b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}



// ----------------> 2. Switch Statement ( Condtional Statements )
// switch(expression) {
//   case x:
     //   { code block....}
//     break;
//   case y:
     //   { code block....}
//     break;
//   default:
     //   { code block....}
// }

// -----------------  Ex.1
let day = "monday";
switch (day) {
  case "monday":
    console.log("Today is monday");
    break;
  case "tuesday":
    console.log("Today is tuesday");
    break;
  case "wednesday":
    console.log("Today is wednesday");
    break;
  case "tuesday":
    console.log("Today is thursday");
    break;
  case "friday":
    console.log("Today is friday");
    break;
  case "saturday":
    console.log("Today is saturday");
    break;
  case "sunday":
    console.log("Today is sunday");
    break;
  default:
    console.log("Don't know what day is today!");
}



// ----------------> 3. For Loop
// for(intialization; condition; Increment/Decrement){
//   console.log("For Loop")
// }

// -----------------  Ex
for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}



// ----------------> 4. While Loop
// while (condition) {
  // code block to be executed
// }

// ----------------
let i = 1;
while (i <= 5) {
  console.log("Hello World", i);
  i++;
}



// ----------------> 5. Do-While Loop
// let x;
// do{
//   // Block Of Codes
//   // Incremnt/Decrement
// } while(condition)

// -----------------  Ex
let i = 20;
do {
  console.log("HuXn WebDev");
  i++;
} while (i <= 400);




// ------------------> 6. Logical Operators
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true,
  let b = false;
const c = 4;

console.log(a && a); // true
console.log(a && b); // false

console.log(c > 2 && c < 2); // false

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE

console.log(a || b); // true
console.log(b || b); // false
console.log(c > 2 || c < 2); // true

// -----------------------------------
// 3. Logical NOT (!)
// TRUE if the operand is false and vice-versa.
console.log(!a); // false
console.log(!b); // true

// -----------------------------------
let password = "huxn-webdev";

if (password.length >= 8 && password.includes("web")) {
  console.log("VALID PASSWORD");
} else {
  console.log("Invalid password");
}



