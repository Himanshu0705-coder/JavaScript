//     => arrow function    '=>' this is arrow function



const user = {
    username: "himanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)    //here 'this' is a current contest 
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)




// function chai(){
//     let username = "Himanshu"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "Himanshu"
//     console.log(this.username);
// }
// chai()





// const chai = () => {
//      let username = "Himanshu"
//      console.log(this.username);
// }
// chai()



// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))



// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username: "Himanshu"})

console.log(addTwo(3,4))