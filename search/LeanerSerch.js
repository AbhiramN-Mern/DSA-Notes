function LeanerSerch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
}
let array=[7,8,9,10]
let target=10
console.log(LeanerSerch(array,target))