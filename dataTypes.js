const str = "String h"

console.log(str)
console.log(typeof str)

// string to number
console.log(Number(str)) //Nan aayega
console.log(Number("6")) // 6 as number

// number to string
console.log((6).toString()) // string me 6

// boolean

const bool = true
console.log(bool)

// null
const nullType = null
console.log(nullType)

//undefined
let undefinedType;
console.log(undefinedType)

//array
const arr = [3,2,5,1]
console.log(arr)
console.log(typeof arr)
console.log(Array.isArray(arr)) //check it's array or obj

//object

const obj = {
    firstName: "Arun",
    lastName: "tekwani",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(obj.fullName())

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.hasOwnProperty('firstName'))
