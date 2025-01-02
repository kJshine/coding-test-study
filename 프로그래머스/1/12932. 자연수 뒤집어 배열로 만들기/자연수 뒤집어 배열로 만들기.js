function solution(n) {
    var answer = [...String(n)].map((v) => Number(v));
    return answer.reverse();
}