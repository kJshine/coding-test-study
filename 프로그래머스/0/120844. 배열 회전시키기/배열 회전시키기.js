function solution(numbers, direction) {
    let answer = [...numbers];
    if (direction === "left") {
        const part = answer.shift();
        answer = [...answer, part];
    } else {
        const part = answer.pop();
        answer = [part, ...answer];
    }
    return answer;
}