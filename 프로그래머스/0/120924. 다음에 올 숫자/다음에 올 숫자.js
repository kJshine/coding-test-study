function solution(common) {
    const firstLast = common.pop();
    const secondLast = common.pop();
    const thirdLast = common.pop();
    
    if (firstLast / secondLast === secondLast / thirdLast) {
        return firstLast * (firstLast / secondLast);
    } else {
        return firstLast + (firstLast - secondLast);
    }
}