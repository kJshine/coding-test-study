function solution(numbers, n) {
    let answer = 0;
    for (let value of numbers) {
        answer += value;
        if (answer > n) return answer;
    }
}