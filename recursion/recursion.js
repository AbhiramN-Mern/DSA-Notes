//  1) factorial
function factorial(n){
    if(n==1||n==0)return 1
    
    return n*factorial(n-1)
}
console.log(factorial(4))

//2)Fibonacci
function Fibonacci(n){
    if(n==0)return 0
    if(n==1)return 1
    return Fibonacci(n-1)+Fibonacci(n-2)
}
console.log(Fibonacci(5))

//3) sumofdigits

function sumofdigits(n){
    n=Math.abs(n)
    if(n==0)return 0
    return (n%10)+sumofdigits(Math.floor(n/10))
}
console.log(sumofdigits(1234))