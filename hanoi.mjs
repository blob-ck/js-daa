function hanoi(count, from, to, temp) {

    if (count === 0) return;

    hanoi(count - 1, from, temp, to); // 가장 아래의 원판을 이동시키기 위한 사전작업
    console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`); // 가장 아래의 원판을 목적지로 이동
    hanoi(count - 1, temp, to, from); // 나머지 원판들을 목적지로 이동
}

hanoi(3, "A", "C", "B");


// 재귀함수
// 1. 이미 완성된 함수라고 가정
// 2. 큰 작업을 하위작업으로 쪼갬
// 3. 기저조건으로 중단
