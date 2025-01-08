function solution(n, control) {
    var answer = n;
    [...control].map(v => {
        if (v === "w") answer += 1;
        else if (v === "s") answer -= 1;
        else if (v === "d") answer += 10;
        else if (v === "a") answer -= 10;
    });
    return answer;
}