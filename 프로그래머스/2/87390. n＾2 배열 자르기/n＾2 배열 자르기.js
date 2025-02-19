// function solution(n, left, right) {
//     let answer = [];
//     const initArray = Array.from({length: n}, (_, i) => i + 1);
    
//     for (let i = 1; i <= n; i++) {
//         let arr = initArray.slice();
//         for (let j = 0; j < i; j++) {
//             arr[j] = i;
//         }
//         answer.push(arr);
//     }
    
//     return answer.flat().slice(left, right + 1)
// }

function solution(n, left, right) {
    // 7/4 = 1, 3  => (1+1, 3) : 2행 3열
    // 14/4 = 3, 2 => (3+1, 2) : 4행 2열
    
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n) + 1;
        const column = i % n + 1;
        answer.push(Math.max(row, column));
    }
    
    return answer;
}