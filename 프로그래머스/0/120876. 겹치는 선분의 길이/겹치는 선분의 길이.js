function solution(lines) {
    var answer = 0;
    const obj = {};
    
    for (const [a, b] of lines) {
        for (let i = a; i < b; i++) {
            obj[i] = (obj[i] || 0) + 1;
        }
    }
        
    for (const num in obj) {
        if (obj[num] >= 2) {
            answer++;
        }
    }
    
    return answer;
}