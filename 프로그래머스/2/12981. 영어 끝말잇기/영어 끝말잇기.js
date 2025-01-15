function solution(n, words) {
    const stack = [];
    let answer = [0, 0];
    words.some((word, i) => {
        if (stack.length === 0) {
            stack.push(word);
            return false;
        };
        
        if (stack.at(-1).slice(-1) !== word[0] || stack.includes(word)) {
            answer[0] = i % n + 1;
            answer[1] = i / n === 0 ? 1 : Math.ceil((i + 1) / n);
            return true;
        }
        
        stack.push(word);
        return false;
    });
    return answer;
}