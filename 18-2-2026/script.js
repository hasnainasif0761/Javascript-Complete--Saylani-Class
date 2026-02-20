// function delayCalling(){
//     setTimeout(innerFunction, 5000);
// }

// function innerFunction(){
//     console.log('My name is Huzaifa I am Comming 5 secong delay');
// }
// delayCalling();


// function fetchData(){
//     fetch('https://dummyjson.com/products')
//     .then(function(res){
//         return res.json();
//     })
//     .then((data)=>displayData(data.products));
// }

// function displayData(data){
//     console.log(data)
// }
// fetchData();




// let promise = new Promise((res,rej)=>{
// let a = 4;
// if(a == 3){
//     res('Success');
// }else{
//     rej('Failed');
// }
// })

// console.log(promise)


// let promise = new Promise((res,rej)=>{
//     let a = 5;
//     if(a == 5){
//         res('Success');
//     }else
//     {
//         rej('you are failed');
//     }
// });

// promise.then((message)=>{
//     console.log(message)
// }).catch((message)=>{
//     console.log(message);
// })


// async function fetchApi() {
//     try {
//        await fetch('https://dummyjson.com/products')
//             .then(res => res.json())
//             .then(data => handleData(data.products))
//         function handleData(data) {
//             console.log(data[6].images[0]);
//         }
//     } catch (error) {
//         console.log('Api failing', error);
//     }
// }


// fetchApi();

