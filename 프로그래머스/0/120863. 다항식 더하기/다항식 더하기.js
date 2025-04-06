function solution(polynomial) {
    let answer = [0, 0];
    const sorted = polynomial.split(" + ");
    sorted.forEach((str) => {
        if (str.includes('x')) {
            const num = str.replace(/x/g, "");
            if (+num) {
                answer[0] += +num;
            } else {
                answer[0] += 1;
            }
        } else {
            answer[1] += +str;
        }
    });
    
    let result = '';
    
    if (!answer[0]) {
        result = ""+answer[1];
    } else if (!answer[1]) {
        result = answer[0] !== 1 ? answer[0] + 'x' : 'x';
    } else {
        result = answer[0] !== 1 ? answer[0] + 'x + ' + answer[1] : 'x + ' + answer[1];
    }
    
    return result;
}