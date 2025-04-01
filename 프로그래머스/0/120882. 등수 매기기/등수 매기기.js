function solution(score) {
    let answer = Array(score.length).fill(1);
    
    const scores = score.reduce((acc, cur, i) => {
        const obj = {};
        obj[(cur[0] + cur[1]) / 2] = i;
        acc.push(obj);
        return acc;
    }, []).sort((a, b) => +Object.keys(b) - +Object.keys(a));
    
    let ranking = 0;
    let prevScore = 0;
    let equalScore = 0;
    
    scores.forEach((obj, i) => {
        const key = Object.keys(obj);
        if (+key !== prevScore) {
            ranking += 1 + equalScore;
            equalScore = 0;
        } else {
            equalScore++;
        }
        answer[obj[key]] = ranking;
        prevScore = +key;
    })
    
    return answer;
}