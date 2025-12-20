function setUserName(username) {
  this.username = username;
}

function createUser(username, age, name) {
  new setUserName(username);
  this.age = age;
  this.name = name;
}

console.log(new createUser("john_doe", 25, "John Doe")); 
// Outputs: createUser { age: 25, name: 'John Doe' } why not username?
// Because the setUserName function is called without context of createUser,
//  so 'this' inside setUserName refers to the global object (or undefined in strict mode), not the new object being created by createUser.

function createuserNameCorrectly(username, age, name) {
  setUserName.call(this, username); // Correctly set 'this' to the new object being created why we did not use new here?  for call new is not needed
  this.age = age;
  this.name = name;
}

console.log(new createuserNameCorrectly("jane_doe", 30, "Jane Doe")); 
// Outputs: createuserNameCorrectly { username: 'jane_doe', age: 30, name: 'Jane Doe' }
// because we used call to set the context of 'this' correctly.
