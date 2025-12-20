// A Closure is a function that remembers its "hometown."

// Think of it like this:

// The Birth: A child function is born inside a parent function.

// The Move: The parent function finishes its job and "dies" (gets kicked off the Call Stack).

// The Backpack: Before the parent left, the child grabbed a "backpack" filled with all the parent's variables (like base or money).

// The Memory: Even if the child moves to a completely different part of the code (the Global Scope), it still carries that backpack. Whenever it needs a variable, it doesn't look at where it is now; it looks inside that backpack from its "hometown."
function power(base) {
  return function(exponent) {
    return Math.pow(base, exponent);
  }
}

const powerOfTwo = power(2);  // Creates a closure with base = 2 litterlly power function is called it's callstack ad scope is our but inner function is retured and then it called later so it have it's scope + callstack scope that's why it can access base variable and lexical scoping that have memory of outer function variable
console.log(powerOfTwo(3));   // 2^3 = 8
console.log(powerOfTwo(4));   // 2^4 = 16