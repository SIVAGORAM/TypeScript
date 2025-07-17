// ✅ Return Type Annotations in TypeScript (Simple Explanation)
// Return annotations specify what type a function should return.


//Syntax:-
// function functionName(params): ReturnType {
//   // return value
// }

// regular func:-

function double1(x:number): number{
    return x*x;
}

const res2 = double1(2);
console.log(res2)


// Arrow Func:-

const double2 = (x:number):number => x*x;
console.log(double2(2));
