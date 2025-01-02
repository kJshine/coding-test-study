function solution(x, n) {
    var answer = Array.from({ length: n }, (_, i) => x * (i + 1));
    return answer;
}