/* ✅ Literal Types in TypeScript
Literal types allow you to specify exact values a variable can hold, rather than just a general type like string or number.

*/

//🔹 Example – String Literal Type:

let direction: "left" | "right" | "up" | "down";

direction = "left";   // ✅ valid
direction = "up";     // ✅ valid
// direction = "top";    // ❌ Error: Type '"top"' is not assignable


// 🔹 Example – Number Literal Type:

let statusCode: 200 | 404 | 500;

statusCode = 200;   // ✅
statusCode = 404;   // ✅
// statusCode = 201;   // ❌

// 🔹 Using with Functions:

function handleResponse(status: 200 | 404) {
  if (status === 200) {
    console.log("Success");
  } else {
    console.log("Not Found");
  }
}

/* 
✅ Why Use Literal Types?
To restrict values to specific allowed options

For better auto-completion and type safety

Common in state machines, API responses, and event types 

*/