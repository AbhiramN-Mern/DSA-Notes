class Stack{
    constructor(){
        this.stack=[]
        this.minstack=[]
    }
    push(value){
        this.stack.push(value)
        if(this.minstack.length==0||this.minstack[this.minstack.length-1]>=value){
            this.minstack.push(value)
        }
    }
    pop(){
        let p=this.stack.pop()
        if(p==this.minstack[this.minstack.length-1]){
            this.minstack.pop()
        }
    }
    
}
let n=new Stack
n.push(10)
n.push(11)
n.push(9)
console.log(n.stack)
console.log(n.minstack)