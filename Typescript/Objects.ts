// ✅ Objects in TypeScript (Simple Explanation)
// In TypeScript, an object is a collection of key-value pairs, where you can also define the types of keys and values to ensure safety.

let person: { name: string; age: number } = {
  name: "Siva",
  age: 22
};

// name must be a string

// age must be a number

// Accessing Object Properties
console.log(person.name); // Output: Siva
console.log(person.age);  // Output: 22


// 🔹 Updating Object Properties

person.age = 23;

// 🔹 Optional Properties (?)

let user: { name: string; age?: number } = {
  name: "Teja"
};

// age is optional


//🔹 Nested Objects

let student: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Ram",
  address: {
    city: "Kurnool",
    pincode: 518001
  }
};


//🔹 Object as a Function Parameter

// Function to print user details
function printUserDetails(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old`);
}

printUserDetails({ name: "Krishna", age: 25 });
