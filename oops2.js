class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}_encrypted`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai123@gmail.com", "chai@123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// output:
// User {
//   username: 'chai',
//   email: 'chai123@gmail.com',
//   password: 'chai@123'
// }
// chai@123_encrypted
// CHAI
