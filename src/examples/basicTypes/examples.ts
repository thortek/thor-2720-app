export function basicTypesNumber() {
  return {
    title: "Number Types in TypeScript",
    explanation:
      "This section covers basic types in TypeScript.  Here you see examples of the number and string data types.",
    code: `
// Example of number type
let decimal: number = 10;           // Regular decimal
let hex: number = 0xf00d;          // Hexadecimal
let binary: number = 0b1010;       // Binary
let octal: number = 0o744;         // Octal
let floating: number = 3.14;       // Floating point
let negative: number = -42;        // Negative number

// Basic arithmetic
let sum: number = decimal + floating;
let product: number = decimal * 2;
`,
  }
}

export function basicTypesString() {
  return {
    title: "String Types in TypeScript",
    explanation: "String types...",
    code: `
// Example of string type
let firstName: string = "Thor";              // Double quotes
let lastName: string = 'Anderson';           // Single quotes
let fullName: string = firstName + " (middle name) " + lastName;
// String concatenation

// Template literal (backtick)
let greeting: string = \`Hello, \${fullName}!\`; // String interpolation
let multiLine: string = \`
This is a multi-line
string using template
    literals\`\;

// String length and methods
let nameLength: number = fullName.length;    // String property
let upperName: string = fullName.toUpperCase(); // String method
`,
  }
}

export function basicTypesBoolean() {
  return {
    title: "Boolean Types in TypeScript",
    explanation: "Boolean types...",
    code: `
// Example of boolean type
let isDone: boolean = false;        // Boolean declaration
let isActive: boolean = true;       // Another boolean
let isComplete: boolean = isDone && isActive;  // Logical AND
let isValid: boolean = isDone || isActive;     // Logical OR
let isReady: boolean = !isDone;               // Logical NOT
`,
  }
}

export function basicTypesObject() {
  return {
    title: "Object Types in TypeScript",
    explanation: "In TypeScript, object types are used to define the shape of an object, specifying the types of its properties. This allows for strong type-checking and ensures that objects adhere to a specific structure. For example, you can define an object type with specific properties and their corresponding types, such as { name: string; age: number; }. This ensures that any object assigned to this type must have a name property of type string and an age property of type number. Additionally, TypeScript supports optional properties, readonly properties, and index signatures, providing flexibility in defining object shapes. This helps catch errors at compile time and improves code reliability and maintainability.",
    code: `
// Example of object type
`,
  }
}

export function arrayTypes() {
  return {
    title: "Array Types in TypeScript",
    explanation:
      "This section covers array types in TypeScript.  Here you see examples of number and string arrays.",
    code: `
// Example of array type
let numbers: number[] = [1, 2, 3, 4, 5];           // Number array
let names: string[] = ["Thor", "Loki", "Odin"];    // String array

// Adding elements (type-safe)
numbers.push(6);                // OK
// numbers.push("seven");       // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Accessing elements
let firstNumber: number = numbers[0];  // OK
// let firstString: string = numbers[0]; // Error: Type 'number' is not assignable to type 'string'

// Array methods
let arrayLength: number = names.length;  // OK`,
  }
}

export function arrayTypesTuple() {
  return {
    title: "Tuple Types in TypeScript",
    explanation: "Tuple types...",
    code: `
    // Example of tuple type
let person: [string, number] = ["Thor", 30];      // Declare tuple with string and number
let worker: [string, number, boolean] = ["Anderson", 25, true];  // Tuple with 3 elements

// Accessing tuple elements
let empName: string = worker[0];    // First element (string)
let empAge: number = worker[1];     // Second element (number)
let isWorking: boolean = worker[2];   // Third element (boolean)
    `,
  }
}

export function specialTypesExample() {
  return {
    title: "Special Types in TypeScript",
    explanation: "This section covers special types in TypeScript.",
    code: `// Example of special types`,
  }
}
