class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode.prev = newNode; // <-- make it circular
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;

      this.head.prev = newNode;
      this.tail.next = newNode;

      this.head = newNode;
    }
  }

  addLast(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode.prev = newNode; // <-- make it circular
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;

      this.tail.next = newNode;
      this.head.prev = newNode;

      this.tail = newNode;
    }
  }

  size() {
    if (!this.head) return 0;

    let count = 1;
    let current = this.head.next;

    while (current !== this.head) { // <-- stop when back at head
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

    if (index === 0) {
      this.addFirst(value); // <-- reuse addFirst
      return;
    }

    if (index === this.size()) {
      this.addLast(value); // <-- reuse addLast
      return;
    }

    const newNode = new Node(value);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    current.next.prev = newNode;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) return;

    if (this.head === this.tail) {
      this.head = this.tail = null; // <-- clear list
      return;
    }

    this.head = this.head.next;

    this.head.prev = this.tail;     // <-- re-link head.prev
    this.tail.next = this.head;     // <-- re-link tail.next
  }

  removeLast() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = this.tail = null; // <-- clear list
      return;
    }

    this.tail = this.tail.prev;

    this.tail.next = this.head;     // <-- re-link tail.next
    this.head.prev = this.tail;     // <-- re-link head.prev
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

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  print() {
    if (!this.head) {
      console.log("Empty List");
      return;
    }

    let current = this.head;
    let str = "";

    do {
      str += `${current.value}->`;
      current = current.next;
    } while (current !== this.head); // <-- stop when full circle

    console.log(str + "HEAD");
  }
}

// Test
const linkedlist = new CircularDoublyLinkedList();

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
