/* ✅ Type Narrowing in TypeScript
Type Narrowing is the process of refining a broader type (like string | number) into a more specific one within a conditional block — so TypeScript knows exactly what type you're working with. */

// 🔹 1. Using typeof

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id.toFixed(2));
  }
}

// 🔹 2. Using in Operator

type User = { name: string; };
type Admin = { name: string; isAdmin: boolean; };

function checkRole(person: User | Admin) {
  if ("isAdmin" in person) {
    console.log("Admin user");
  } else {
    console.log("Regular user");
  }
}

// 🔹 3. Using instanceof

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// 🔹 4. Using Type Predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}


// 🌟 Summary
// ✅ Use typeof for primitives
// ✅ Use in for checking property existence
// ✅ Use instanceof for class-based narrowing
// ✅ Use type predicates for custom logic