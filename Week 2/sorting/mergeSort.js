function mergeSort(arr){
    if(arr.length<=1)return arr
    let mid=arr.length/2
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid,arr.length))
    return merge(left,right)
}
function merge(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
console.log(mergeSort([10,5,15,20]))