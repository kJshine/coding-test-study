function solution(n) {
    var answer = 2;
    let num = 1;
    while (num*num <= n) {
        if (num*num === n) answer = 1;
        num += 1;
    }
    return answer;
}