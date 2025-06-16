class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
    class LinkedList{
        constructor(){
        this.head=null
        }
    first(value){
        const node=new Node(value)
        node.next=this.head
        this.head=node
    }
    last(value){
        let node=new Node(value)
        let current=this.head
        if(!this.head){
            this.head=node
            return
        }
        while(current.next){
            current=current.next
        }
        current.next=node

    }
   remo(value){
       let current=this.head
       if(!this.head)return
       if(this.head&&this.head.value==value){
           this.head=this.head.next
           return
       }
       while(current.next&&current.next.value!=value){
           current=current.next
       }
       if(current.next&&current.next.value==value){
           current.next=current.next.next
       }
   }
    
    print(){
        let str=""
        let current=this.head
        while(current){
            str+=`${current.value}->`
            current=current.next
        }
        console.log(str+"NULL")
    }
    }
    let list=new LinkedList()
    list.last(20)
    list.first(10)
    list.last(30)
    list.last(40)
    list.remo(30)

    list.print()
