console.log('Js is runinng...........');

// function generate_token(){
//   let token = 0;
//   return function inner(){
//     token++
//     console.log(token)
//   }
// }
// var display = generate_token();

let token = 0;
let tokenArr = [];
function display(){
  token++
  console.log(token)
  tokenArr.push(token);
  console.log(tokenArr)
  return tokenArr
}
console.log(tokenArr)