class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    reverse() {
        if (this.isEmpty()) return;
        let front = this.dequeue();
        this.reverse();
        this.enqueue(front);
    }

    display() {
        console.log(this.queue.join(' '));
    }
}

// Example
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

console.log("Original queue:");
q.display();

q.reverse();

console.log("Reversed queue:");
q.display();
