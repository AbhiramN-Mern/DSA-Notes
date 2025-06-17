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
    addFirst(value){
        const node=new Node(value)
        node.next=this.head
        this.head=node
    }
    addLast(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=node
    }
    size(){
          let current=this.head
          let count=0
        while(current){
            current=current.next
            count++
        }
        console.log("SIZE " + count)
        return count
    }
    addAt(value,index){
        let node=new Node(value)
        let current=this.head
        if(index<0||index>this.size()){
            console.log("invalid indx")
            return
        }
        if(index==0){
            node.next=this.head
            this.head=node
            return
        }
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        node.next=current.next
        current.next=node
        
    }
    deletefirst(){
        if(!this.head)return
        this.head=this.head.next
    }
    deleteLast(){
        if(!this.head)return
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }deleteAt(index){
        let current=this.head
        if(!this.head)return 
        if(index==0){
            this.head=this.head.next
            return
        }
        for(let i=0;i<index-1;i++){
            current.current.next
        }
        if(current.next){
        current.next=current.next.next
    }
    }
    deletevalue(value){
        if(!this.head)return 
        let current=this.head
        while(current.next){
            if(current.next.value==value){
                current.next=current.next.next
                // return
            }else{
            current=current.next

        }
    }
    }
    sum(){
        let current=this.head
        let sum=0
        while(current){
            sum+=current.value
            current=current.next
        }
        console.log(sum)
    }
    middle(){
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow.value
    }
    NthNode(n){
        let current=this.head
        if(n<0||n>=this.size()){
            console.log("inalid index")
            return 
        }
        for(let i=0;i<n;i++){
            current=current.next
        }
        
        return current.value
    }
    Print(){
        let current=this.head
        let str=""
        while(current){
            str+=`${current.value}->`
            current=current.next

        }
            console.log(str+" NULL")
    }
}
let list=new LinkedList()
list.addFirst(5)
list.addFirst(15)
list.addLast(20)
list.addLast(40)

list.addLast(30)
list.deleteAt(1)
// list.deletevalue(20)
list.sum()
console.log(list.middle())
console.log(list.NthNode(6))


// list.deleteLast()
// list.deletefirst()
list.Print()