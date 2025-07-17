// ✅ Type Aliases in TypeScript (Simple Explanation)
// Type Aliases let you create a custom name for a type.
// This is useful when you want to reuse a complex type or make your code easier to read.

//Syntax:-
// type AliasName = Type;

// Example 1: Basic Type Alias

type Username = string;

let user1: Username = "Siva";


type Person ={
    name:string;
    age : number;
};

function printPerson(person:Person){
    console.log(`Nmae:${person.name},Age:${person.age}`);

}

const myperson:Person={name:"Alice",age:25};
printPerson(myperson);