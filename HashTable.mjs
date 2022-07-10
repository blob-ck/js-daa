import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        this.arr = new Array(10).fill(new DoublyLinkedList());
    }

    hashFunction(number) {
        return number % 10;
    }

    set(key, value) {
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
    }

    get(key) {
        let currentNode = this.arr[this.hashFunction(key)].head;
        while (currentNode !== null) {
            if (key === currentNode.data.key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    remove(key) {
        const list = this.arr[this.hashFunction(key)];
        let currentNode = list.head;
        let deletedIndex = 0;
        while (currentNode !== null) {
            if (key === currentNode.data.key) {
                return list.deleteAt(deletedIndex);
            }

            currentNode = currentNode.next;
            deletedIndex++;
        }

        return null;
    }
}

export { HashTable };