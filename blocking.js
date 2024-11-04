//Synchronous or blocking               --Line ny line execution
let a=10;
let b=20;
let c=a+b;
console.log(c);
let d=20;
console.log(d);

//ASynchronous or non-blocking          --not line by line execution guarantee ,call back will fire

// const fs=require('fs')
// let text=fs.readFile('./del.txt','utf-8',(err,data)=>{
// if(err){
// console.log(`Error is ${err}`);
// return ;
// }
// console.log(data);
// })
// console.log("This is a message");
