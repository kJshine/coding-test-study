function solution(sides) {
    var answer = 0;
    
    // sides 에서 a <= b로 정의
    const a = Math.min(...sides);
    const b = Math.max(...sides);
    
    // 1. sides 중에 가장 긴 변이 있는 경우
    for (let i = 1; i <= b; i++) {
        if (a + i > b) {
            answer++;
        }
    }
    
    // 2. 새로운 변이 가장 긴 변인 경우
    let c = b + 1;
    while(true) {
        if (a + b <= c) return answer;
        c++;
        answer++;
    }
}