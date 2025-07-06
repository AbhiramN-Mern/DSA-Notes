//reverse a string using stack
function rev(str){
    let stack=[]
    let result=""
    for(let value of str){
        stack.push(value)
    }
    while(stack.length>0){
        result+=stack.pop()
    }
    return result
}
console.log(rev("helllo"))