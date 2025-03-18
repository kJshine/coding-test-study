function solution(s) {
    let prev = 0;
    return s.split(" ").reduce((acc, cur) => {
        if (cur === 'Z') {
            return acc - prev;
        } else {
            prev = cur;
            return acc + Number(cur);
        }
    }, 0);
}