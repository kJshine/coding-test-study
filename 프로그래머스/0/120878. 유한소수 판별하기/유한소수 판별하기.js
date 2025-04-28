function solution(a, b) {
    let answer = 1;
    const objA = op(a);
    const objB = op(b);
    
    if (objB[2] || objB[5]) {
        const keys = Object.keys(objB);
        const filteredKeys = keys.filter(num => num !== '2' && num !== '5');
        if (filteredKeys.length === 0) return 1;
        
        for (let i = 0; i < filteredKeys.length; i++) {
            if ((objA[filteredKeys[i]] || 0) < objB[filteredKeys[i]]) {
                answer = 2;
                break;
            }
        }
        
        return answer;
    } else {
        if (a % b === 0) return 1;
        return 2;
    }
}

function op(a) {
    const obj = {};
    let num = 2;
    while (a > 1) {
        if (a % num === 0) {
            obj[num] = (obj[num] || 0) + 1;
            a /= num;
        } else {
            num++;
        }
    }
    return obj;
}