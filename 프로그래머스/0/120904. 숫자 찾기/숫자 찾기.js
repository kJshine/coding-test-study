function solution(num, k) {
    return (""+num).search(k) + 1 || -1;
}