function solution(X, Y) {
    const objX = {};
    const objY = {};
    let answer = '';
    
    for (const value of [...X]) {
        objX[value] = (objX[value] || 0) + 1;
    }
    
    for (const value of [...Y]) {
        objY[value] = (objY[value] || 0) + 1;
    }
    
    for (const num in objX) {
        if (objY[num]) {
            const minNum = Math.min(objX[num], objY[num]);
            answer = num.repeat(minNum) + answer;
        }
    }
    
    return !answer.length ? "-1" : !Number(answer) ? "0" : answer;
}