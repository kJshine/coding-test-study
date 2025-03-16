function solution(array) {
    let answer = 0;
    
    for (const num1 of array) {
        for (const num2 of ""+num1) {
            if (num2 === "7") answer++;
        }
    }
    
    return answer;
}