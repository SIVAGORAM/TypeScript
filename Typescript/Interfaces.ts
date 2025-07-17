/* ✅ Interfaces in TypeScript
Interfaces define a contract (structure) for objects, classes, or functions. They help with type checking and code reusability. */

// 🔹 1. Basic Interface

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Siva",
  age: 22
};

// 🔹 2. Optional Properties

interface Student {
  name: string;
  grade?: number; // Optional
}

const s1: Student = { name: "Teja" }; // OK


// 🔹 3. Readonly Properties

interface Book {
  readonly isbn: string;
  title: string;
}

const book: Book = { isbn: "123-456", title: "TS Basics" };
// book.isbn = "789-000"; ❌ Error


// 🔹 4. Function Types

interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;


// 🔹 5. Interface for Classes

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof!");
  }
}


// 🔹 6. Extending Interfaces

interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

const emp: Employee = {
  name: "Hemanth",
  id: 101
};


