class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    reverse() {
        let temp = [];
        while (!this.isEmpty()) {
            temp.push(this.pop());
        }
        this.stack = temp;
    }

    display() {
        console.log(this.stack.join(' '));
    }
}

// Example
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);

console.log("Original stack:");
s.display();

s.reverse();

console.log("Reversed stack:");
s.display();
