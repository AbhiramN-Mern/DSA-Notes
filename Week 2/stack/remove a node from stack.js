function deleteelement(stack,target){
    if(stack.length==0)return false
    const top=stack.pop()
    if(top===target)return true
    const found=deleteelement(stack,target)
    stack.push(top)
    return found
}   
let s=[1,2,3,4,5,65,6]
console.log(deleteelement(s,5))
console.log(s)