//Implement a stack that rejects duplicate values

class Stack{
    constructor(){
        this.stack=[]
        this.set=new Set()
    }
    push(value){
        if(!this.set.has(value)){
            this.stack.push(value)
            this.set.add(value)
        }else{
            console.log(`cant add ${value} its rejected`)
        }
    }
    pop(){
        if(this.stack.lenth==0)return null
        let top=this.stack.pop()
        this.set.delete(top)
        
    }
    peek(){
        if(this.stack.lenth==0)return null
        console.log(this.stack[this.stack.length-1])        
    }
    display(){
        console.log(this.stack)
    }
}
let s=new Stack()
s.push(10)
s.push(11)
s.pop()
s.display()