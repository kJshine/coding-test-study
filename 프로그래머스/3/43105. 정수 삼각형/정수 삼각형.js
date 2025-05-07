function solution(triangle) {
    let answer = [triangle[0][0] + triangle[1][0], triangle[0][0] + triangle[1][1]];
    const maxLength = triangle.length;
    
    if (maxLength === 1) {
        return triangle[0][0];
    } else if (maxLength === 2) {
        return Math.max(...answer);
    }
    
    for (let i = 2; i < triangle.length; i++) {
        const result = [];
        const row = triangle[i];
        
        result.push(answer[0] + row[0]);
        
        for (let j = 1; j < row.length - 1; j++) {
            result.push(row[j] + Math.max(answer[j-1], answer[j]));
        }
        
        result.push(answer[answer.length - 1] + row[row.length - 1]);
        
        answer = result;
    }
    
    return Math.max(...answer);
}