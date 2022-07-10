import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    printAll() {
        this.list.printAll();
    }
    addFirst(data) {
        this.list.insertAt(0, data);
    }
    addLast(data) {
        this.list.insertLast(data);
    }
    removeFirst() {
        return  this.list.deleteAt(0);
    }
    removeLast() {
        return this.list.deleteLast();
    }
    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Deque };