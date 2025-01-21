console.log('Hello World! I am a basic type script file');

/* Basic types in TypeScript 
 - number
    - string
    - boolean
    - object
    - array
    - tuple
    - enum
    - any
    - void
    - null and undefined
    - never
    - unknown
*/

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

/* ------------------------------------------------------------*/

// Example of string type
let firstName: string = "Thor";              // Double quotes
let lastName: string = 'Anderson';           // Single quotes
let fullName: string = firstName + " (middle name) " + lastName;  // String concatenation

// Template literal (backtick)
let greeting: string = `Hello, ${fullName}!`; // String interpolation
let multiLine: string = `
    This is a multi-line
    string using template
    literals`;

// String length and methods
let nameLength: number = fullName.length;    // String property
let upperName: string = fullName.toUpperCase(); // String method

/* ------------------------------------------------------------*/

// Example of boolean type
let isDone: boolean = false;        // Boolean declaration
let isActive: boolean = true;       // Another boolean
let isComplete: boolean = isDone && isActive;  // Logical AND
let isValid: boolean = isDone || isActive;     // Logical OR
let isReady: boolean = !isDone;               // Logical NOT

/* ------------------------------------------------------------*/

// Example of object type
// Simple object
let user: object = {
    name: "Thor",
    age: 30,
    isActive: true,
    interests: ["coding", "reading"],
};

// Using interface for better type checking
interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
}

// Object with interface
let employee: Person = {
    name: "Anderson",
    age: 25,
    email: "anderson@example.com",
};

/* ------------------------------------------------------------*/

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
let arrayLength: number = names.length;  // OK

/* ------------------------------------------------------------*/

// Example of tuple type
let person: [string, number] = ["Thor", 30];      // Declare tuple with string and number
let worker: [string, number, boolean] = ["Anderson", 25, true];  // Tuple with 3 elements

// Accessing tuple elements
let empName: string = worker[0];    // First element (string)
let empAge: number = worker[1];     // Second element (number)
let isWorking: boolean = worker[2];   // Third element (boolean)


/* ------------------------------------------------------------*/

// Example of unknown type
let userInput: unknown;
userInput = 5; // OK
userInput = "hello"; // OK

// Must check type before using unknown
let strLength: number;
if (typeof userInput === "string") {
    strLength = userInput.length; // OK - type is checked
}
