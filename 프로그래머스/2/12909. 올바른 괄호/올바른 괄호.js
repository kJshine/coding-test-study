function solution(s) {
    let stack = 0;
    for (const str of s) {
        if (str === '(') {
            stack += 1;
        } else {
            stack -= 1;
        }
        
        if (stack < 0) {
            return false;
        }
    }
    return stack === 0 ? true : false;
}