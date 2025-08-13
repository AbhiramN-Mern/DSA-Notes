    class history{
    constructor(str){
        this.stack=str.split(' ')
        this.undostack=[]
        }
         undo(){
            if(this.stack.length==0)return console.log("underflow")
            this.undostack.push(this.stack.pop())
        }
         redo(){
            if(this.undostack.length==0)return console.log("underflow")
            this.stack.push(this.undostack.pop())
        }
         dispay(){
            console.log(this.stack.join(' '))
        }
    }
    let h= new history("i am a mern stack developer")
    h.dispay()
    h.undo()
    h.dispay()
    h.redo()
    h.dispay()
    
