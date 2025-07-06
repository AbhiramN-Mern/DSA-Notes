function removem(stack,curr=0,mid=Math.floor(stack.length/2)){
    if(stack.length==0)return 
    let x=stack.pop()
    removem(stack,curr+1,mid)
    if(curr!==mid){
        stack.push(x)
    }
    return stack
}
console.log(removem([1,2,3,4,5,6,7]))
