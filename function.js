// Simple function that just prints "abc"
// Functions in JS are super flexible - you can store them in variables, pass them around, or return them from other functions
function abc(){
  console.log("abc");
}
abc();

// Function that takes two numbers and adds them together
// Parameters act like local variables that only exist inside the function
// Return sends the result back to wherever the function was called from
function def(a,b) {
  return a+b;
}

console.log(def(2,3)); // Should print 5

// Function with a default parameter - if you don't provide the second number, it assumes 1
// This is a newer JS feature that makes functions more flexible
function multiply(x,y=1) {
  return x*y;
} 
console.log(multiply(5));  // Uses default y=1, so 5 * 1 = 5

console.log(multiply(5,4));  // Overrides the default, so 5 * 4 = 20

// Arrow function - the modern, shorter way to write functions in JS
// They don't create their own 'this' context, which can be tricky sometimes
const arrowFunc = () => console.log("This is an arrow function");
arrowFunc();

// Arrow function that automatically returns the result without needing the 'return' keyword
// Handy for simple one-liner functions
const add = (a,b) => a + b;
console.log(add(10,15));  // Prints 25

// Arrow function with multiple lines - when you need curly braces, you have to use 'return' explicitly
const abv = (a) => {
  console.log("Value is:", a);
}

abv("multiple lines of code");

// Example of using a callback - passing a function as an argument to another function
// This is how you handle async operations and functional programming in JS
const callbackExample = (a, b, callback) => {
  result = callback(a, b);
  console.log("Result from callback:", result);
}

callbackExample(3, 4, add);  // We're passing the 'add' function as the callback

// IIFE - Immediately Invoked Function Expression
// A function that runs right after it's defined, wrapped in parentheses
// Creates its own scope so variables don't leak into the global space
// Was super popular before ES6 modules for keeping code organized
(function IIFE(){
  console.log("This is an Immediately Invoked Function Expression (IIFE)");
})();

// Recursive function - a function that calls itself
// Need a base case to stop the recursion, otherwise it runs forever
// Calculating factorial: 5! = 5 × 4 × 3 × 2 × 1
const factorial = function fact(n) {
  if(n <= 1) return 1;  // Base case: stop when we get to 1 or 0
  return n * fact(n - 1);  // Keep calling with smaller numbers
}

console.log("Factorial of 5:", factorial(5));  // Should be 120

// The tricky part about 'this' in object methods
// Arrow functions don't bind 'this' to the object - they inherit it from outside
// Regular functions do bind 'this' to the object they're attached to
const person = {
  name: "John",
  age: 30,
  // Arrow function - 'this' won't refer to the person object
  nameWithAge: () => {
    console.log(`name is ${this.name} and age is ${this.age}`)  // 'this' is undefined here
  },

  // Regular function - 'this' refers to the person object
  nameWithAge1: function() {
    console.log(`name is ${this.name} and age is ${this.age}`)  // 'this' is the person object
  }
};

person.nameWithAge()  // Arrow function won't work as expected
person.nameWithAge1()  // Regular function works fine


