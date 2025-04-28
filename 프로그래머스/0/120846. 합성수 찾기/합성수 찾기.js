function solution(n) {
    if (n <= 3) return 0;
    let answer = 0;
    for (let i = 4; i <= n; i++) {
        let num = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                num += 2;
                if (i / j === j) {
                    num--;
                }
            }
        }
        if (num >= 3) {
            answer++;
            continue;
        }
    }
    return answer;
}