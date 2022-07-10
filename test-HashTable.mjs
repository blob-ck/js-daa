import { HashTable } from './HashTable.mjs';

const hashTable = new HashTable();

const players = [
    {key: 1, value: '이운재'},
    {key: 4, value: '최진철'},
    {key: 20, value: '홍명보'},
    {key: 6, value: '유상철'},
    {key: 22, value: '송종국'},
    {key: 21, value: '박지성'},
    {key: 5, value: '김남일'},
    {key: 10, value: '이영표'},
    {key: 8, value: '최태욱'},
    {key: 9, value: '설기현'},
    {key: 14, value: '이천수'},
];

players.forEach(({key, value}) => hashTable.set(key, value));

players.forEach(({key}) => console.log(hashTable.get(key)));

console.log(`1번 선수 : ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1번 선수 : ${hashTable.get(1)}`);
console.log(`21번 선수 : ${hashTable.get(21)}`);