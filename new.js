let array=[30,40,50,10,20]
console.log(min(array))

function min(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]>arr[right]){
            left=mid+1
        }else{
            right=mid
        }
    }
    return arr[left]
}
