//second largest
function thirdL(arr){
    let first=-Infinity
    let second=-Infinity
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(num>first){
            second=first
            first=num
        }else if(num>second&&num!=first){
            second=num
        }
    }
    return second
}
console.log(thirdL([1,2,3,4,5,6,7,8]))


//third largest
function thirdL(arr){
    let first=-Infinity
    let second=-Infinity
    let third=-Infinity
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(num>first){
            third=second
            second=first
            first=num
        }else if(num>second&&num!=first){
            third=second
            second=num
        }else if(num>third&&num!=second&&num!=first){
            third=num
        }
    }
    return third
}
console.log(thirdL([1,2,3,4,5,6,7,8]))