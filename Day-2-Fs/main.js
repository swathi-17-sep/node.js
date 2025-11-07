 import fs from "fs";
 // file 1- Fibo program

 const fibonacci =`
 let n = 10;
 let a =0, b=1;
 let result ="";
 for (let i = 0;i < n;i++){
 result + = a+"";
 let c = a+b;
 a=b;
 b= c;
 }
 console.log("Fibonacci series",result);`

 fs.writeFile("fibonacci.js",fibonacci,(err)=>{
    if(err)console.log(`Error:${err}`);
    else console.log("fibonacci.js created");
 });

 fs.readFile("fibonacci.js",(err)=>{
    if(err) console.log(err);
    else console.log("fibonacci.js is readed");
 });

 // file 2 - Factorial

 const factorial =`
 let n = 5;
 let fact = 1;
 for (let i =1;i<= n;i++){
 fact *=i;
 }
 console.log("Factorial:",fact);`

 fs.writeFile("Factorial.js",factorial,(err)=>{
    if(err)console.log(`Error:${err}`);
    else console.log("Factorial.js created");
 })

 fs.readFile("Factorial.js",(err)=>{
    if(err) console.log(err);
    else console.log("Factorial.js is readed");
 })

 // file  3 - prime number

 const prime =`
 let n = 17;
 let isprime = true;
 for (let i =2;i<= Math.sqrt(n);i++){
 if(n % i ===0) isprime = false;
 }
 console.log(isprime?"prime number":"not a prime number")
 ;`

 fs.writeFile("Prime.js",prime,(err)=>{
    if(err) console.log(`Error:${err}`);
    else console.log("Prime.js created");
 }
 )

 fs.readFile("Prime.js",(err)=>{
    if(err) console.log(err);
    else console.log("Prime.js is readed");
 })

 // file 4 - sum of even numbers

 const sumOfEven =`
 let num = 10;
 let sum = 0;
 for (let i = 1;i<= num; i++){
    if(i % 2===0){
        sum +=i;
    }
 }

 console.log("sum of even numbers 1 to",num,"is ",sum);
 ;`

 fs.writeFile("sumOfEven.js",sumOfEven,(err)=>{
   if(err) console.log(`Error:${err}`);
   else console.log("sumOfEven.js created")
 })

 fs.readFile("sumOfEven.js",(err)=>{
   if(err) console.log(err);
   else console.log("sumOfEven.js is readed");
 })