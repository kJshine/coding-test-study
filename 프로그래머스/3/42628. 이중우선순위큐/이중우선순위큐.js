function solution(operations) {
    let stack = [];
    for (const value of operations) {
        const [command, num] = value.split(" ");
        if (command === "I") stack.push(+num);
        else {
            stack.sort((a, b) => a - b);
            if (num === "1") stack.pop();
            else stack.shift();
        }
    }
    return stack.length === 0 ? [0, 0] : [Math.max(...stack), Math.min(...stack)]; 
}