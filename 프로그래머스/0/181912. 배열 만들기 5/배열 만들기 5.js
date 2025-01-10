function solution(intStrs, k, s, l) {
    var answer = [];
    for (let str of intStrs) {
        const num = +[...str].slice(s, s + l).join("");
        if (num > k) answer.push(num);
    }
    return answer;
}