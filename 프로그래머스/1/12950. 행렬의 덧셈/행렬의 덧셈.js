function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const arr = [];
        for (let j = 0; j < arr1[i].length; j++) {
            const num = arr1[i][j] + arr2[i][j];
            arr.push(num);
        }
        answer.push(arr);
    }
    
    return answer;
}