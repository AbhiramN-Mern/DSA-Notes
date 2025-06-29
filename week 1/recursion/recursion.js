//  1) factorial
function factorial(n){
    if(n==1||n==0)return 1
    
    return n*factorial(n-1)
}
// console.log(factorial(4))

//2)Fibonacci
function Fibonacci(n){
    if(n==0)return 0
    if(n==1)return 1
    return Fibonacci(n-1)+Fibonacci(n-2)
}
// console.log(Fibonacci(5))

//3) sumofdigits

function sumofdigits(n){
    n=Math.abs(n)
    if(n==0)return 0
    return (n%10)+sumofdigits(Math.floor(n/10))
}
// console.log(sumofdigits(1234))


// factorial using common way...
function factorialNormal(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}




// factorial using using recurtion...
function factorialRecursion(num){
if(num === 1) return 1;
return num * factorialRecursion(num - 1);
}





// fauction which do Math.pow()...
function power(base, exponet){
    if(exponet === 1) return base;
    return base * power(base, exponet - 1);
} 





// function to do product of array...
function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr[0] *= productOfArray(arr.splice(1));
}





// function to add recurive inp...
function recuriveRange(num){
    if(num === 0) return 0
    return num + recuriveRange(num - 1);
};





//function to find fibonacci value of a input...
function fib(num) {
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}








//function to check palindore of a string...
function isPalindrome(str){
    if(str.length === 1)return true;
    if(str.length === 2)return str[0] === str[1];
    if(str[0] === str.slice(-1))return isPalindrome(str.slice(1,-1));
    return false;
}

//function to check someREcursive...

function someRecursive(arr, val){
    if(arr.length === 0)return false;
    if(val(arr[0])) return true;
    someRecursive(arr.slice(1),val);
}



//sum of elements in array

function sum(arr,index=0){
    if(arr.length==index)return 0
    return arr[index]+sum(arr,index+1)
}
console.log(sum([1,2,3,4,5]))


//////////////////////////////
function sum(arr){
    if(arr.length==0)return null
    return arr[0]+sum(arr.slice(1))
}



//sum of even numbres
function sumEven(arr) {
  if (arr.length === 0) return 0; // base case

  const first = arr[0];
  const restSum = sumEven(arr.slice(1));

  if (first % 2 === 0) {
    return first + restSum;
  } else {
    return restSum;
  }
}

//RangeOFNumbers

function rangeofnumbers(start,end){
    if(end<start){
        return []
    }else{
        const number=rangeofnumbers(start,end-1)
        number.push(end)
        return number
    }
}
console.log(rangeofnumbers(1,4))


//Binary search uing recuaion 
function binary(arr,target,left=0,right=arr.length-1){
    if(left>right)return "null"
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target){
        return mid
    }else if(arr[mid]<target){
        return binary(arr,target,mid+1,right)
    }else{
        return binary(arr,target,left,mid-1)
    }
}
console.log(binary([5,7,9,10],7))


//secondLargest

function finds(arr,index=0,large=-Infinity ,second=-Infinity){
    if(arr.length==index)return second
    let current=arr[index]
    if(current>large){
        return finds(arr,index+1,current,large)
    }else if(current>second&&current!=large){
        return finds(arr,index+1,large,current)
    }else{
        return finds(arr,index+1,large,second)
    }
}

console.log(finds([1,7,3,4,5,8,9]))

//second small
function findm(arr,index=0,first=Infinity,second=Infinity){
if (arr.length == index) return second
    let current=arr[index]
    if (current<first){
        return findm(arr,index+1,current,first)
    }else if(current<second&&current!=first){
        return findm(arr,index+1,first,current)
    }else{
        return findm(arr,index+1,first,second)

    }
}
console.log(findm([7,4,3,5,8,9]))


function removeL(str){
    if(str.length==0)return ""
    
    let firstChar=str[0]=="L" ? "":str[0]
    return firstChar+removeL(str.slice(1))
}
const result=removeL('HELLO WORLD')
console.log(result)


//function to revers the value of a string...
function reverse(string) {
    if(string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0];
}


