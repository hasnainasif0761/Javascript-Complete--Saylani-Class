// class Students {
//     constructor(sname,sage,sroll){
//         this.sname = sname;
//         this.sage = sage;
//         this.sroll = sroll;
//     }
//     sdetails (){
//         console.log(`My name is ${this.sname} and I am ${this.sage} year old`);
//     }
// }


// class CollegeStudent extends Students {
//     constructor(name,age,course){
//         super(name,age)
//         this.course = course
//     }
//     courseDeatail(){
//         console.log(`${this.sname} is studying ${this.course}`);
//     }
// }

// const stu1 = new CollegeStudent('Huzaifa',17,'Computer Science');

// stu1.sdetails();
// stu1.courseDeatail();

// class Person {
//     constructor(name,age,roll){
//         this.name = name
//         this.age = age
//         this.roll = roll
//     }
//     details(){
//         document.writeln(`Hello my name is ${this.name} and I am ${this.age} year Old`);
//     }
// }

// const personObj = new Person('Huzaifa',17);
// personObj.details()


// class Animal {
//     constructor(name,hair,color){
//         this.name = name
//         this.hair = hair
//         this.color = color
//     }
//     details(){
//         document.writeln(`My Pat Color is ${this.color} and my Pat name is ${this.name} and my Pat hair is ${this.hair}`)
//     }
// }

// const AnimalObj = new Animal('Tommy','short','white');
// const AnimalObj1 = new Animal('Dog','Long','Black');

// AnimalObj.details();
// document.writeln('<br>');
// AnimalObj1.details();


// before 
// code hard to read and understand
// extend issue 
// hard to maintain


//es6 class
// OOP => Mixture os Class and Object


// const obj = {
//     name : 'Huzaifa',
//     age:17
// }
// const obj1 = {
//     name: 'Ali',
//     age: 18
// }
// // console.log(obj.name)
// Object.prototype.details = function(){
//     console.log(`my name is ${this.name}`)
// }

// obj.details();
// console.log(obj1.details())

// Inheritance => Parent and child class

// class ParentClass {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     details(){
//         console.log(`Parent Class Name is ${this.name} and Age is ${this.age}`)
//     }
// }

// class ChildClass extends ParentClass {
//     constructor(name,age){
//         super(name,age)
//     }
//     func(){
//         console.log(`My name is Hassan ${this.name}`)
//     }
// }

// const o =  new ChildClass('Huzaifa',18);
// o.details();
// o.func()














