//---------------------------------------------
// 1️⃣ Private (#) – official JS feature (not protected)
//---------------------------------------------

class PrivateExample {
  #secret = 100;
	#privateMethod() {
		return this.#secret * 2;
	}

	show() {
		return this.#privateMethod();
	}
}

const privateInstance = new PrivateExample();
console.log(privateInstance.show()); // 200
// console.log(privateInstance.#secret); // SyntaxError: Private field
// console.log(privateInstance.#privateMethod); // undefined since it's private

//---------------------------------------------
// 2️⃣ Protected by naming convention "_"
//---------------------------------------------

class Animal {
	_walk() {
		console.log("Animal is walking");
	}
}

class Dog extends Animal {
	bark() {
		console.log("Dog is barking");
		this._walk(); // Accessing protected method
	}
}

new Dog().bark();
// new Animal()._walk(); // Not recommended, but possible