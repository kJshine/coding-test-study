function solution(arr, k) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === k) {
            return answer;
        } else if (!answer.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }
    
    const rest = new Array(k - answer.length).fill(-1);
    return answer.concat(rest);
}