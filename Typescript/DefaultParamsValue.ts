//✅ Default Parameter Values in TypeScript (Simple Explanation)
// A default parameter value means:
// 👉 If the caller doesn’t pass a value, TypeScript will use the default.


//Syntax:-
// function functionName(param: Type = defaultValue): ReturnType {
//   // function body
// }

function greet(person ="Anononymous"){
    return `Hello ${person}`;

}

const Result = greet("Siva");

console.log(Result);