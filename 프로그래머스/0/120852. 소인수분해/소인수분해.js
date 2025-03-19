function solution(n) {
    const answer = [];
    while(n !== 1) {
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                while(n % i === 0) {
                    n /= i;
                    if (!answer.includes(i)) {
                        answer.push(i);
                    }
                }
            }
        }
    }
    
    return answer;
    
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
}