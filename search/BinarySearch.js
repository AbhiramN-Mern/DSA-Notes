function binarryserch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let mid=Math.round((right+left)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return "not found"
}
let array=[7,8,9,10,11]
let target=10
console.log(binarryserch(array,target))