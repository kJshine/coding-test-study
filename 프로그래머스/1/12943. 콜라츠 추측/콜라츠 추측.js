function solution(num) {
    var answer = 0;
    let memoNum = num;
    for (let i=0; i<500; i++) {
        if (memoNum === 1) {
            return answer;
        }
        
        if (memoNum % 2 === 0) {
            memoNum /= 2;
        } else {
            memoNum = (memoNum * 3) + 1;
        }
        answer++;
    }
    return -1;
}