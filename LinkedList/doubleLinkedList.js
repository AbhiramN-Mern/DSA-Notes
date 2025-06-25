class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
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

    if (index === 0) return this.addFirst(value);
    if (index === this.size()) return this.addLast(value);

    const node = new Node(value);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
      node.next=current.next
       node.prev=current
       current.next.prev=node
       current.next=node
  
  }

  
  removeTop() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }

  removeLast() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) return this.removeTop();
    if (index === this.size() - 1) return this.removeLast();

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  deleteValue(value) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) return this.removeTop();
        if (current === this.tail) return this.removeLast();

        current.prev.next = current.next;
        current.next.prev = current.prev;
        return;
      }
      current = current.next;
    }
  }

  sum() {
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.value;
      current = current.next;
    }
    console.log(sum);
  }

  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.value}<->`;
      current = current.next;
    }
    console.log(str + "NULL");
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
    let current = this.head;
    let prev = null;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      current.prev = nextNode;
      prev = current;
      current = nextNode;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  toLinkedList(arr) {
    for (let value of arr) {
      this.addLast(value);
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

  removeMid() {
    if (!this.head || !this.head.next) return this.removeTop();

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    if (slow === this.head) return this.removeTop();
    if (slow === this.tail) return this.removeLast();

    slow.prev.next = slow.next;
    slow.next.prev = slow.prev;
  }

  NthNode(n) {
    if (n < 0 || n >= this.size()) {
      console.log("Invalid index");
      return;
    }

    let current = this.head;
    for (let i = 0; i < n; i++) {
      current = current.next;
    }
    return current.value;
  }
}

const dll = new DoublyLinkedList();
dll.addFirst(5);
dll.addFirst(3);
dll.addFirst(8);
dll.addLast(6);
dll.deleteValue(3);

console.log("Original list:");
dll.print();

dll.reverse();
console.log("Reversed list:");
dll.print();

console.log("Middle value:", dll.findMiddle());
