const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const Math.PI = 3.15; // This will fail silently or throw an error in strict mode but we cannot change it because writable is false
console.log(Math.PI); // 3.141592653589793

chai = {
  name: 'adrak wali chai',
  type: 'beverage',
  price: 50
}

const chaiDescripter = Object.getOwnPropertyDescriptor(chai, 'name');
console.log(chaiDescripter);

// {
//   value: 'adrak wali chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

chai.name = 'masala chai'; // This works because writable is true
console.log(chai.name); // masala chai

Object.defineProperty(chai, 'name', {
  writable: false
});

chai.name = 'ginger chai'; // This will fail silently or throw an error in strict mode because writable is now false
console.log(chai.name); // masala chai

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key}: ${value}`);
}
// name: masala chai
// type: beverage
// price: 50

Object.defineProperty(chai, 'type', {
  enumerable: false
});

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key}: ${value}`);
}
// name: masala chai
// price: 50

// 'type' property is not listed because enumerable is false