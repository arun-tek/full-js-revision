# 📚 Full JavaScript Revision

A comprehensive collection of JavaScript fundamentals covering core concepts from variable declarations to advanced array and object manipulation.

## 📋 Contents

| File | Topics Covered |
|------|----------------|
| **letVarConst.js** | Variable declarations (`var`, `let`, `const`), scoping, redeclaration, and reassignment |
| **dataTypes.js** | Primitive and reference types, type conversion, `typeof`, `Array.isArray()` |
| **stackVsHeap.js** | Memory allocation: Stack (primitives) vs Heap (references) |
| **operators.js** | All JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, and more |
| **function.js** | Function declarations, arrow functions, callbacks, IIFE, recursion, and 'this' binding |
| **callStackEventLoop.js** | Call stack, event loop, synchronous vs asynchronous execution, microtasks vs macrotasks |
| **promises.js** | Promises, async/await, promise chaining, Fetch API, Promise.all, Promise.race |
| **loops.js** | All loop types: for, while, do-while, for...in, for...of, forEach, map, break, continue |
| **strings.js** | String interpolation, case transformations (camelCase, titleCase, etc.) |
| **arrays.js** | Array methods: map, filter, reduce, sort, flat, find, some, every, and more |
| **object.js** | Object manipulation, iteration, shallow vs deep copying |
| **dom.js** | DOM manipulation: adding, editing, and deleting elements |
| **events.js** | Event handling: click, mouse, keyboard, form, window, touch, and custom events |
| **index.html** | Interactive DOM manipulation demo with add/edit/delete functionality |
| **events.html** | Interactive event demonstration page with logging |

## 🎯 Key Topics

### Variables & Scope
- **var**: Function-scoped, allows redeclaration
- **let**: Block-scoped, no redeclaration, allows reassignment  
- **const**: Block-scoped, immutable binding

### Data Types
- **Primitives**: String, Number, Boolean, Null, Undefined (stored in stack)
- **References**: Array, Object (stored in heap)
- Type conversion and checking methods

### Memory Management
- **Stack**: Primitives create independent copies
- **Heap**: References share memory locations

### Operators
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`, short-circuit evaluation
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- **String**: Concatenation (`+`), template literals
- **Ternary**: `condition ? true : false`
- **Type**: `typeof`, `instanceof`
- **Modern**: Nullish coalescing (`??`), optional chaining (`?.`)
- **Other**: Comma (`,`), `delete`, `in`, spread (`...`)

### Functions
- **Function Declaration**: Traditional function syntax with `function` keyword
- **Function Expression**: Functions assigned to variables
- **Arrow Functions**: Concise ES6 syntax, lexical `this` binding
- **Parameters**: Required and optional parameters, default values
- **Return Values**: Using `return` to send values back to caller
- **Callbacks**: Functions passed as arguments to other functions
- **IIFE (Immediately Invoked Function Expressions)**: Self-executing functions for encapsulation
- **Recursion**: Functions that call themselves with base cases
- **'this' Binding**: Context differences between arrow and regular functions

### Loops
- **for loop**: Traditional index-based iteration with full control
- **while loop**: Executes while condition is true
- **do-while loop**: Executes at least once, then checks condition
- **for...in loop**: Iterates over object properties (keys)
- **for...of loop**: Iterates over iterable values (arrays, strings, etc.)
- **forEach()**: Array method for simple iteration (cannot break)
- **map()**: Creates new array by transforming elements
- **Control**: `break` (exit loop), `continue` (skip iteration)
- **Nested loops**: Loops within loops for multi-dimensional iteration

### String Methods
- Template literals for interpolation
- Case transformations: `toUpperCase()`, `toLowerCase()`, `charAt()`, `slice()`
- String-to-array conversion with `split()`

### Array Operations
- **Modification**: `push()`, `pop()`, `shift()`, `unshift()`
- **Iteration**: `forEach()`, `for...of`, `for...in`
- **Transformation**: `map()`, `filter()`, `reduce()`, `flat()`, `flatMap()`
- **Search**: `find()`, `findIndex()`, `includes()`, `indexOf()`
- **Testing**: `some()`, `every()`
- **Sorting**: `sort()`, `reverse()`, multi-key sorting

### Object Manipulation
- Property access: dot notation and bracket notation
- Iteration: `Object.keys()`, `Object.values()`, `Object.entries()`
- Freezing: `Object.freeze()`
- Inheritance: `Object.create()`
- **Copying**: Shallow (`...spread`, `Object.assign()`) vs Deep (`JSON.parse(JSON.stringify())`, `structuredClone()`)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/arun-tek/full-js-revision.git
cd full-js-revision

# Run JS files with Node.js
node letVarConst.js
node arrays.js
# ... etc

# Open HTML files in browser
open index.html    # DOM manipulation demo
open events.html   # Event handling demo
```

## 📖 Learning Path

1. **letVarConst.js** → Variable declarations and scoping
2. **dataTypes.js** → Understanding data types
3. **stackVsHeap.js** → Memory management
4. **operators.js** → JavaScript operators
5. **function.js** → Function types, arrow functions, callbacks, and recursion
6. **callStackEventLoop.js** → Call stack, event loop, and async execution
7. **loops.js** → Loop types and iteration
8. **strings.js** → String manipulation
9. **arrays.js** → Array methods
10. **object.js** → Object operations
11. **dom.js** → DOM manipulation basics
12. **index.html** → Interactive DOM demo (add/edit/delete elements)
13. **events.js** → Event handling concepts
14. **events.html** → Interactive event demonstration

## 🤝 Contributing

Contributions welcome! Please:
- Keep examples focused and well-commented
- Follow existing code style
- Test your code before submitting

## 📄 License

MIT License - See LICENSE for details.

## 👤 Contact

**Maintainer:** [arun-tek](https://github.com/arun-tek)

---

⭐ Star this repo if it helps your JavaScript learning journey!
