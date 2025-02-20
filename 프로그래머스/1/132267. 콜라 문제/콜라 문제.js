function solution(a, b, n) {
    let answer = 0;
    let remain = n;
    
    while (remain / a >= 1) {
        answer += Math.floor(remain / a) * b;
        remain = Math.floor(remain / a) * b + remain % a;
    }
    return answer;
}

