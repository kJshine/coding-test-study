function solution(n, m) {
    const gcd = getGCD(n, m);
    return [gcd, (n * m) / gcd];
}

function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}