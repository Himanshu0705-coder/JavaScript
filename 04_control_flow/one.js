// control flow kya hota h .?
// iska mtlb h ki jis bhi jngh hum ho too sirf vhi code run hona chaihye..pure code nhi hone chaiye
// jiss code ki requirement ho ..sirf vhi code run hona chaiye



// if statement

if (3 != 2 ){
    // console.log("equal")
}

//  < , > , <= , >= , != , ==  , === , !== 


// const temperature = 41

// if(temperature >= 40 ){
//     console.log("Less than 50")
// }  else {
//     console.log("Greater than 50")
// }

// const score = 200
// if(score > 100) {
//         let power = "fly"
//         console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)      -- scope problem

const balance = 1000

// if(balance > 500)  console.log("test1");




// if (balance < 500){
//     console.log("less than");
// } else if  (balance < 750){
//     console.log("less than 750");
// }  else {
//     console.log("greater no.")
// }

const userLoggedIn = true
const debitCard = true
const EmailLogin = false

// if (userLoggedIn && debitCard ){
//     console.log("Allow to buy course")
// }

if (userLoggedIn || EmailLogin ){
    console.log("Allow to entered here")
}