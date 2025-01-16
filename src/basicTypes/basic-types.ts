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



// Example of unknown type
let userInput: unknown;
userInput = 5; // OK
userInput = "hello"; // OK

// Must check type before using unknown
let strLength: number;
if (typeof userInput === "string") {
    strLength = userInput.length; // OK - type is checked
}
