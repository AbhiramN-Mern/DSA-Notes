class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, value) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

     removeByValue(value){
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


    removeByValueAll(value){
       let current=this.head
       if(!this.head)return
       if(this.head&&this.head.value==value){
           this.head=this.head.next
           return
       }
    while(current&&current.next){
       if(current.next&&current.next.value==value){
           current.next=current.next.next
       }else{
           current=current.next
       }
    }
   }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let str=""
    while (current) {
      str+=`${current.value}->`
      current = current.next;
    }
    console.log(str+"NULL")
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }
     toLinkedList(arr){
        for(let value of arr){
            this.AddLast(value)
        }
    }

  findMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }
}

// Usage Example
const linkedlist = new LinkedList()
linkedlist.addFirst(5);      // 5
linkedlist.addFirst(3);      // 3 -> 5
linkedlist.addFirst(8);      // 8 -> 3 -> 5
linkedlist.addLast(6); 
linkedlist.removeByValue(3)      // 8 -> 3 -> 5 -> 6

console.log("Original list:");
linkedlist.print();

linkedlist.reverse();
console.log("Reversed list:");
linkedlist.print();

console.log("Middle value:", linkedlist.findMiddle()); // Output depends on current list
