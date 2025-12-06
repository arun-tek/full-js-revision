// normal for loop - jab index chahiye ho
for(let i = 0; i < 5; i++) {
  console.log(`For Loop iteration: ${i}`);
}

// while loop - jab tak condition true hai tab tak chalega
let j = 0;
while(j < 5) {
  console.log(`While Loop iteration: ${j}`);
  j++;
}

// do-while loop - pehle ek baar chalega fir condition check karega
let k = 0;
do {
  console.log(`Do-While Loop iteration: ${k}`);
  k++;
} while(k < 5);

// example: do-while ek baar to chalega hi chahe condition false ho
let m = 10;
do {
  console.log(`This runs once even though m >= 5: ${m}`);
} while(m < 5);

// for in loop - object ke properties ke liye best hai
const person = {
  name: "Arun",
  age: 26,
  address: {
    city: "kanpur",
    country: "India"
  }
}

// simple for in loop
for(let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// nested objects ke liye recursive function
function getDetails(obj, indent = "") {
  for(let key in obj) {
    if(typeof obj[key] !== "object" || Array.isArray(obj[key])) {
      console.log(`${indent}${key}: ${obj[key]}`);
    } else {
      console.log(`${indent}${key}:`);
      getDetails(obj[key], indent + "  ");
    }
  }
}

console.log("\nNested object iteration:");
getDetails(person);

// for in loop array ke saath - index milta hai (not recommended)
const arr = [2, 4, 5, 6];
for(let i in arr) {
  console.log(`Index: ${i}, Value: ${arr[i]}`);
}

// for of loop - array ke values ke liye best hai
for(let value of arr) {
  console.log(`Value: ${value}`);
}

// for of strings ke saath bhi kaam karta hai
const text = "Hello";
for(let char of text) {
  console.log(`Character: ${char}`);
}

// Object.keys() ke saath for of use kar sakte hai
for(let key of Object.keys(person)) {
  if (typeof person[key] !== "object") {
    console.log(`Key: ${key}, Value: ${person[key]}`);
  }
}

// Object.entries() se [key, value] pairs milte hai
for(let [key, value] of Object.entries(person)) {
  if (typeof value !== "object") {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}

// forEach - array method hai, break nahi kar sakte
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// forEach sirf value ke saath
arr.forEach(value => {
  console.log(`Value: ${value}`);
});

// map - naya array banata hai transform karke
const doubled = arr.map(value => value * 2);
console.log("Original array:", arr);
console.log("Doubled array:", doubled);

// map with index
const withIndex = arr.map((value, index) => `${index}: ${value}`);
console.log("Array with indices:", withIndex);

// break - loop se bahar aa jao
console.log("\nUsing break:");
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    console.log("Breaking at i = 5");
    break;
  }
  console.log(`i = ${i}`);
}

// continue - current iteration skip karo aur next pe jao
console.log("\nUsing continue:");
for(let i = 0; i < 5; i++) {
  if(i === 2) {
    console.log("Skipping i = 2");
    continue;
  }
  console.log(`i = ${i}`);
}

// nested loops - loop ke andar loop
console.log("\nNested loops:");
for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
