function solution(k, m, score) {
    const sorted = score.sort((a, b) => b - a);
    let answer = 0;
    
    for (let i = 0; i < sorted.length / m; i++) {
        const sliced = sorted.slice(m * i, m * (i + 1));
        if (sliced.length === m) {
            answer += Math.min(...sliced) * m;
        }
    }
    
    return answer;
}