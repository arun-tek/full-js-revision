// string interpolation

let name = "Arun"
console.log(`My Name is ${name}`) // can use other variables inside strings

// string to array

let colors = ("Red Black Green").split(' ')
console.log(colors) //output: [ 'Red', 'Black', 'Green' ]

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(toCamelCase("hello world example"));
// Output: helloWorldExample

const str1 = "hello world";
console.log(str1.toUpperCase());
// Output: HELLO WORLD

const str2 = "HeLLo WoRLD";
console.log(str2.toLowerCase());
// Output: hello world

function capitalizeSentence(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeSentence("hElLo WoRLd from JS"));
// Output: Hello world from js

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("hello world from javascript"));
// Output: Hello World From Javascript
