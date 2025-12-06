const obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Accessing properties
console.log(obj.name); // output: Alice
console.log(obj['age']); // output: 30

obj.name = "Bob"; // Modifying property
console.log(obj.name); // output: Bob

obj.country = "USA"; // Adding new property
console.log(obj.country); // output: USA

for(let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

for(let value of Object.values(obj)) {
    console.log(value);
}

console.log("==========")
Object.keys(obj).forEach(element => {
    console.log(element);
    console.log(obj[element]);
});


// get all keys
console.log(Object.keys(obj));

// get all values
console.log(Object.values(obj));

// get all entries
console.log(Object.entries(obj)); // [ [ 'name', 'Bob' ], [ 'age', 30 ], [ 'city', 'New York' ], [ 'country', 'USA' ] ]

for(let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

Object.freeze(obj); // make obj immutable
obj.age = 35; // this will not work
console.log(obj.age); // output: 30

const obj2 = {
    joker() {
        console.log("Why so serious?");
    }
}

// createing obj1 which inherit from obj2
const obj1 = Object.create(obj2);
obj1.name = "Joker";
obj1.joker(); // output: Why so serious? 


// Shallow Copying: Object.assign() and the object spread syntax perform shallow copies. If a property's value is another object, only its reference is copied, not a new independent copy of that nested object. Modifying the nested object in the target will also affect the original source object.

const user = {name: "Alice", address: {city: "New York", zip: 10001}};

const shallowUser = {...user}

shallowUser.address.city = "Los Angeles";

console.log(user.address.city); // Output: Los Angeles matlab har jagah chnage ho gya kyuki shallow copy tha

// there is one more way of shallow copy
const shallowUser2 = Object.assign({}, user);
shallowUser2.address.zip = 90001;
console.log(user.address.zip); // Output: 90001


// "======================="

// deep copy
const user2 = {name: "Bob", address: {city: "Miami", zip: 33101}};
const deepUser = JSON.parse(JSON.stringify({...user2}));
deepUser.address.city = "Chicago";
console.log(user2.address.city); // Output: Miami kyuki deep copy tha

// 2 way of deep copy is using structuredClone (modern browsers and Node.js 17+)
const deepUser2 = structuredClone(user2);
deepUser2.address.zip = 60601;
console.log(user2.address.zip); // Output: 33101

const objTest = {tittle: "developer",
    company: "xyz",
    details: {
        location: "remote",
        salary: "100k"
    }
};

console.log(Object.entries(objTest));

// [
//   [ 'tittle', 'developer' ],
//   [ 'company', 'xyz' ],
//   [ 'details', { location: 'remote', salary: '100k' } ]
// ]
