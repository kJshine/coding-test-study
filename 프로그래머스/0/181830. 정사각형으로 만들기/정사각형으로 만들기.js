function solution(arr) {
    let answer = arr;
    const row = arr.length;
    const column = arr[0].length;
    const diff = Math.abs(row - column);
    
    if (row > column) {
        const diffArr = new Array(diff).fill(0);
        
        for (let i = 0; i < row; i++) {
            answer[i] = [...answer[i], ...diffArr];
        }
    }
    
    if (row < column) {
        const diffArr = new Array(column).fill(0);
        for (let i = 0; i < diff; i++) {
            answer.push(diffArr);
        }
    }
    
    return answer;
}