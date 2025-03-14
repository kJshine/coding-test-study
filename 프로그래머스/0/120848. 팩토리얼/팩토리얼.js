function solution(n) {
    let answer = 1;
    while (factorial(answer) <= n) {
        answer++;
    }
    return answer - 1;
}

function factorial(n) {
    return n > 0 ? n * factorial(n - 1) : 1; 
}