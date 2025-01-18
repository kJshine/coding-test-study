function solution(array) {
    const num = Math.max(...array);
    const index = array.indexOf(num);
    return [num, index];
}