class QueueUsingTwoStacks {
    constructor() {
        this.inStack = [];  // for enqueue
        this.outStack = []; //  for dequeue
    }

    enqueue(val) {
        this.inStack.push(val);
    }

    dequeue() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }

        if (this.outStack.length === 0) return "Underflow";

        return this.outStack.pop();
    }

    display() {
        const outCopy = [...this.outStack].reverse();
        const inCopy = [...this.inStack];
        const fullQueue = outCopy.concat(inCopy);
        console.log(fullQueue.join(" -> "));
    }
}
