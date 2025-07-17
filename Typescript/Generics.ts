/* ✅ Generics in TypeScript
Generics allow you to write reusable, flexible, and type-safe code.
They act like placeholders for types and are replaced when the function, class, or interface is used. */

// 🔹 1. Generic Function

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(123);

// OR, TypeScript can infer the type:


let output = identity("Siva");  // T inferred as string

// 🔹 2. Generic Array

function printArray<T>(arr: T[]): void {
  arr.forEach(item => console.log(item));
}

printArray<number>([1, 2, 3]);
printArray<string>(["A", "B", "C"]);

// 🔹 3. Generic Interface

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 42 };


// 🔹 4. Generic Class

class DataHolder<T> {
  data: T;
  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

const holder = new DataHolder<string>("Teja");
console.log(holder.getData());

// 🔹 5. Multiple Generics

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const result = pair<string, number>("Siva", 100);

/* 
🌟 Why use Generics?
Prevents type duplication

Improves reusability

Ensures type safety */