function solution(n,a,b) {
    let answer = 1;
    // [1,2,3,4,5,6,7,8] : Math.ceil() => 2, 4 / answer: 1
    // [1,2,3,4] : 1, 2 / answer: 2
    // [1, 2] : 1, 1 / answer: 3
    let numA = a;
    let numB = b;
    while (Math.ceil(numA / 2) !== Math.ceil(numB / 2)) {
        numA = Math.ceil(numA / 2);
        numB = Math.ceil(numB / 2);
        answer++;
    }
    return answer;
}