class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    printAll() {
        const nodes = new Array();
        let currentNode = this.head;
        
        while(currentNode) {
            nodes.push(currentNode.data);
            currentNode = currentNode.next;
        }

        console.log(`[ ${nodes.join(', ')} ]`);
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('인덱스 범위를 벗어남');
        }

        const newNode = new Node(data);

        if (index === 0 ) {
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else if (index === this.count) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        } else {
            let currentNode = this.head;
            
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            currentNode.next.prev = newNode;
        }

        if (newNode.next === null) {
            this.tail = newNode;
        }
        
        this.count++;

        return newNode.data;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('인덱스 범위를 벗어남');
        }

        let currentNode = this.head;

        if (index === 0) {
            let deleteNode = this.head;
            if (this.head.next === null) {
                this.head = null;
                this.tail = null;
            } else {
                this.head =  this.head.next;
                this.head.prev = null;
            }

            this.count--;
            return deleteNode;
        } else if (index === this.count - 1) {
            let deleteNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        
            this.count--;
            return deleteNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode.next;
            currentNode.next = deleteNode.next;
            currentNode.next.prev = currnetNode;
        
            this.count--;
            return deleteNode;
        }
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('인덱스 범위를 벗어남');
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}


export { Node, DoublyLinkedList }