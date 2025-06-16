class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // <-- added for DLL
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // <-- added for DLL
  }

    addFirst(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode; // <-- changed
    } else {
      newNode.next = this.head;
      this.head.prev = newNode; // <-- added
      this.head = newNode;
    }
  }

  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode; // <-- changed
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

  addAt(index, value) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(value);
    if (index === 0) {
      this.addFirst(value); // <-- reuse addFirst
      return;
    }
    if (index === this.size()) {
      this.addLast(value); // <-- reuse addLast
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
      this.head = this.tail = null; // <-- changed
    } else {
      this.head = this.head.next;
      this.head.prev = null; // <-- added
    }
  }

  removeLast() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = this.tail = null; // <-- changed
    } else {
      this.tail = this.tail.prev; // <-- added
      this.tail.next = null; // <-- added
    }
  }

  removeByValue(value) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.removeTop(); // <-- reuse
        } else if (current === this.tail) {
          this.removeLast(); // <-- reuse
        } else {
          current.prev.next = current.next; // <-- added
          current.next.prev = current.prev; // <-- added
        }
        return;
      }
      current = current.next;
    }
  }

  removeByValueAll(value) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.removeTop(); // <-- reuse
          current = this.head;
        } else if (current === this.tail) {
          this.removeLast(); // <-- reuse
          current = null;
        } else {
          current.prev.next = current.next; // <-- added
          current.next.prev = current.prev; // <-- added
          current = current.next;
        }
      } else {
        current = current.next;
      }
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.removeTop(); // <-- reuse
      return;
    }

    if (index === this.size() - 1) {
      this.removeLast(); // <-- reuse
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.prev.next = current.next; // <-- added
    current.next.prev = current.prev; // <-- added
  }

  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.value} <-> `;
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
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next; // <-- swap prev and next
      current.next = temp; // <-- swap next and prev
      current = current.prev; // <-- move to next (which is previous)
    }

    if (temp) {
      this.tail = this.head;
      this.head = temp.prev; // <-- update head
    }
  }

  toLinkedList(arr) {
    for (let value of arr) {
      this.addLast(value); // <-- fixed typo: AddLast -> addLast
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
const linkedlist = new LinkedList();
linkedlist.addFirst(5);      // 5
linkedlist.addFirst(3);      // 3 <-> 5
linkedlist.addFirst(8);      // 8 <-> 3 <-> 5
linkedlist.addLast(6);       // 8 <-> 3 <-> 5 <-> 6
linkedlist.removeByValue(3); // removes 3

console.log("Original list:");
linkedlist.print();

linkedlist.reverse();
console.log("Reversed list:");
linkedlist.print();

console.log("Middle value:", linkedlist.findMiddle());
