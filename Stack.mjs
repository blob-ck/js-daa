import { LinkedList } from './LinkedList.mjs';

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.insertAt(0, data);
    }

    pop() {
        try {
            return this.list.deleteAt(0);
        } catch (error) {
            return null;
        }
    }
    
    peek() {
        try {
            return this.list.getNodeAt(0);
        } catch (error) {
            return null;
        }
    }

    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Stack };