console.log("Js is running");

// IIFE  Stand for Immediately Invoked Function Expression

// let outside = 'outside-funct'
// function test(){
//     let uname = 'ali';
//     let outside = 'Inside-funct'
//     console.log(outside)
// }
// test()

// (function(){
//     console.log('inside iife') ==> IIFE Function
// })()


// (()=>{
//     uname = 'Huzaifa';
//     console.log('Your name is '+uname)  // output is Huzaifa
// })()

// console.log(uname)  // output is Huzaifa

// let result = (function(){
//     return 5 + 5;
// })()
// console.log(result)


// ((uname)=>{
//     let text = "Hello " + uname
//     console.log(text)
// })()

var result = (function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n - 1); // 12 // 8 //4
})(4)
console.log(result)


















