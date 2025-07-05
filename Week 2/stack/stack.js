class Stack{
    constructor(){
        this.stack=[]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.stack.length==0){
            return console.log("stack is Empty not able to POP")
        }else{
            return this.stack.pop()
        }
    }
    peek(){
        if(this.stack.length==0){
            return console.log("Stack is empty not able to peek")
        }else{
            console.log(this.stack[this.size()-1])
        }
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length==0
    }
    print(){
        console.log([...this.stack].reverse().join(" "))
    }
}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.isEmpty())
stack.print()
