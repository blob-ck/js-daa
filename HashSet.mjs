import { HashTable } from "./Hashtable.mjs";

class HashSet {
    constructor() {
        this.hashTable = new HashTable();
    }


    add(data) {
        if (this.hashTable.get(data) === null) {
            this.hashTable.set(data, -1);
        }
    }

    isContain(data) {
        return this.hashTable.get(data) !== null;
    }

    remove(data) {
        return this.hashTable.remove(data);
    }

    clear() {
        this.hashTable.arr.forEach(dll => dll.clear());
    }
    
    isEmpty() {
        let isEmpty = true;
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            if (this.hashTable.arr[i].count > 0) {
                isEmpty = false;
                break;
            }
        }
        
        return isEmpty;
    }

    printAll() {
        this.hashTable.arr.forEach(dll => {
            let currentNode = dll.head;
            while (currentNode !== null) {
                console.log(currentNode.data.key);
                currentNode = currentNode.next;
            }
        });
    }
}


export { HashSet };