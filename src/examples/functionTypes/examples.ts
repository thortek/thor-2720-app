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