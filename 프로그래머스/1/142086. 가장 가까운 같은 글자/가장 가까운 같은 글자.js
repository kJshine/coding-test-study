function solution(s) {
    var answer = [];
    [...s].forEach((str, i) => {
        if (i === 0) answer.push(-1);
        for (let j = i - 1; j >= 0; j--) {
            if (str === s[j]) {
                answer.push(i - j)
                return;
            }
            if (j === 0 && str !== s[j]) answer.push(-1);
        }
    })
    return answer;
}