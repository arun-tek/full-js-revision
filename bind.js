// JavaScript bind() Method: Creating Bound Functions
//
// The bind() method creates a new function that, when called, has its 'this' keyword
// set to the provided value, with a given sequence of arguments preceding any provided
// when the new function is called.
//
// Syntax: function.bind(thisArg, arg1, arg2, ..., argN)
//
// Key Points:
// 1. Returns a new bound function, doesn't call the original
// 2. Can preset 'this' context and initial arguments
// 3. Useful for event handlers, callbacks, and method borrowing
// 4. Bound functions cannot be rebound (bind() on a bound function does nothing)

console.log('=== JavaScript bind() Method Examples ===\n');

// Example 1: Basic bind() usage
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };

// Create a bound function with preset 'this' and first argument
const greetAlice = greet.bind(person, 'Hello');
console.log(greetAlice('!')); // "Hello, Alice!"
console.log(greetAlice('?')); // "Hello, Alice?"

// Example 2: Partial application with bind()
function multiply(a, b, c) {
    return a * b * c;
}

// Create partially applied functions
const double = multiply.bind(null, 2);
console.log(double(3, 4)); // 24 (2 * 3 * 4)

const tripleAnd = multiply.bind(null, 3);
console.log(tripleAnd(2, 5)); // 30 (3 * 2 * 5)

// Example 3: bind() with event handlers
const buttonHandler = {
    id: 'myButton',
    handleClick: function(event) {
        console.log(`Button ${this.id} clicked! Event type: ${event.type}`);
    }
};

// Without bind - 'this' would be the button element
// With bind - 'this' is the buttonHandler object
// const boundHandler = buttonHandler.handleClick.bind(buttonHandler);

// Example 4: Method borrowing with bind()
const arrayUtils = {
    sum: function() {
        return Array.prototype.reduce.call(this, (acc, val) => acc + val, 0);
    },
    average: function() {
        return this.sum() / this.length;
    }
};

const numbers = [1, 2, 3, 4, 5];
console.log('Sum:', arrayUtils.sum.bind(numbers)()); // 15
console.log('Average:', arrayUtils.average.bind(numbers)()); // 3

// Example 5: bind() and arrow functions
// Arrow functions don't have their own 'this', so bind() doesn't change their context
const arrowFunc = () => {
    return this.value;
};

const obj1 = { value: 'obj1' };
const obj2 = { value: 'obj2' };

const boundArrow = arrowFunc.bind(obj2);
console.log(boundArrow()); // undefined (arrow function uses lexical 'this')

// Example 6: Constructor functions and bind()
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getInfo = function() {
    return `${this.make} ${this.model}`;
};

// bind() can be used to create constructor-like functions
const TeslaFactory = Car.bind(null, 'Tesla');
const model3 = new TeslaFactory('Model 3');
console.log(model3.getInfo()); // "Tesla Model 3"

// Example 7: bind() chaining and rebinding
function log(level, message) {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

const infoLogger = log.bind(null, 'info');
infoLogger('This is an info message'); // "[INFO] This is an info message"

// Trying to rebind a bound function (doesn't work)
const debugLogger = infoLogger.bind(null, 'debug');
debugLogger('This is a debug message'); // "[INFO] This is a debug message" (still 'info')

// Example 8: Practical use case - setTimeout with context
function Timer() {
    this.seconds = 0;
    this.start = function() {
        setInterval(function() {
            this.seconds++;
            console.log(`Timer: ${this.seconds} seconds`);
        }.bind(this), 1000); // bind 'this' to the Timer instance
    };
}

// const timer = new Timer();
// timer.start(); // Will log increasing seconds

// Example 9: bind() with DOM events (conceptual)
function EventHandler(elementId) {
    this.elementId = elementId;
    this.handleEvent = function(event) {
        console.log(`Event on ${this.elementId}: ${event.type}`);
    };
}

const handler = new EventHandler('myDiv');
// In browser: document.getElementById('myDiv').addEventListener('click', handler.handleEvent.bind(handler));

console.log('\n=== Key bind() Concepts ===');
console.log('1. Creates new function with bound context');
console.log('2. Can preset arguments');
console.log('3. Useful for callbacks and event handlers');
console.log('4. Bound functions cannot be rebound');
console.log('5. Arrow functions ignore bind() for \'this\'');
