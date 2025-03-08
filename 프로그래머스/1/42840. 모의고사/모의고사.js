function solution(answers) {
    let totalScore = Array(peopleAnswers.length).fill(0);
    
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < peopleAnswers.length; j++) {
            if (answers[i] === peopleAnswers[j][i % peopleAnswers[j].length]) {
                totalScore[j]++;
            }
        }
    }
    
    return totalScore.reduce((acc, cur, idx) => {
        if (cur === Math.max(...totalScore)) {
            acc.push(idx+1);
        }
        return acc;
    }, []);
}

const peopleAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];

