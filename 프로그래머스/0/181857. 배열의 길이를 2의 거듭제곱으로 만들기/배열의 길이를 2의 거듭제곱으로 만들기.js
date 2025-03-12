function solution(arr) {
    let n = 1;
    while(arr.length > n) {
        n = n * 2
    };
    return arr.concat(Array(n - arr.length).fill(0));
}