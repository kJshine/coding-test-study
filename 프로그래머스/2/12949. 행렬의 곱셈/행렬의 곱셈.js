function solution(arr1, arr2) {
    const answer = [];
    const arr1Rows = arr1.length;
    const arr1Cols = arr1[0].length;
    const arr2Cols = arr2[0].length;
    
    for (let i = 0; i < arr1Rows; i++) {
        const arr = [];
        
        for (let j = 0; j < arr2Cols; j++) {
            let num = 0;
            
            for (let k = 0; k < arr1Cols; k++) {
                num += arr1[i][k] * arr2[k][j];
            }
            
            arr.push(num);
        }
        
        answer.push(arr);
    }
    
    return answer;
}