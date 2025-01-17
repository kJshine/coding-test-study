function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        const set = new Set();
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                set.add(j);
                set.add(i / j);
            }
        }
        answer += set.size % 2 === 0 ? i : -i;
    }
    return answer;
}