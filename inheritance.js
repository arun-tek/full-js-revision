class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }

  static createId() {
    return Math.floor(Math.random() * 10000);
  }

  getId() {
    console.log(User.createId()) //here we did not use this.createId() because static methods are not accessible by instance
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`Course added by: ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "chai@123");
console.log(chai);
chai.logMe();
chai.addCourse();
// =======
// chai.createId(); // This will throw an error because createId is a static method of User class

chai.getId(); // This works because getId is an instance method

// output:
// Teacher {
//   username: 'chai',
//   email: 'chai@gmail.com',
//   password: 'chai@123'
// }
// Username is: chai
// Course added by: chai