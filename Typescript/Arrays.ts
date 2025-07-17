// ✅ Array Types in TypeScript (Simple Explanation)
// An array in TypeScript is a special type of object that can store multiple values of the same type in one variable.

// 🔹 Why use array types in TypeScript?
// Because TypeScript allows you to specify what type of data your array will store. This helps:

// Prevent errors

// Improve code suggestions (auto-complete)

// Catch mistakes during development

// 🔹 Syntax 1: Using type[] format
 
// let numbers: number[] = [1, 2, 3];
// let names: string[] = ["Siva", "Teja"];
// ✅ This means:

// numbers is an array of numbers only.

// names is an array of strings only.

// 🔹 Syntax 2: Using Array<type> format

// let marks: Array<number> = [80, 85, 90];
// let fruits: Array<string> = ["apple", "banana"];
// 👉 Same meaning as above. Just a different style.

// 01
const nums: number[] =[1,2,3,4];
console.log(nums);

const str: string[] = ['one','two','three'];
console.log(str);



// const items: string[]=[];
// items.push("Keyboard");

// console.log(items);

//02

