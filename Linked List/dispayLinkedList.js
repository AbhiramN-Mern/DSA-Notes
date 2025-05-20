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
        return this.size==0
    }
    prepent(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next = this.head; 
            this.head=node  
        }
        this.size++
    }
    //print Linked List
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
            }
            console.log(listValues)
        }
    }
}
let list=new LinkedList()
list.prepent(5)
list.prepent(10)
list.prepent(5)
list.print()