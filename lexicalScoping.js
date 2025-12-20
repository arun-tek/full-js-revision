function outer() {
  name = "Outer";
  function inner() {
    console.log(name); // "Outer" - inner function accesses variable from outer function
  }
  inner();
}

outer();

// inner functions have access to variables in their outer function's scope.

