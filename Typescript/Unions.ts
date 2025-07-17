/* ✅ Union Types in TypeScript
Union types allow a variable to hold one of several types.
It’s useful when a value can be of multiple possible types.

 */


/* 
Syntax:

let value: string | number;
 */

//Example:

function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101);       // ✅ number
printId("ABC123");  // ✅ string


// 🔹 Using Type Guards:
// To access specific methods or properties, narrow the type:

function printLength(value: string | string[]) {
  if (typeof value === "string") {
    console.log(value.length); // string method
  } else {
    console.log(value.length); // array method
  }
}

/* 
✅ Why Use Union Types?
To make code flexible but still type-safe

For functions or variables that work with multiple data types

For handling optional or mixed-type API responses 
*/