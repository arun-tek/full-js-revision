let scores = Array(10);
console.log(scores) // output: [ <10 empty items> ]

scores = [4,6,7];
console.log(scores.length);

// add in last kitne bi add kar sakte h
scores.push(8, 9);
console.log(scores) // output: [ 4, 6, 7, 8, 9 ]

// add in start
scores.unshift(7,2,9)
console.log(scores) // output: [ 7, 2, 9, 4, 6, 7, 8, 9 ]

scores.pop();
console.log(scores); // output: [ 7, 2, 9, 4, 6, 7, 8 ]

scores.shift();
console.log(scores) // output: [ 2, 9, 4, 6, 7, 8 ]

for(let i in scores) {
    console.log(i)
}

// output: 0 1 2 3 4 5 the indexes

for(let i of scores) {
    console.log(i)
}

// output: 2, 9, 4, 6, 7, 8

scores.forEach(score => console.log(score))

let doubled = scores.map(score => score * 2) // this create a new arr
console.log(doubled)

// filter some items
let evenNumbers = scores.filter(score => score%2 == 0)
console.log(evenNumbers) // output: [2,4,6,8]

// reduce array ya obj se ek result nikalna
let sum = scores.reduce((sum, x) => sum+x, 0);
console.log(sum)


// flat the array
console.log([1,2,[3,[4]]].flat(2))

// Fully flatten using recursion (no flat depth needed)
function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, [2, [3, [4]]]]));

//flatMap
console.log([1, 2].flatMap(x => [x, x * 2])); // [1, 2, 2, 4]

//find
console.log([1, 2, 3].find(x => x > 1))

//findIndex
console.log([1, 2, 3].findIndex(x => x > 1));

//get any value is in the array or not
console.log([1, 2, 3].includes(2));

// get index of any element in array
console.log([1, 2, 3].indexOf(3));

console.log(scores.sort()) //asending order
console.log(scores.sort((a, b) => b-a)); // desending order

console.log(scores.reverse())


// 2️⃣ Dynamic Multi-key Sort (Flexible)

// Specify keys + order in config:

const users = [
  { name: "Arun", age: 28, score: 90 },
  { name: "Rohan", age: 22, score: 95 },
  { name: "Arun", age: 25, score: 85 },
  { name: "Neha", age: 25, score: 92 }
];

const multiSort = (arr, rules) => {
  return [...arr].sort((a, b) => {
    for (const { key, order } of rules) {
      const dir = order === "desc" ? -1 : 1;

      const valA = a[key];
      const valB = b[key];

      if (valA === valB) continue;

      if (typeof valA === "string") {
        return valA.localeCompare(valB) * dir;
      }

      return (valA - valB) * dir;
    }
    return 0;
  });
};

const sorted = multiSort(users, [
  { key: "name", order: "asc" },
  { key: "age", order: "desc" },
  { key: "score", order: "asc" }
]);

console.log(sorted);

// one liner
const sorted1 = [...users].sort(
  (a, b) => a.age - b.age || b.score - a.score
);

console.log(sorted1);

// Meaning:

// First: age ASC

// If age same → score DESC

const users2 = [
  { name: "Arun", admin: false },
  { name: "Rahul", admin: true }
];

const hasAdmin = users2.some(user => user.admin);

console.log(hasAdmin); // ✅ true

const hasAllAdmin = users2.every(user => user.admin);

console.log(hasAllAdmin); // ❌ false