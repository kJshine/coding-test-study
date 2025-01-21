function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        answer++;
        while(!pass(answer)) {
            answer++;
        }
    }
    return answer;
}

function pass(num) {
    if (String(num).includes("3") || num % 3 === 0) return false; 
    return true;
}