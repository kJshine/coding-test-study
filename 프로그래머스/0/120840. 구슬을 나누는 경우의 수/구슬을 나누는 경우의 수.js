function solution(balls, share) {
    // 큰 수에서 에러발생
    // return factorial(balls) / (factorial(balls - share) * factorial(share))
    
    let answer = 1;
    
    // n! / (n - r)! * r!
    // 1. 5C3
    // (5 * 4 * 3 * 2 * 1) / (2 * 1) * (3 * 2 * 1);
    // (5 * 4 * 3) / (3 * 2 * 1)
    
    // 2. 6C2
    // (6 * 5 * 4 * 3 * 2 * 1) / (4 * 3 * 2 * 1) * (2 * 1)
    // (6 * 5) / (2 * 1)
    
    
    for (let i = 0; i < share; i++) {
        answer *= balls - i;
        answer /= i + 1;
    }
    
    return answer;
}

function factorial(num) {
    return num > 1 ? num * factorial(num - 1) : 1;
}