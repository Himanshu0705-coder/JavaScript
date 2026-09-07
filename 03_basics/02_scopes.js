// let a =10
// const b =20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



{}   // conditions inside it known as scope

let a = 300    // global scope
if (true) {    // local scope
    let a =10
    const b =20
    // console.log("Inner :" ,a);
}


// for (let i = 0; i < array.length ; i++){
//     const element = array[i];
// }
// console.log(a) 







// +++++++++++++ interesting ++++++++++++++++++++++++++

console.log(One(5))

function One(num){
    return num + 1
}




const Two = function(num){
    return num + 2
}
console.log(Two(5))