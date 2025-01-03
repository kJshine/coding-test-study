function solution(arr, divisor) {
    var answer = [];
    // for (const value of arr) {
    //     if (value % divisor === 0) answer.push(value);
    // }
    // answer = answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
    answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a-b);
    if (answer.length === 0) answer = [-1];
    
    return answer;
}