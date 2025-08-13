
//delete specific node from stack

class Stack{
    constructor(value){
        this.stack1=[]
        this.stack2=[]
    }
    push(value){
        this.stack1.push(value)
    }
    pop(){
        this.stack1.pop()
    }
    findAndDelete(value){
      while(this.stack1.length>0){
          let p=this.stack1.pop()
          if(value==p){
              break
          }else{
              this.stack2.push(p)
          }
      }
      while(this.stack2.length>0){
          this.stack1.push(this.stack2.pop())
      }
    }
    display(){
        console.log(this.stack1.join('-'))
    }
}
let s=new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.findAndDelete(20)
s.display()