function solution(a, b) {
    let answer = 0;
    a.forEach((num, i) => {
        answer += a[i] * b[i];
    })
    return answer;
}