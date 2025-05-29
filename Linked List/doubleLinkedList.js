
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null; // <-- added
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // <-- added
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode; // <-- added
    } else {
      this.tail = newNode; // <-- added (only node becomes tail too)
    }

    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // <-- added
      return;
    }

    this.tail.next = newNode; // <-- added
    newNode.prev = this.tail; // <-- added
    this.tail = newNode; // <-- added
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

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      this.addFirst(data); // <-- reuse addFirst
      return;
    }

    if (index === this.size()) {
      this.addLast(data); // <-- reuse addLast
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current; // <-- added
    current.next.prev = newNode; // <-- added
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) return;

    if (this.head === this.tail) {
      // <-- added
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.head.prev = null; // <-- added
  }

  removeLast() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      // <-- added
      this.head = null;
      this.tail = null;
      return;
    }

    this.tail = this.tail.prev; // <-- added
    this.tail.next = null; // <-- added
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.removeTop(); // <-- reuse removeTop
      return;
    }

    if (index === this.size() - 1) {
      this.removeLast(); // <-- reuse removeLast
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.prev.next = current.next; // <-- updated
    current.next.prev = current.prev; // <-- updated
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Test
const linkedlist = new DoublyLinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(6);

linkedlist.removeTop();

linkedlist.addAt(2, 8);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log("size = " + linkedlist.size());
