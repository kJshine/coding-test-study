function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let num = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                num++;
                if (j !== i / j) num++;
            }
        } 
        result += num > limit ? power : num;
    }
    return result;
}