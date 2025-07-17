// ✅ Intersection Types in TypeScript
// Intersection types combine multiple types into one. A value of an intersection type must satisfy all the types being combined.

//🔹 Syntax:

type A = { name: string };
type B = { age: number };

type C = A & B;  // Intersection type

// Now C must have both name and age properties.

// 🔹 Example:

type PersonBasic = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type PersonEmployee = PersonBasic & Employee;

const worker: PersonEmployee = {
  name: "Siva",
  employeeId: 101
};

/* ✅ worker must have both name and employeeId.

✅ Why Use Intersection Types?
Combine reusable types

Enforce strict type structures

Improve type safety in large apps */