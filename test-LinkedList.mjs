import { Node, LinkedList } from './LinkedList.mjs';

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;


console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);


const ll = new LinkedList();
console.log(ll.insertAt(0, 0));
console.log(ll.insertAt(1, 1));
console.log(ll.insertAt(2, 2));
console.log(ll.insertAt(3, 3));
console.log(ll.insertLast(10));

ll.printAll();

console.log(ll.insertAt(1, 99));

ll.printAll();

console.log(ll.getNodeAt(2));
console.log(ll.getNodeAt(1));
console.log(ll.getNodeAt(3));
console.log(ll.getNodeAt(4));
console.log(ll.getNodeAt(0));
console.log(ll.getNodeAt(5));


console.log(ll.deleteAt(1));
ll.printAll();


console.log(ll.deleteLast());
ll.printAll();
console.log(ll.deleteLast());
ll.printAll();
console.log(ll.deleteLast());
ll.printAll();
console.log(ll.deleteLast());
ll.printAll();
console.log(ll.deleteLast());
ll.printAll();



ll.clear();
ll.printAll();