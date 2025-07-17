📘 Declaration Files in TypeScript (.d.ts)

Declaration files (with .d.ts extension) describe the shape of JavaScript code to TypeScript. They allow TypeScript to understand the types of plain JS libraries, global variables, or modules without TypeScript code.

✅ When to Use Declaration Files
You're using a JavaScript library without built-in TypeScript support.

You want to separate type definitions from implementation.

You’re creating a library/package to be used by others.


🧩 Basic Syntax

// my-lib.d.ts
declare function greet(name: string): void;

declare const version: string;

declare namespace MyLib {
  function sayHello(): void;
}

These are just type declarations — they don’t generate JavaScript code.

📦 For Modules

// math-utils.d.ts
declare module "math-utils" {
  export function add(a: number, b: number): number;
  export const version: string;
}

Then you can use it like:


import { add } from "math-utils";

🔁 Ambient Declarations:-

// global.d.ts
declare global {
  interface Window {
    myAppVersion: string;
  }
}

You must import this file at least once in your code to activate:


/// <reference path="./global.d.ts" />
Or include it in tsconfig.json:

json

{
  "include": ["src", "types"]
}


📥 Using Third-Party JS Libraries
Install DefinitelyTyped types:


npm install --save-dev @types/lodash
You can now use lodash with autocomplete and type checking.

🛠️ Creating a .d.ts file for your own library
If you're building your own package and want to publish types:

You can write index.d.ts manually

Or use tsc to generate types:


// tsconfig.json
"declaration": true,
"emitDeclarationOnly": true,
"declarationDir": "./types"


Run:

bash

npx tsc
