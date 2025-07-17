// ✅ void in TypeScript (Simple Explanation)
// void is a special type in TypeScript that means:
// 👉 The function does not return any value.

// 🔹 When to use void?
// Use void as a return type when a function performs an action but doesn't return anything.

//Syntax:-
//function functionName(): void {
  // do something, no return
// }

function printMessage(message:string){
    console.log(`this is my ${message} `);

}

printMessage("message");
