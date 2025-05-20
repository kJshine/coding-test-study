function solution(ingredient) {
    const stack = [];
    let answer = 0;
    
    for (const item of ingredient) {
        stack.push(item);
        const length = stack.length;
        
        if (length >= 4 && stack[length-1] === 1 && stack[length-2] === 3 && stack[length-3] === 2 && stack[length-4] === 1) {
            for (let i = 0; i < 4; i++) {
                stack.pop();
            }
            answer++;
        }
    }
    
    return answer;
}