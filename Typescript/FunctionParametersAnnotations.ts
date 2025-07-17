// Functions Parameters annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

//Syntax:-
//function functionName(param1: Type1, param2: Type2): ReturnType {
  // function body
// }

// regular Functions

function addone(num:number){
    return num + 1;

}

const res1 = addone(3);

console.log(res1);


// Arrow FUnctins:-

const double =(x:number,y:number)=>x*y;
const res = double(2,10);
console.log(res)
