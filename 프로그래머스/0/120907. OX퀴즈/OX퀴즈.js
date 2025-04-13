function solution(quiz) {
    var answer = [];
    quiz.forEach(str => {
        let result;
        const [op, res] = str.split(" = ");
        const [num1, op2, num2] = op.split(' ');
        
        if (op2 === '-') {
            result = (Number(num1) - Number(num2)) === Number(res);
        } else {
            result = (Number(num1) + Number(num2)) === Number(res);
        }
        
        answer.push(result ? "O" : "X");
    });
    return answer;
}