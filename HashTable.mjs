import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        // MDN -> fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
        // fill 사용시 주의할 것
        // fill(new DoublyLinkedList()) 로 사용하게 되면
        // 배열이 원소 갯수만큼 new DoublyLinkedList() 를 실행하지 않고 한번만 실행되므로
        // 배열의 모든 원소는 전부 같은 인스턴스를 가리킨다
        this.arr = new Array(10).fill().map(_ => new DoublyLinkedList());
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