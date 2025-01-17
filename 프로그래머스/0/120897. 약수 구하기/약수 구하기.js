function solution(n) {
    var arr = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) arr.push(i, n / i);
    }
    const set = new Set(arr.sort((a, b) => a - b));
    return [...set];
}