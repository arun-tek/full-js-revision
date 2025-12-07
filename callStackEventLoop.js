// JavaScript Call Stack and Event Loop Demo
// Understanding how JS handles synchronous and asynchronous operations

console.log("=== CALL STACK BASICS ===");

// The call stack is like a stack of plates - Last In, First Out (LIFO)
// When a function is called, it gets pushed onto the stack
// When it returns, it gets popped off the stack

function first() {
  console.log("Inside first function");
  second();  // This gets pushed onto the stack
  console.log("Back to first function");
}

function second() {
  console.log("Inside second function");
  third();  // This gets pushed onto the stack
  console.log("Back to second function");
}

function third() {
  console.log("Inside third function");
  // This is the deepest level
}

console.log("Starting call stack demo...");
first();  // This starts the chain
console.log("All functions completed");

// Output order:
// Starting call stack demo...
// Inside first function
// Inside second function
// Inside third function
// Back to second function
// Back to first function
// All functions completed

console.log("\n=== SYNCHRONOUS VS ASYNCHRONOUS ===");

// Synchronous code blocks the execution until it completes
// Asynchronous code doesn't block - it schedules work for later

console.log("1. Start of script");

setTimeout(() => {
  console.log("2. This runs after 0ms... but actually later!");
}, 0);

console.log("3. End of script");

// Output order:
// 1. Start of script
// 3. End of script
// 2. This runs after 0ms... but actually later!

console.log("\n=== EVENT LOOP IN ACTION ===");

// The event loop constantly checks:
// 1. Is the call stack empty?
// 2. If yes, check the callback queue for pending tasks
// 3. Move tasks from queue to stack when stack is empty

function syncTask() {
  console.log("Synchronous task running");
}

function asyncTask() {
  setTimeout(() => {
    console.log("Asynchronous task completed");
  }, 1000);
}

console.log("Starting tasks...");
syncTask();      // Runs immediately
asyncTask();     // Schedules for later
console.log("Tasks scheduled");

// Output:
// Starting tasks...
// Synchronous task running
// Tasks scheduled
// (after 1 second) Asynchronous task completed

console.log("\n=== CALLBACK QUEUE DEMO ===");

console.log("Script starts");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("Script ends");

// Output order:
// Script starts
// Script ends
// Promise resolved  (microtask queue has priority)
// Timeout 1
// Timeout 2

console.log("\n=== MICRO TASKS VS MACRO TASKS ===");

// Microtasks (Promise callbacks, MutationObserver) run before macrotasks (setTimeout, setInterval)
// This is why Promises resolve before setTimeout with 0 delay

console.log("Start");

setTimeout(() => console.log("Macro task (setTimeout)"), 0);

Promise.resolve().then(() => {
  console.log("Micro task (Promise)");
  // Even nested microtasks run before macrotasks
  return Promise.resolve().then(() => console.log("Nested micro task"));
});

console.log("End");

// Output:
// Start
// End
// Micro task (Promise)
// Nested micro task
// Macro task (setTimeout)

console.log("\n=== STACK OVERFLOW EXAMPLE ===");

// Uncomment the code below to see a stack overflow error
// (Commented out to prevent crashing the demo)

/*
function recursive() {
  recursive();  // Calls itself infinitely
}

// recursive();  // This would cause: RangeError: Maximum call stack size exceeded
*/

console.log("Stack overflow avoided by commenting out the recursive function");

console.log("\n=== EVENT LOOP VISUALIZATION ===");

// Let's simulate what happens step by step
console.log("1. Call stack: [main]");
console.log("2. Call stack: [main, setTimeout]");

setTimeout(() => {
  console.log("4. Call stack: [setTimeout callback]");
  console.log("5. Call stack: []");
}, 1000);

console.log("3. Call stack: [main]");
console.log("Waiting for timer...");

// The event loop will:
// 1. Execute synchronous code
// 2. Schedule setTimeout callback
// 3. Continue with rest of synchronous code
// 4. When stack is empty, check callback queue
// 5. Execute setTimeout callback

console.log("\n=== PRACTICAL EXAMPLE: API CALL SIMULATION ===");

function simulateApiCall(url) {
  return new Promise((resolve, reject) => {
    console.log(`Making API call to: ${url}`);

    // Simulate network delay
    setTimeout(() => {
      if (url.includes('error')) {
        reject(new Error('API call failed'));
      } else {
        resolve({ data: `Response from ${url}`, status: 200 });
      }
    }, 500);
  });
}

async function fetchUserData() {
  try {
    console.log("Starting async operation...");
    const response = await simulateApiCall('https://api.example.com/user');
    console.log("API response:", response);
    console.log("Async operation completed");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchUserData();
console.log("This runs immediately, before the async function completes");

// Output shows how async/await works with the event loop:
// Starting async operation...
// This runs immediately, before the async function completes
// (after 500ms) API response: { data: 'Response from https://api.example.com/user', status: 200 }
// Async operation completed

console.log("\n=== SUMMARY ===");
