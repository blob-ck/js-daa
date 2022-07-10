import { Deque } from './Deque.mjs';

const deque = new Deque();


console.log('======== addFirst ==================');
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log(deque.addFirst(1));
console.log(deque.addFirst(2));
console.log(deque.addFirst(3));
console.log(deque.addFirst(4));
console.log(deque.addFirst(5));
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log('\n');

console.log('======== removeFirst ==================');
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log('\n');

console.log('======== addLast ==================');
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log(deque.addLast(1));
console.log(deque.addLast(2));
console.log(deque.addLast(3));
console.log(deque.addLast(4));
console.log(deque.addLast(5));
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log('\n');

console.log('======== removeLast ==================');
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log('\n');
