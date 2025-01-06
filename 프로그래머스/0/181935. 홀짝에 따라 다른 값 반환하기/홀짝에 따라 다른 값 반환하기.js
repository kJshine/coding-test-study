function solution(n) {
    var answer = 0;
    const startNum = n % 2 === 0 ? 0 : 1;
    for (let i=startNum; i <= n; i+=2) {
        answer += n % 2 === 0 ? Math.pow(i, 2) : i;
    }
    return answer;
}