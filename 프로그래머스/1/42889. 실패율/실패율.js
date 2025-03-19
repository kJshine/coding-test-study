function solution(N, stages) {
    let answer = Array.from({length: N}, (_, i) => i+1);
    const failLate = {}
    
    for (let i = 1; i <= N; i++) {
        const numA = stages.filter(num => i === num).length;
        const numB = stages.filter(num => i <= num).length;
        failLate[i] = numA / numB;
    }
    
    answer.sort((a, b) => failLate[b] - failLate[a]);
    
    return answer;
}