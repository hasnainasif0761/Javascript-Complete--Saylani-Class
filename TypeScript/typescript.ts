// var sname:string = "ibrahim";
// console.log(sname);

// var sage:number = 18;
// console.log(sage)

// let isactive:boolean = true;
// console.log(isactive)

//1) explicit type
// explicit type ma type khud sa define karna hute ha
// Example:
// var add:number = 2; // type hard coded define is called explicit type
// console.log(add)

// 2) implicit Type
// Implicit type kya hute ha ka javascript khud sa type define kar deta ha example as javacroipt
// Matlab
// var flag = true;  // type auto difine is called implicit type
// console.log(flag)

// 3) Speacial Type
// Special type wo hute ha ja ham typescript per depend kar deta ha ka agar hamare type number huwe to 
// wo auto matic number or agar string to auto matic string
// var roll:any = 123;
// console.log(roll)

// typescript Types
// tuple  => Using Array
// enum  => Using Object

// 1) Tuple kya karta order dekheta ha array ki values ka data ka
// Example:
// var arr:[number,string,boolean] = [1,'ali',true]
// console.log(arr)

// var arr1: readonly [number,string,boolean] = [1,'bilal',true];
// arr1.push('khan')
// console.log(arr1)


// 2) Enum 
// Enum Set Speacific keys in constant

// Two type of Enum
// 1) Numeric
// 2) String

// 1) Numeric
// enum obj {
//     sname=100,
//     sage,
//     sroll
// }

// 2) String 
enum obj2 {
    sname='byd',
    sage='age',
    sroll='roll'
}
console.log(obj2.sname)

// --- Object two main type
// 1) type alias
// 2) interface

// type alias
// type bname = string;
// type bmodel = number
// type bactive = boolean

// interface
interface bikeType {
    bname:string,
    bmodal:number,
    bactive:boolean,
    bnumber:number
}
const bike:bikeType = {
    bname:'unique',
    bmodal:2025,
    bactive:true,
    bnumber:123
}

console.log("bilke=>",bike)














