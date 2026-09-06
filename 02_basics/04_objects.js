// const tinderUser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Himanshu"
tinderuser.isLoggedIn = false

// console.log(tinderuser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname :"Himanshu",
            lastname : "panchal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 =  {3: "a", 4: "b"}
const obj4 =  {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty("isLoggedIn"))





// Destructuring

const course = {
    coursename: "js in hindi ",
    price: "999",
    courseInstructor: "HITESH"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor)
console.log(instructor)

