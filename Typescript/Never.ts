// ✅ What is never in TypeScript?
// never is a type used to indicate that:

// A function will never return anything — not even undefined.

// A variable can never have any value.

// A code path should never be reached (helps catch logic errors).

// 🔹 Real-World Meaning:
// "never means this should never happen."


//Example 1: Function that throws an error

function crash(): never {
  throw new Error("Something went wrong!");
}

//❌ It doesn’t return anything — it crashes the program.



//  Example 2: Infinite Loop

function loopForever(): never {
  while (true) {
    console.log("Running...");
  }
}


//❌ It never ends, so it never returns.

//  Example 3: Unreachable code (Exhaustiveness check)

type Color = "red" | "green";

function getColorCode(color: Color): string {
  switch (color) {
    case "red":
      return "#FF0000";
    case "green":
      return "#00FF00";
    default:
      // This should never happen
      const neverColor: never = color; // Error if a new color is added and not handled
      return neverColor;
  }
}

// ✅ Helps catch errors at compile-time when all cases are not handled.
