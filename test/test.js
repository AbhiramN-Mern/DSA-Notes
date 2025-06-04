 class Node{
    constructor(value){
        this.value=value
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
    AddLast(value){
        const node=new Node(value)
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

    removeFirst(){
        if(!this.head) return
     this.head=this.head.next

    }
    removeLast(){
        if(!this.head)return 
        if(!this.head.next){
            this.head=null
        }
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
    addIndex(index,value){
        const node=new Node(value)
        if(index>0||index>this.size()){
            console.error('inalid index')
        }
        if(index==0){
            node.next=this.head
            this.head=node
            return
        }
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        node.next=current.next
        current.next=node
    }
    removeIndex(index){
        if(index<0||index>this.size()){
            console.error('invalid index');
            return
        }
        if(index==0){
            this.head=this.head.next
            return
        }
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        if(current.next){
            current.next=current.next.next
        }
    }
    findMiddle(){
        if(!this.head) return 
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }
    reverse(){
        let prev=null
        let current=this.head
        while(current){
            let nextnode=current.next
            current.next=prev
            prev=current
            current=nextnode
        }
            this.head=prev
    }
    toArray(){
        let array=[]
        if(!this.head)return 
        let current=this.head
        while(current){
            array.push(current.value)
            current=current.next
        }
        for(let i=0;i<array.length;i++){
            console.log(array[i])
        }
    }
    toNode(arr){
        for(let value of arr){
            this.AddLast(value)
        }
    }

    
    print(){
        let current=this.head
        let str=""
        while(current){
            str+=`${current.value}->`
            current=current.next
        }
        console.log(str+" NULL")
    }
    size(){
        let count=0
       let  current=this.head
        while(current){
            count++
            current=current.next
        }
        return count
    }
    
    }
   
const list=new LinkedList()

let arr=[1,2,3,4,5]
list.toNode(arr)
// list.addIndex(0,1)
// list.AddLast(2)
// list.AddLast(3)
// list.AddLast(4)
// list.AddLast(5)

// console.log(list.size())
// console.log("middle node is ",list.findMiddle());
// list.toArray()  
// list.reverse()

list.print()