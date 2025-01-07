function solution(a, d, included) {
    var answer = 0;
    const arr = Array.from({length: included.length}, (v, i) => v = a + d * i);
    for (let i=0; i<included.length; i++) {
        if (included[i]) {
            answer += arr[i];
        }
    }
    return answer;
}