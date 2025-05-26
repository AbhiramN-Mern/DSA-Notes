class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0  
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    //prepent in like list
       prepend(value){ 
        const node=new Node(value)
        if(this.size==0){
            this.head=node
        }else{
            this.next=this.head
            this.head=node
        }
        this.size++
    }
}

 

const list=new LinkedList()
console.log(list.isEmpty())
console.log();
