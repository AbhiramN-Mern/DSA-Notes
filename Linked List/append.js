class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }

    
append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
        this.head = node
    } else {
        let prev = this.head
        while (prev.next) {
            prev = prev.next
        }
        prev.next = node
    }
    this.size++
}
print(value) {
    if (this.isEmpty()) {
        console.log('list is Empty')
    } else {
        let curr = this.head
        let listValues = ""
        while (curr) {
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}
}

let list = new LinkedList()
list.append(40)
list.print()