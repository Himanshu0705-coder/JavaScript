// Immediate Invoked Function Expressions (IIFE)

// jb kisi function ko immediately call krana hota h tb HUm IIFE kaa use krte h 
// and jb hum global function ko call krte h ..too usme polution ko hatane ke liye IIFe ka use krte h 

(function chai(){
    console.log(`DB Connected`);
})();

(function aurcode() {
    console.log(`DB CONNECTED Two`)
} )();


( (name) => {
    console.log(`DB CONNECTED Two ${name}`)
} )("Himanshu")

