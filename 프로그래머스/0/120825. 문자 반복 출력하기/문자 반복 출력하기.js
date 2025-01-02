function solution(my_string, n) {
    var answer = '';
    for (const value of my_string) {
        for (let i = 0; i < n; i++) {
            answer += value;
        }
    }
    return answer;
}