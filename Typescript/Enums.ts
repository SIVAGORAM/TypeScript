/* ✅ Enums in TypeScript
Enums (short for Enumerations) allow you to define a set of named constants. They make your code more readable and less error-prone when dealing with sets of related values.

🔹 Types of Enums
Numeric Enums

String Enums

Heterogeneous Enums (rarely used) */

// 🔸 1. Numeric Enums

enum Direction {
  North,    // 0
  East,     // 1
  South,    // 2
  West      // 3
}

let dir: Direction = Direction.South;
console.log(dir);  // Output: 2

//You can also start with a custom value:

enum Status {
  Started = 1,
  InProgress,
  Done
}
console.log(Status.Done); // Output: 3


//🔸 2. String Enums

enum Status {
  Pending = "PENDING",
  Active = "ACTIVE",
  Completed = "COMPLETED"
}

let current: Status = Status.Active;
console.log(current);  // Output: "ACTIVE"


//🔸 3. Heterogeneous Enums (Not recommended often)

enum Mixed {
  Yes = "YES",
  No = 0
}

/* 🔹 Why use Enums?
Improves code readability

Prevents magic numbers/strings

Easy to maintain and update */

//🔹 Extra: Reverse Mapping (Only for Numeric Enums)

enum Colors {
  Red = 1,
  Green,
  Blue
}

console.log(Colors[2]); // Output: "Green"



