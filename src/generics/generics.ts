function identity<T>(arg: T): T {
    return arg;
}

// With explicit type parameter
let output1 = identity<string>("hello");  // output1 is of type string

// With type inference (TypeScript figures out T automatically)
let output2 = identity(42);  // output2 is of type number
let output3 = identity(true);  // output3 is of type boolean
let output4 = identity({name: "Alice"});  // output4 is of type {name: string}

console.log(output1); // Output: hello
console.log(output2); // Output: 42
console.log(output3); // Output: true
console.log(output4); // Output: { name: 'Alice' }

function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse()
  }

const monsterArray = ['Frankenstein', 'Dracula', 'Blob', 'Zombie']
const reversedMonsterArray = reverse(monsterArray)
console.log(reversedMonsterArray)

const numberArray = [23983, 8923498, 20989384, 945982]
const reversedNumberArray = reverse(numberArray)
console.log(reversedNumberArray)