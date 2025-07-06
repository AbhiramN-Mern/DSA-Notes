// Swap Mid - 1 and Mid + 1 Elements in a Stack

function change(stack){
    let n=stack.length
    if(stack.length<3)return stack
    let temp=[]
    let mid=Math.floor(n/2)
    while(stack.length){
        temp.push(stack.pop())
    }
    temp.reverse()
    let i=mid-1
    let j=mid+1
    if(i>=0&&j<n){
        let newval=temp[i]
        temp[i]=temp[j]
        temp[j]=newval
    }
    for(let value of temp){
        stack.push(value)
    }
    return stack
    
}

console.log(change([1,2,3,4,5,6,7]))