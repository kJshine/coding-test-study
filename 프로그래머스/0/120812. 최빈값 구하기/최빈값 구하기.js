function solution(array) {
    let max = 0;
    let eqaul = false;
    let answer = 0;
    const obj = {};
    
    array.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    })
    
    for (const prop in obj) {
        if (max < obj[prop]) {
            max = obj[prop]
            answer = prop;
            eqaul = false;
        } else if (max === obj[prop]) {
            eqaul = true;
        }
    }
    
    return eqaul ? -1 : +answer;
}