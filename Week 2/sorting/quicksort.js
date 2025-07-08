function quicksort(arr){
    if(arr.length<=1){
        return arr
    }
    let left=[]
    let right=[]
    let value=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<value){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),value,...quicksort(right)]
}
console.log(quicksort([10,50,20,40]))
