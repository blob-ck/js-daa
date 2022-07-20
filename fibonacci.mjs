let num = 10;

function checkTimeForFibonacci(n, func) {
    console.log('==================================================')
    const txt = `Check time for executing function ${func.name}`;
    console.time(txt);
    console.log(func(n));
    console.timeEnd(txt);
    console.log('==================================================')
}

// // 일반 방식
// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n-2) + fibonacci(n-1);
// }

// checkTimeForFibonacci(num, fibonacci);

// 메모이제이션1 방식
function fibonacciWithMemo(n, memo = {}) {
    if (n === 0 || n === 1) return n;
    memo[n-2] = (memo[n-2] || fibonacciWithMemo(n-2, memo));
    memo[n-1] = (memo[n-1] || fibonacciWithMemo(n-1, memo));
    memo[n] = memo[n-2] + memo[n-1];

    return memo[n];
}

checkTimeForFibonacci(num, fibonacciWithMemo);


// 메모이제이션2 방식
function fibonacciWithMemo2(n, memo = {}) {
    if (n === 0 || n === 1) return n;
    memo[n] = memo[n] || fibonacciWithMemo2(n-2, memo) + fibonacciWithMemo2(n-1, memo);

    return memo[n];
}

checkTimeForFibonacci(num, fibonacciWithMemo2);


/**
 * Check time for executing function fibonacci: 1370.379150390625 ms
 * Check time for executing function fibonacciWithMemo: 0.152099609375 ms
 * Check time for executing function fibonacciWithMemo2: 0.0498046875 ms
 */



// 상향식
function fibonacciWithTabulation(n) {
    if (n <= 1) return n;

    let table = [0, 1];
    for (let i = 2; i <= n; i++) {
        table[i] = table[i-2] + table[i-1];
    }

    return table[n];
}

checkTimeForFibonacci(num, fibonacciWithTabulation);
