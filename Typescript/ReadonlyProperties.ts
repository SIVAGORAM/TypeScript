// ✅ Readonly Properties in TypeScript (Simple Explanation)
// readonly is a keyword in TypeScript that makes object properties unchangeable after they are assigned.

// 🔒 Once set, you cannot modify a readonly property.

// 🔹 Syntax:

/* type TypeName = {
  readonly propertyName: Type;
}; */

// 🔹 Example:

type User = {
  readonly id: number;
  name: string;
};

const readonlyUser: User = {
  id: 101,
  name: "Siva"
};

readonlyUser.name = "Teja";     // ✅ OK
// readonlyUser.id = 102;          // ❌ Error: Cannot assign to 'id' because it is a read-only property

/* ✅ Why use readonly?
To protect important properties from accidental changes

Useful for things like:

IDs

Timestamps

Constants inside objects */

// 🔸 Works with arrays too:

const numbers: readonly number[] = [1, 2, 3];

// numbers.push(4);     ❌ Error: Property 'push' does not exist on type 'readonly number[]'

/* ✅ Summary Table

| Feature             | Description                                |
| ------------------- | ------------------------------------------ |
| `readonly` property | Cannot be reassigned after initialization  |
| Use case            | IDs, constants, fixed configuration values |
| Arrays              | Prevent adding/removing items              |
 */
