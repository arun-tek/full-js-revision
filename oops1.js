// In javascript there is no concept of classes, everything is based on functions but class is othing but a syntactical sugar over function

// exaple with new keyword

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const marutiCar = new Car("Maruti", "Swift", 2020);
console.log(marutiCar);

// The 'new' keyword was created because it makes a new empty object every time,
// then adds properties to that object, and finally returns that object.

const bmwCar = new Car("BMW", "S34", 2025);
console.log(bmwCar);

// just like bmwCar and marutiCar, we can create multiple objects using the Car function constructor

console.log(marutiCar.constructor); // outputs: [Function: Car]
console.log(bmwCar.constructor);   // outputs: [Function: Car]

console.log(marutiCar instanceof Car); // outputs: true
console.log(bmwCar instanceof Car);   // outputs: true
