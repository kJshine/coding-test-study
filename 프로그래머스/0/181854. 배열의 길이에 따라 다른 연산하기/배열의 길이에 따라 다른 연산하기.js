function solution(arr, n) {
    return arr.length % 2 === 1
        ? arr.map((num, i) => i % 2 === 0 ? num + n : num)
        : arr.map((num, i) => i % 2 === 1 ? num + n : num);
}