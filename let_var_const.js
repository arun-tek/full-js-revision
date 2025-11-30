var name = "Alice";
var name = "bob"; // redeclaration with var is allowed
console.log(name); // Output: bob

let age = 25;
// let age = 30; SyntaxError: Identifier 'age' has already been declared because it is let
age = 30; //reassignmet is allowed
console.log(age); // Output: 30

const pi = 3.14;
// const pi = 3.14159; SyntaxError: Identifier 'pi' has already been declared because it is const
// pi = 3.14159; // TypeError: re Assignment to constant variable is not allowed.
console.log(pi); // Output: 3.14

// Scopes of var, let, and const

{
    var city = "kanpur";
}

console.log(city); // Output: kanpur (var is function-scoped or globally-scoped)

{
    let country = "India";
    console.log(country); // Output: India (let is block-scoped)
}

// console.log(country); // will not get country because let scope is local or block level ReferenceError: country is not defined (let is block-scoped)

let favColor = "blue";
var score = 100;
{
    let favColor = "green"; // different variable in block scope
    console.log(favColor); // Output: green
    score = 150; // reassigning the outer variable
}

console.log(favColor); // Output: blue
console.log(score); // Output: 150