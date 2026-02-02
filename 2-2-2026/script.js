// // const person = {
// //     firstName: "Huzaifa",
// //     lastName: "Asif",
// //     fullName: function (){          // Method
// //         return console.log(`Hello ${this.firstName}`);
// //     }
// // }

// // person.fullName();



// // function myFunction(){
// //     return this;
// // }

// // console.log(myFunction())



// // Use Strick Mode For not binding your global object
// // "use strict"
// // function myFunction(){
// //     return this;
// // }

// // console.log(myFunction())


// // let person1 = {name:"Huzaifa"};
// // let person2 = {name:"Ali"}

// // function greet(greeting){
// //     console.log(`${greeting} , ${this.name}`)
// // }

// // greet.call(person1,'Hello');


// let person = {
//     function: function(){
//         return this.name + " "+ this.lname
//     }
// }

// let person1 = {
//     name:"Ali",
//     lname:"Shakeel"
// }

// let person2 = {
//     name:"Razi ullah",
//     lname:"Asif"
// }


// var result = person.function.call(person1)
// console.log(result)



















