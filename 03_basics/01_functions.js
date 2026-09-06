// function declaration

function sayMyName(){
    console.log("Himanshu")
}

// sayMyName()


// function addTwoNumbers(number1,number2){
//      console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 
}
const result = addTwoNumbers(3,5)
// console.log("Result: ", result)
 

function loginUserMessage(username){
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Himanshu"))



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage())



function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage())





function CalculateCartPrice(...num1){
    return num1
}

console.log(CalculateCartPrice(200, 400, 500)) 