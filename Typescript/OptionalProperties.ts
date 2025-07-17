// Optional properties are properties that may or may not be present in an object.

// You mark them using a ? (question mark) after the property name.

// Syntax:

// type TypeName = {
//   requiredProp: Type;
//   optionalProp?: Type;
// };

// Example:

type OptionalUser = {
  name: string;
  age?: number;  // Optional property
};

let userA: OptionalUser = { name: "Siva" };
let userB: OptionalUser = { name: "Teja", age: 22 };

// ✅ Both userA and userB are valid because age is optional.

// 🔹 Accessing Optional Properties

function printUser(user: OptionalUser) {
  console.log(user.name);
  
  if (user.age !== undefined) {
    console.log("Age:", user.age);
  }
}

// ✅ Why use optional properties?

// Useful for partial data (like forms, APIs)

// Keeps your types flexible and safe

// Avoids unnecessary undefined errors
