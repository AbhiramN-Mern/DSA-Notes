class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(value){
        this.queue.push(value)
    }
     
    dequeue(){
        if(this.isEmpty()){
            return console.log("queue is Empty not able to Dequeue")
        }else{
            this.queue.shift()
        }
    }
  
    peek(){
         if(this.isEmpty()){
            return console.log("queue is Empty not able to peek")
        }else{
            return console.log(this.queue[0])
        }
    }
    size(){
        return this.queue.length
    }
      isEmpty(){
        return this.queue.length==0
    }
   
    print(){
        console.log(this.queue.join(' '))
    }
}
let queue=new Queue
queue.enqueue(10)
queue.enqueue(20)
queue.peek()

queue.print()
