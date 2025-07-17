/* ✅ Object-Oriented Programming (OOP) in TypeScript
TypeScript brings full support for OOP features like classes, objects, inheritance, encapsulation, polymorphism, and abstraction.

 */

// 🔹 1. Classes & Objects

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const personOOP = new Person("Siva");
personOOP.greet(); // Output: Hello, my name is Siva


// 🔹 2. Inheritance

class Animal {
  move() {
    console.log("Animal moves");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.move(); // Output: Animal moves
dog.bark(); // Output: Dog barks


/* 🔹 3. Access Modifiers
public: accessible everywhere (default)

private: accessible only inside the class

protected: accessible in the class and its subclasses */

class Car {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand() {
    console.log(`Brand: ${this.brand}`);
  }
}

// 🔹 4. Getters and Setters

class Employee {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(amount: number) {
    if (amount > 0) {
      this._salary = amount;
    }
  }
}

const emp = new Employee();
emp.salary = 5000;
console.log(emp.salary); // Output: 5000


// 🔹 5. Polymorphism

class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

let shape: Shape = new Circle();
shape.draw(); // Output: Drawing a circle


// 🔹 6. Abstract Classes

abstract class Animal {
  abstract sound(): void;

  move() {
    console.log("Animal moves");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
