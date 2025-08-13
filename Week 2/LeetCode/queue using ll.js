class Node{
    constructor(value){
    this.next=null
    this.prev=null
    this.value=value
}
}
class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
}

push(value){
    let node=new Node(value)
    if(!this.head){
        this.head=this.tail=node
    }else{
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
    }
}
pop(){
    if(!this.head)return null
    this.head=this.head.next
    this.head.prev=null
    
}
peek(){
    return this.head.value
}
display(){
    let current=this.head
    let result=""
    while(current){
        result+=`${current.value}- `
    current=current.next
    }
    console.log(result+"NULL")
}
}
let list=new LinkedList()
list.push(10)
list.push(20)
list.push(30)
list.pop()
console.log(list.peek())
list.display()


