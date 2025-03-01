function solution(n_str) {
    var answer = [...n_str];
    while (answer[0] === "0") {
        answer.shift();
    }
    return answer.join("");
}