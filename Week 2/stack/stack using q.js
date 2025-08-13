class stack{
    constructor(){
        this.queu=[]
    }
    push(value){
        this.queu.push(value)
        let size=this.queu.length
        while(size>1){
            this.queu.push(this.queu.shift())
            size--
        }
    }
    pop(){
        this.queu.shift()
    }
    peek(){
        console.log(this.queu[0])
    }
    display(){
        console.log(this.queu.join(' -'))
    }
}
let s=new stack
s.push(10)
s.push(20)
s.peek()
s.display()