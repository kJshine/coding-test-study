function solution(A, B) {
    let answer = 0;
    let arr = [...A];
    
    while(answer < arr.length) {
        if (arr.join("") === B) {
            return answer;
        }
        
        const pop = arr.pop();
        arr.unshift(pop);
        answer++;
    }
    
    return -1;
}