function solution(n) {
    if (n < 2) return 0;
    
    let answer = 1;
    for (let i = 3; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    
    return answer;
}

const isPrime = (num) => {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}