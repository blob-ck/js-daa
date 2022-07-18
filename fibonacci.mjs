let num = 40;

function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n-2) + fibonacci(n-1);
}

const fibonacciTime = 'Check time for executing function fibonacci';
console.time(fibonacciTime);
fibonacci(num);
console.timeEnd(fibonacciTime);

function fibonacciWithMemo(n, memo = {}) {
    if (n === 0 || n === 1) return n;
    memo[n-2] = (memo[n-2] || fibonacciWithMemo(n-2, memo));
    memo[n-1] = (memo[n-1] || fibonacciWithMemo(n-1, memo));
    memo[n] = memo[n-2] + memo[n-1];

    return memo[n];
}

const fibonacciWithMemoTime = 'Check time for executing function fibonacciWithMemo';
console.time(fibonacciWithMemoTime);
fibonacciWithMemo(num);
console.timeEnd(fibonacciWithMemoTime);

function fibonacciWithMemo2(n, memo = {}) {
    if (n === 0 || n === 1) return n;
    memo[n] = memo[n] || fibonacciWithMemo2(n-2, memo) + fibonacciWithMemo2(n-1, memo);

    return memo[n];
}

const fibonacciWithMemo2Time = 'Check time for executing function fibonacciWithMemo2';
console.time(fibonacciWithMemo2Time);
fibonacciWithMemo2(num);
console.timeEnd(fibonacciWithMemo2Time);



/**
 * Check time for executing function fibonacci: 1370.379150390625 ms
 * Check time for executing function fibonacciWithMemo: 0.152099609375 ms
 * Check time for executing function fibonacciWithMemo2: 0.0498046875 ms
 */