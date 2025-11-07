
 let n = 17;
 let isprime = true;
 for (let i =2;i<= Math.sqrt(n);i++){
 if(n % i ===0) isprime = false;
 }
 console.log(isprime?"prime number":"not a prime number")
 ;