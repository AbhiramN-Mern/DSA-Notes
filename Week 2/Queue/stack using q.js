class StackUsingQueue {
    constructor() {
        this.q = [];
    }

    push(val) {
        this.q.push(val);
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        if (this.q.length === 0) return "Underflow";
        return this.q.shift();
    }

    display() {
        console.log(this.q.join(" -> "));
    }
}
