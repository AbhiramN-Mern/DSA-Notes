class Node{
    constructor(value){
         this.value=value
         this.prev=null
         this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail
    }
    addFirst(value){
        let node=new Node(value)
        if(!this.head){
            this.head=this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
    }
    addLast(value){
        let node=new Node(value)
        if(!this.head){
            this.head=this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    }
    size(){
        let current=this.head
        let count=0
        while(current){
            count++
            current=current.next
        }
        return count++
    }
    insert(value,index){
        let node=new Node(value)
        let current=this.head
        if(index<0||index>this.size()){
            console.log("invalid index")
            return
        }
        if(index==0){
            return this.addFirst(value)
        }
        if(index==this.size()){
            return this.addLast(value)
        }
        for(let i=0;i<index-1;i++){
            current=current.next
        }
            node.next=current.next
            node.prev=current
            current.next.prev=node
            current.next=node
        
        
    }
    removeFirst(){
        if(!this.head)return
        if(this.head==this.tail){
            this.head=this.tail=null
            return
        }
        this.head=this.head.next
        this.head.prev=null
    }
    removeLast(){
        if(!this.head)return
        if(this.head===this.tail){
            this.head=this.tail=null
            return
        }
        this.tail=this.tail.prev
        this.tail.next=null
    }
    removeAt(index){
         if(index<0||index>=this.size()){
            console.log("invalid index")
            return
        }
        if(!this.head)return
        let current=this.head
        if(index==0)return this.removeFirst()
        if(index==this.size()-1)return this.removeLast()

        for(let i=0;i<index;i++){
            current=current.next
        }
            current.prev.next=current.next
            current.next.prev=current.prev
    }
    
    print(){
        let current=this.head
        let str=""
        while(current){
            str+=`${current.value}<->`
            current=current.next
        }
        console.log(str+"NULL")
    }
}
let list=new LinkedList()
list.addFirst(5)
list.addLast(10)
list.insert(20,2)
list.removeAt(2)
// list.removeFirst()
// list.removeLast()
list.print()
