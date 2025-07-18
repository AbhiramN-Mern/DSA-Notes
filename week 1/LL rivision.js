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
    append(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    prepend(value){
        let current=this.head
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            while(current.next){
                current=current.next
            }
            current.next=node
        }
    }
    removeTop(){
        if(!this.head)return
        this.head=this.head.next
        
    }
    removeLast(){
        if(!this.head)return
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
    insert(value,index){
        let node=new Node(value)
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        node.next=current.next
        current.next=node
        
    }
    remove(index){
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        if(current.next){
        current.next=current.next.next
        }
    }
    middle(){
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
            return slow.value
        
    }
    removeMiddle(){
        let slow=this.head
        let prev=null
        let fast=this.head
        while(fast&&fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
            
    }
            prev.next=slow.next

    }
    print(){
        let str=""
        let current=this.head
        while(current){
            str+=`${current.value} ->`
            current=current.next
        }
        console.log(str+" NULL")
    }
    deletev(value){
        let current=this.head
        while(current.next){
            if(current.next.value==value){
                current.next=current.next.next
            }else{
                current=current.next
            }
        }
    }
    deleteOne(value){
        let current=this.head
        while(current.next){
            if(current.next.value==value){
                current.next=current.next.next
                return
            }
                current=current.next
            
        }
        
    }
}
let list =new LinkedList()

list.prepend(40)
list.prepend(20)
list.prepend(1)
list.prepend(40)
list.prepend(50)
list.deleteOne(40)


// list.remove(1)
console.log(list.middle())
list.print()


