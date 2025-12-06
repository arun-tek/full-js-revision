console.log("=== ARITHMETIC OPERATORS ===");

let a = 10;
let b = 3;

console.log("Addition:", a + b); // Output: 13
console.log("Subtraction:", a - b); // Output: 7
console.log("Multiplication:", a * b); // Output: 30
console.log("Division:", a / b); // Output: 3.3333...
console.log("Modulus (Remainder):", a % b); // Output: 1
console.log("Exponentiation:", a ** b); // Output: 1000 (10^3)

// Increment and Decrement
let count = 5;
console.log("Original count:", count); // Output: 5
console.log("Post-increment:", count++); // Output: 5 (returns then increments)
console.log("After post-increment:", count); // Output: 6
console.log("Pre-increment:", ++count); // Output: 7 (increments then returns)
console.log("Post-decrement:", count--); // Output: 7 (returns then decrements)
console.log("After post-decrement:", count); // Output: 6
console.log("Pre-decrement:", --count); // Output: 5 (decrements then returns)

// ========================================
// ASSIGNMENT OPERATORS
// ========================================

console.log("\n=== ASSIGNMENT OPERATORS ===");

let x = 10;
console.log("Initial value:", x); // Output: 10

x += 5; // x = x + 5
console.log("After += 5:", x); // Output: 15

x -= 3; // x = x - 3
console.log("After -= 3:", x); // Output: 12

x *= 2; // x = x * 2
console.log("After *= 2:", x); // Output: 24

x /= 4; // x = x / 4
console.log("After /= 4:", x); // Output: 6

x %= 4; // x = x % 4
console.log("After %= 4:", x); // Output: 2

x **= 3; // x = x ** 3
console.log("After **= 3:", x); // Output: 8

// ========================================
// COMPARISON OPERATORS
// ========================================

console.log("\n=== COMPARISON OPERATORS ===");

let num1 = 10;
let num2 = "10";
let num3 = 20;

// Equality (loose - type coercion)
console.log("10 == '10':", num1 == num2); // Output: true (converts string to number)
console.log("10 == 20:", num1 == num3); // Output: false

// Strict Equality (no type coercion)
console.log("10 === '10':", num1 === num2); // Output: false (different types)
console.log("10 === 10:", num1 === 10); // Output: true

// Inequality (loose)
console.log("10 != '10':", num1 != num2); // Output: false
console.log("10 != 20:", num1 != num3); // Output: true

// Strict Inequality
console.log("10 !== '10':", num1 !== num2); // Output: true (different types)
console.log("10 !== 10:", num1 !== 10); // Output: false

// Greater than / Less than
console.log("10 > 20:", num1 > num3); // Output: false
console.log("10 < 20:", num1 < num3); // Output: true
console.log("10 >= 10:", num1 >= 10); // Output: true
console.log("10 <= 5:", num1 <= 5); // Output: false

// ========================================
// LOGICAL OPERATORS
// ========================================

console.log("\n=== LOGICAL OPERATORS ===");

let isAdult = true;
let hasLicense = false;
let age = 25;

// AND (&&) - both conditions must be true
console.log("isAdult && hasLicense:", isAdult && hasLicense); // Output: false
console.log("isAdult && (age > 18):", isAdult && (age > 18)); // Output: true

// OR (||) - at least one condition must be true
console.log("isAdult || hasLicense:", isAdult || hasLicense); // Output: true
console.log("hasLicense || (age < 18):", hasLicense || (age < 18)); // Output: false

// NOT (!) - inverts the boolean value
console.log("!isAdult:", !isAdult); // Output: false
console.log("!hasLicense:", !hasLicense); // Output: true

// Short-circuit evaluation
console.log("\nShort-circuit evaluation:");
let result1 = false && console.log("This won't print"); // AND stops at first false
let result2 = true || console.log("This won't print"); // OR stops at first true
console.log("true && 'Hello':", true && "Hello"); // Output: Hello (returns last truthy value)
console.log("false || 'Default':", false || "Default"); // Output: Default (returns first truthy value)

// ========================================
// BITWISE OPERATORS
// ========================================

console.log("\n=== BITWISE OPERATORS ===");

let bit1 = 5;  // Binary: 0101
let bit2 = 3;  // Binary: 0011

console.log("5 & 3 (AND):", bit1 & bit2); // Output: 1 (0001)
console.log("5 | 3 (OR):", bit1 | bit2); // Output: 7 (0111)
console.log("5 ^ 3 (XOR):", bit1 ^ bit2); // Output: 6 (0110)
console.log("~5 (NOT):", ~bit1); // Output: -6 (inverts all bits)
console.log("5 << 1 (Left Shift):", bit1 << 1); // Output: 10 (1010)
console.log("5 >> 1 (Right Shift):", bit1 >> 1); // Output: 2 (0010)
console.log("-5 >>> 1 (Zero-fill Right Shift):", -5 >>> 1); // Output: 2147483645

// ========================================
// STRING OPERATORS
// ========================================

console.log("\n=== STRING OPERATORS ===");

let firstName = "John";
let lastName = "Doe";

// Concatenation with +
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName); // Output: John Doe

// Concatenation with +=
let greeting = "Hello";
greeting += " World";
console.log("Concatenation with +=:", greeting); // Output: Hello World

// Template literals (modern approach)
let person = "Alice";
let ageValue = 30;
let message = `${person} is ${ageValue} years old`;
console.log("Template literal:", message); // Output: Alice is 30 years old

// ========================================
// TERNARY OPERATOR
// ========================================

console.log("\n=== TERNARY OPERATOR ===");

