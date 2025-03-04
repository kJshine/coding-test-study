function solution(n) {
    let num = 1;
    while (num * 6 % n !== 0) {
        num++;
    }
    return num;
}