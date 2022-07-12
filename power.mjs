function power(x, n) {
    if (n == 0) return 1;
    return x * power(x, n-1);
}

const ns = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
ns.forEach(n => console.log(power(2, n)));