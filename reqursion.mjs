function myFunction(number) {
    if (number > 10) return;
    console.log(number);
    myFunction(number+1);
};

myFunction(1);

// 재귀함수 recursion
// 요소 : 기저조건(종료조건), 콜스택
// 작성법 : 이미 함수가 완성되었다고 보고 사례에서 패턴을 찾아 공식화 한 후, 기저조건을 추가하여 완성
// 주의 : 단순 반복문을 재귀함수로 바꾸는 것은 이득이 없다. 오히려 콜스택을 낭비함