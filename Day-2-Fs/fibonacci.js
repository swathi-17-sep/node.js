
 let n = 10;
 let a =0, b=1;
 let result ="";
 for (let i = 0;i < n;i++){
 result + = a+"";
 let c = a+b;
 a=b;
 b= c;
 }
 console.log("Fibonacci series",result);