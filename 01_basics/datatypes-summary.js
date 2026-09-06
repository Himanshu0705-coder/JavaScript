// Primitive Datatypes
// total 7 types
    // String
    // Number
    // Boolean
    // null 
    // undefined
    // Symbol
    // BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false

// Reference (Non Primitive)
    // Array
    // Objects
    // Functions

const heros = ["shaktiman" , "naagraj", "doga"]      // Array 
// console.log(heros[0])                           


let myObj = {                         // Object
    name : "Himanshu",
    age : 21
}
// console.log(myObj["name"])


const myFunction = function() {
        console.log("Hello world!");
}




//  to find the data-type of a variable 

console.log(typeof myFunction)
console.log(typeof myObj)



//  ++++++++++++++++++++++++++++++++++++++++++++

// Memory location
// Stack (Primitive) , Heap (Non-premitive) 


// Stack :- jab bhi hum stack ke andr kuch bhi cheej lete h .. too hume uski copy milti h 
// matlab agr hum stack me koi value replace krte h too vo sirf copied value me save hoti h , naa ki original value me  

// Heap :- jab bhi hum Heap ke andr koi value lete h ..too hume uska reference milta h 
// Heap me agr hum koi value change krenge too vo original valuebhi save ho jaaegi 

let myYoutubename = "himanshu"

let anothername = myYoutubename
anothername = "himanshu2"

console.log(myYoutubename)
console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi: "data@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)