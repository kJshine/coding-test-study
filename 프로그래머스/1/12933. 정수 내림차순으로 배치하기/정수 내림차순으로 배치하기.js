function solution(n) {
    var answer = (n+"").split("").sort((a, b) => b-a).join("");
    return Number(answer);
}