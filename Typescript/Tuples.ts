/* ✅ Tuples in TypeScript
A tuple is a special type of array where the types of elements are known and fixed in order. */

/* 🔹 Syntax:

let tupleName: [type1, type2, type3, ...];
 */

// 🔹 Example:

let person1: [string, number];

person1 = ["Siva", 25];      // ✅ valid
// person1 = [25, "Siva"];   // ❌ Error: Type 'number' is not assignable to type 'string'


//🔹 Accessing Tuple Values:

console.log(person1[0]); // "Siva"
console.log(person1[1]); // 25


// 🔹 Using with Optional Elements:

let employee: [string, number?];

employee = ["Teja"];           // ✅ valid
employee = ["Teja", 101];      // ✅ valid


// 🔹 With Readonly Tuples:

let point: readonly [number, number] = [10, 20];
// point[0] = 30;  // ❌ Error: Cannot assign to '0' because it is a read-only property


/* ✅ Why Use Tuples?
To represent fixed collections of values of different types.

Great for return types from functions (e.g., [data, error]).

Useful in destructuring. */