let userAge = 20;
let canVote = userAge >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote?", canVote); // Output: Yes, can vote

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade); // Output: B

// Ternary vs if-else
let number = 10;
let type = number % 2 === 0 ? "Even" : "Odd";
console.log("Number type:", type); // Output: Even

// ========================================
// TYPE OPERATORS
// ========================================

console.log("\n=== TYPE OPERATORS ===");

// typeof operator
console.log("typeof 42:", typeof 42); // Output: number
console.log("typeof 'hello':", typeof "hello"); // Output: string
console.log("typeof true:", typeof true); // Output: boolean
console.log("typeof undefined:", typeof undefined); // Output: undefined
console.log("typeof null:", typeof null); // Output: object (JavaScript quirk)
console.log("typeof []:", typeof []); // Output: object
console.log("typeof {}:", typeof {}); // Output: object
console.log("typeof function(){}:", typeof function(){}); // Output: function

// instanceof operator
let arr = [1, 2, 3];
let obj = { name: "Test" };
let date = new Date();

console.log("arr instanceof Array:", arr instanceof Array); // Output: true
console.log("arr instanceof Object:", arr instanceof Object); // Output: true
console.log("obj instanceof Array:", obj instanceof Array); // Output: false
console.log("obj instanceof Object:", obj instanceof Object); // Output: true
console.log("date instanceof Date:", date instanceof Date); // Output: true

// ========================================
// NULLISH COALESCING OPERATOR (??)
// ========================================

console.log("\n=== NULLISH COALESCING OPERATOR (??) ===");

let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = "";
let value5 = "Hello";

// ?? returns right operand only if left is null or undefined
console.log("null ?? 'default':", value1 ?? "default"); // Output: default
console.log("undefined ?? 'default':", value2 ?? "default"); // Output: default
console.log("0 ?? 'default':", value3 ?? "default"); // Output: 0 (0 is not null/undefined)
console.log("'' ?? 'default':", value4 ?? "default"); // Output: '' (empty string is not null/undefined)
console.log("'Hello' ?? 'default':", value5 ?? "default"); // Output: Hello

// Comparison with OR operator
console.log("\nComparison with || operator:");
console.log("0 || 'default':", value3 || "default"); // Output: default (0 is falsy)
console.log("0 ?? 'default':", value3 ?? "default"); // Output: 0 (0 is not null/undefined)

// ========================================
// OPTIONAL CHAINING OPERATOR (?.)
// ========================================

console.log("\n=== OPTIONAL CHAINING OPERATOR (?.) ===");

let user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

let user2 = {
    name: "Bob"
    // no address property
};

// Safe property access
console.log("user.address?.city:", user.address?.city); // Output: New York
console.log("user2.address?.city:", user2.address?.city); // Output: undefined (no error)

// Without optional chaining (would throw error)
// console.log(user2.address.city); // TypeError: Cannot read property 'city' of undefined

// Optional chaining with methods
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log("calculator.add?.(5, 3):", calculator.add?.(5, 3)); // Output: 8
console.log("calculator.subtract?.(5, 3):", calculator.subtract?.(5, 3)); // Output: undefined (method doesn't exist)

// Optional chaining with arrays
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

console.log("users[0]?.name:", users[0]?.name); // Output: Alice
console.log("users[5]?.name:", users[5]?.name); // Output: undefined (index doesn't exist)

// ========================================
// COMMA OPERATOR
// ========================================

console.log("\n=== COMMA OPERATOR ===");

// Comma operator evaluates each expression and returns the last one
let commaResult = (1 + 2, 3 + 4, 5 + 6);
console.log("Comma operator result:", commaResult); // Output: 11 (last expression)

// Common use in for loops
console.log("Comma in for loop:");
for (let i = 0, j = 10; i < 3; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8

// ========================================
// DELETE OPERATOR
// ========================================

console.log("\n=== DELETE OPERATOR ===");

let person2 = {
    name: "John",
    age: 30,
    city: "Boston"
};

console.log("Before delete:", person2); // Output: { name: 'John', age: 30, city: 'Boston' }
delete person2.age;
console.log("After delete age:", person2); // Output: { name: 'John', city: 'Boston' }

// Delete with arrays (creates empty slot)
let numbers = [1, 2, 3, 4, 5];
delete numbers[2];
console.log("Array after delete:", numbers); // Output: [1, 2, empty, 4, 5]
console.log("Array length:", numbers.length); // Output: 5 (length unchanged)

// ========================================
// IN OPERATOR
// ========================================

console.log("\n=== IN OPERATOR ===");

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log("'brand' in car:", "brand" in car); // Output: true
console.log("'color' in car:", "color" in car); // Output: false

// With arrays (checks index)
let fruits = ["apple", "banana", "orange"];
console.log("0 in fruits:", 0 in fruits); // Output: true (index exists)
console.log("3 in fruits:", 3 in fruits); // Output: false (index doesn't exist)
console.log("'apple' in fruits:", "apple" in fruits); // Output: false (checks index, not value)

// ========================================
// SPREAD OPERATOR (...)
// ========================================

console.log("\n=== SPREAD OPERATOR (...) ===");

// Spread with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined); // Output: [1, 2, 3, 4, 5, 6]

// Spread with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = { ...obj1, ...obj2 };
console.log("Merged objects:", mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Spread in function calls
let maxNumbers = [5, 10, 15, 20];
console.log("Max value:", Math.max(...maxNumbers)); // Output: 20

// Copy arrays/objects
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log("Copied array:", copiedArray); // Output: [1, 2, 3]

console.log("\n=== ALL OPERATORS COVERED ===");
