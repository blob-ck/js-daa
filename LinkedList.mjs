class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
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
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('인덱스 범위를 벗어남');
        }

        const newNode = new Node(data);

        if (index === 0 ) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
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
        let deleteNode;

        if (index === 0) {
            deleteNode = this.head;
            this.head = currentNode.next;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
        }

        this.count--;

        return deleteNode;
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


export { Node, LinkedList }