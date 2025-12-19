// JavaScript Prototypes: Understanding Inheritance Without Classes
//
// In JavaScript, there are no traditional classes like in languages such as Java or C++.
// Instead, JavaScript uses a prototype-based inheritance model. This means objects
// inherit properties and methods from other objects through a prototype chain.
//
// Key Concepts:
// 1. Every object in JS has a prototype (except the base Object.prototype)
// 2. Prototypes allow sharing of properties and methods across instances
// 3. The prototype chain is how inheritance works
// 4. Constructor functions create objects with shared prototypes

// Example 1: Constructor Function and Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype (shared across all instances)
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

Person.prototype.haveBirthday = function() {
    this.age++;
    return `Happy birthday! Now I'm ${this.age} years old.`;
};

// Creating instances
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

console.log(person1.greet()); // "Hello, my name is Alice and I am 25 years old."
console.log(person2.greet()); // "Hello, my name is Bob and I am 30 years old."

// Both instances share the same prototype methods
console.log(person1.greet === person2.greet); // true

// Example 2: Prototype Chain
// When accessing a property/method, JS looks up the prototype chain:
// object -> object's prototype -> prototype's prototype -> ... -> null

const obj = {};
console.log(obj.toString()); // Inherited from Object.prototype

// Example 2.5: The __proto__ Property
// Every object has a __proto__ property that points to its prototype.
// This is the actual link in the prototype chain.
// Note: __proto__ is deprecated for direct use; prefer Object.getPrototypeOf() and Object.setPrototypeOf()

const personProto = {
    greet: function() {
        return `Hello from ${this.name}!`;
    }
};

const alice = {
    name: 'Alice',
    age: 25
};

// Set alice's prototype to personProto
alice.__proto__ = personProto; // Deprecated, but for illustration

console.log(alice.greet()); // "Hello from Alice!" (inherited via __proto__)
console.log(alice.__proto__ === personProto); // true

// Better way using Object.setPrototypeOf()
const bob = {
    name: 'Bob',
    age: 30
};

Object.setPrototypeOf(bob, personProto);
console.log(bob.greet()); // "Hello from Bob!"

// Checking prototype
console.log(Object.getPrototypeOf(alice) === personProto); // true
console.log(Object.getPrototypeOf(bob) === personProto); // true

// Example 3: Inheritance with Prototypes
function Student(name, age, grade) {
    // Call parent constructor
    Person.call(this, name, age);
    this.grade = grade;
}

// Set up inheritance: Student.prototype inherits from Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add Student-specific methods
Student.prototype.study = function() {
    return `${this.name} is studying for grade ${this.grade}.`;
};

const student1 = new Student('Charlie', 16, '10th');
console.log(student1.greet()); // Inherited from Person
console.log(student1.study()); // Student-specific method

// Example 4: More Inheritance with Prototypes (Function-based)
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.makeSound = function() {
    return `${this.name} makes a sound.`;
};

function Dog(name, breed) {
    Animal.call(this, name, 'Dog'); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override method
Dog.prototype.makeSound = function() {
    return `${this.name} barks!`;
};

// Add new method
Dog.prototype.fetch = function() {
    return `${this.name} fetches the ball.`;
};

const dog1 = new Dog('Buddy', 'Golden Retriever');
console.log(dog1.makeSound()); // "Buddy barks!"
console.log(dog1.fetch()); // "Buddy fetches the ball."

// Example 5: Object.create() for Direct Prototype Inheritance
const mammal = {
    hasFur: true,
    giveBirth: function() {
        return 'Giving birth to live young.';
    }
};

const cat = Object.create(mammal);
cat.name = 'Whiskers';
cat.meow = function() {
    return `${this.name} says meow!`;
};

console.log(cat.hasFur); // true (inherited)
console.log(cat.giveBirth()); // "Giving birth to live young." (inherited)
console.log(cat.meow()); // "Whiskers says meow!" (own method)

// Key Differences from Class-Based Languages:
// 1. No classes: Inheritance through objects linking to other objects
// 2. Dynamic: Prototypes can be modified at runtime
// 3. Flexible: Objects can inherit from multiple sources
// 4. Delegation: Method calls delegate up the prototype chain

// Common Pitfalls:
// 1. Forgetting to use 'new' with constructor functions
// 2. Modifying shared prototype properties accidentally
// 3. Confusing prototype chain with scope chain

// Best Practices:
// 1. Use Object.create() for simple inheritance
// 2. Prefer class syntax for complex hierarchies (ES6+)
// 3. Always set constructor property when setting prototype
// 4. Use hasOwnProperty() to check own properties vs inherited

console.log('Prototypes allow powerful, flexible inheritance in JavaScript!');
