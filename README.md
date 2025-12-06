# 📚 Full JavaScript Revision

A comprehensive collection of JavaScript fundamentals covering core concepts from variable declarations to advanced array and object manipulation.

## 📋 Contents

| File | Topics Covered |
|------|----------------|
| **letVarConst.js** | Variable declarations (`var`, `let`, `const`), scoping, redeclaration, and reassignment |
| **dataTypes.js** | Primitive and reference types, type conversion, `typeof`, `Array.isArray()` |
| **stackVsHeap.js** | Memory allocation: Stack (primitives) vs Heap (references) |
| **operators.js** | All JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, and more |
| **strings.js** | String interpolation, case transformations (camelCase, titleCase, etc.) |
| **arrays.js** | Array methods: map, filter, reduce, sort, flat, find, some, every, and more |
| **object.js** | Object manipulation, iteration, shallow vs deep copying |

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

# Run any file
node letVarConst.js
node arrays.js
# ... etc
```

## 📖 Learning Path

1. **letVarConst.js** → Variable declarations and scoping
2. **dataTypes.js** → Understanding data types
3. **stackVsHeap.js** → Memory management
4. **operators.js** → JavaScript operators
5. **strings.js** → String manipulation
6. **arrays.js** → Array methods
7. **object.js** → Object operations

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
