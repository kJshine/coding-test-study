function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0 || answer.slice(-1)[0] !== arr[i]) {
            answer.push(arr[i])
        } else {
            answer.pop();
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}