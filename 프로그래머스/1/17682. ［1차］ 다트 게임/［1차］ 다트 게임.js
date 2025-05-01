function solution(dartResult) {
    const answer = [];
    const trans = [...dartResult];
    
    for (let i = 0; i < trans.length; i++) {
        if (trans[i] === '0' && trans[i-1] === '1') {
            trans[i-1] = '10';
            trans.splice(i, 1);
        }
    }
    
    
    
    for (const value of trans) {
        if (Number.isInteger(+value)) {
            answer.push(+value);
        } else {
            const curIndex = answer.length - 1;
            op(value, curIndex);
        }
    }
    
    function op(str, index) {
        switch(str) {
            // case 'S': 
            case 'D': answer[index] = Math.pow(answer[index], 2);
                break;
            case 'T': answer[index] = Math.pow(answer[index], 3);
                break;
            case '*': {
                if (index !== 0) {
                    answer[index-1] *= 2;
                }
                answer[index] *= 2;
            }
                break;
            case '#': answer[index] = -answer[index];
                break;
        }
    }
    
    return answer.reduce((sum, value) => sum + +value, 0);
}