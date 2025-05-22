class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Add to beginning
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  
    // Add to end
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
      }
      this.length++;
    }
    
  
    // Insert at index
    insert(value, index) {
      if (index < 0 || index > this.length) {
        console.log("Index out of bounds");
        return;
      }
  
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      const newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
  
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
  
    // Remove at index
    remove(index) {
      if (index < 0 || index >= this.length || !this.head) {
        console.log("Index out of bounds or list is empty");
        return;
      }
  
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        prev.next = prev.next.next;
      }
      this.length--;
    }
  
    // Print the list
    print() {
      let result = "";
      let current = this.head;
      while (current) {
        result += current.value + " -> ";
        current = current.next;
      }
      result += "null";
      console.log(result);
    }
  }
  
  // Usage
  const list = new SinglyLinkedList();
  list.append(10);
  list.append(20);
  list.prepend(5);
  list.insert(15, 2); // index 2
  list.remove(1); // removes value 10
  list.print(); // Output: 5 -> 15 -> 20 -> null
  