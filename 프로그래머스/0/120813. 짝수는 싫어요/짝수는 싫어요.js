function solution(n) {
    var answer = [];
    let num = 1;
    while (num*2 - 1 <= n) {
        answer.push(num*2 - 1);
        num++;
    }
    return answer;
}