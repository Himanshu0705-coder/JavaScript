const userEmail = "panchalhimanshu0507@gmail.com"

if (userEmail){
    console.log("Got the user email");
}  else {
    console.log("Don't have user email");
}


// falsy values
// false , 0 , -0 , BigInt , 0n, "" , null , undefined , NaN


// Truthy values
// "0" , "false" , " " , [] , {} , function(){} 




//  Nullish Coalesing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
val1 = null ?? undefined ?? 4


console.log(val1);


// Terniary Operator
//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


