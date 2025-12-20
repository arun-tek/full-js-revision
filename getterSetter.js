class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.trim().toUpperCase(); // here we not use this.password to avoid recursive call of getter
  }

  set password(value) {
    this._password = value;
  }
}

const arun = new User("arun@gmail.com", "   arun@123   ");
console.log(arun);
console.log(arun.password); // Outputs: ARUN@123

function createUser(email, initialPassword) {
  let _password = initialPassword; // Private variable via closure

  return {
    email,
    get password() {
      return _password.trim().toUpperCase();
    },
    set password(value) {
      _password = value;
    }
  };
}

const nisha = createUser("nisha@gmail.com", "  secret123  ");
console.log(nisha.password); // "SECRET123"
console.log(nisha._password); // undefined (It's truly private!)
