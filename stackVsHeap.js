// stack memories are in premitive datatypes

let a = 34

let b = a
b=90;
console.log(b)
console.log(a)

// heap memries are in array obj etc it store vaues as reference

const obj = {
    name: "Arun"
}

const obj1 = obj

obj.name = "surya kiran"

// dono results same hoge kyoki yeah heap memory se h
console.log(obj.name)
console.log(obj.name)

a=[2,3,4]
a1=a
a1[0] =90

// isme me bi same hoge
console.log(a1)
console.log(a)