function solution(arr) {
    let answer = 0;
    const stack = [arr];
        
    while (true) {
        const next = attempt(stack[answer]);
        
        if (JSON.stringify(next) === JSON.stringify(...stack.slice(-1))) {
            return answer;
        }
        
        stack.push(next);
        answer++;
    }
    
    function attempt(arr) {
        return arr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            else if (num < 50 && num % 2 === 1) return (num * 2) + 1;
            else return num;
        });
    }
}

