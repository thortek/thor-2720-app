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

export function arrayTypesExample() {
  return {
    title: "Array Types in TypeScript",
    explanation:
      "This section covers array types in TypeScript.  Here you see examples of number and string arrays.",
    code: `// Example of array type`,
  }
}

export function specialTypesExample() {
  return {
    title: "Special Types in TypeScript",
    explanation: "This section covers special types in TypeScript.",
    code: `// Example of special types`,
  }
}
