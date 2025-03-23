function solution(numbers, k) {
    var answer = 1;
    const max = numbers.length;
    
    for (let i = 1; i < k; i++) {
        answer = answer + 2 > max ? (answer + 2) % max : answer + 2;
    }
    
    return answer;
}