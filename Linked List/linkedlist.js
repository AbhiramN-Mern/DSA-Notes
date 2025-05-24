class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return null;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  largestVal() {
    if (!this.head) return null;
    let current = this.head;
    let max = current.val;
    while (current) {
      if (current.val > max) {
        max = current.val;
      }
      current = current.next;
    }
    return max;
  }

  sort() {
    if (this.length < 2) return;

    // Convert to array
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    // Sort array
    arr.sort((a, b) => a - b);

    // Rewrite list
    current = this.head;
    for (let i = 0; i < arr.length; i++) {
      current.val = arr[i];
      current = current.next;
    }
  }

  findUnique() {
    let set = new Set();
    let current = this.head;
    while (current) {
      set.add(current.val);
      current = current.next;
    }
    return [...set];
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// Example usage:
const list = new SinglyLinkedList();
list.push(3);
list.push(1);
list.push(4);
list.push(1);
list.push(5);
list.print(); // [3, 1, 4, 1, 5]
console.log("Largest:", list.largestVal()); // 5
console.log("Unique:", list.findUnique()); // [3, 1, 4, 5]
list.sort();
list.print(); // [1, 1, 3, 4, 5]
list.reverse();
list.print(); // [5, 4, 3, 1, 1]
