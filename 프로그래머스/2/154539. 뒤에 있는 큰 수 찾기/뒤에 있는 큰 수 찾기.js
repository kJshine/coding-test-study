function solution(numbers) {
    const length = numbers.length;
    const answer = Array(length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const stackPop = stack.pop();
            answer[stackPop] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}