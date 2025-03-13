function solution(i, j, k) {
    let answer = 0;
    
    for (let a = i; a <= j; a++) {
        answer += [...a.toString()].filter(str => str === k.toString()).length;
    }
    
    return answer;
}