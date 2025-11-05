export const Fibo =(n)=>{
    let a =0,b=1, result=[];
    for (let i =0; i < n; i++){
        result.push(a);
        [a,b] = [b,a+b];
    
    }
    return result;
}