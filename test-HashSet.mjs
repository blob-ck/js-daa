import { HashSet } from './HashSet.mjs';

const hashSet = new HashSet();

console.log('====== 데이터 삽입 ============');
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();
console.log(`isEmpty : ${hashSet.isEmpty()}`);

console.log('\n====== 데이터 1 체크 ============');
console.log(`isContain : ${hashSet.isContain(1)}`);

console.log('\n====== 데이터 1 제거 ============');
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty : ${hashSet.isEmpty()}`);

console.log('\n====== 데이터 1 제거 후 체크 ============');
console.log(`isContain : ${hashSet.isContain(1)}`);

console.log('\n====== clear ============');
hashSet.clear();
hashSet.printAll();