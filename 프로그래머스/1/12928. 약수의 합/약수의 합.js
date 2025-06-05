function solution(n) {
    var answer = 0;
    
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            answer += i + n / i;
            if (n / i === i) {
                answer -= i;
            }
        }
    }
    
    return answer;
}