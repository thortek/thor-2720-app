export function functionParams() {
    return {
      title: "Function Parameter Types in TypeScript",
      explanation: "Function parameter types in TypeScript allow you to specify the expected data types for function parameters, providing better type safety and code clarity.",
      code: `
  // Basic parameter types
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

// Multiple parameters with different types
function add(x: number, y: number): number {
    return x + y;
}

// Optional parameters (using ?)
function updateUser(id: number, name?: string): void {
    // name is optional
}

// Default parameters
function createMessage(text: string = "Default message"): string {
    return text;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
  `,
    }
  }

  export function functionReturnTypesOne() {
    return {
      title: "Function Return Types (1) in TypeScript",
      explanation: `TypeScript functions (both traditional and arrow functions) can specify their return type using the : returnType syntax after the parameter list. This creates a contract that ensures the function returns the expected type of data.

Common return types include:

string for text values
number for numeric values
void when no value is returned
This type checking helps catch errors during development and serves as built-in documentation, making code more reliable and easier to maintain.

Both traditional and arrow functions use the same type system, so you can choose the style that best fits your needs.`,
      code: `function functionName(params): returnType {
    return value; // must match returnType
}
    // Basic return types
function getName(): string {
    return "John Doe";
}
    // Arrow function with return type
const getNameArrow = (): string => 'John Doe'

// Number return type
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}
    // Arrow function with return type
const calculateAreaArrow = (radius: number): number => Math.PI * radius * radius

// Void return type (no return value)
function logMessage(msg: string): void {
    console.log(msg);
}

// Arrow function with void return type (no return value)
const logMessageArrow = (msg: string): void => console.log(msg)
    `
    }
}

export function functionReturnTypesTwo() {
    return {
      title: "Function Return Types (2) in TypeScript",
      explanation: "Function return types in TypeScript allow you to specify the expected data type for the return value of a function, providing better type safety and code clarity.",
      code: `// Array return type
function getNumbers(): number[] {
    return [1, 2, 3, 4, 5];
}

// Union return type
function getIdOrName(): string | number {
    return Math.random() > 0.5 ? 123 : "id123";
}

// Promise return type
async function fetchData(): Promise<string> {
    const response = await fetch('api/data');
    return response.text();
}`
    }
}