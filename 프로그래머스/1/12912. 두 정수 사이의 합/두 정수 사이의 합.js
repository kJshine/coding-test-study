function solution(a, b) {
    var answer = 0;
    const startNum = Math.min(a, b);
    const lastNum = Math.max(a, b);
    console.log(startNum, lastNum);
    for (let i = startNum; i <= lastNum; i++) {
        answer += i;
    }
    
    return answer;
}