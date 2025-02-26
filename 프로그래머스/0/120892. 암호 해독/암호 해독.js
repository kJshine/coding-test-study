function solution(cipher, code) {
    return [...cipher].reduce((acc, cur, i) => i % code === code - 1 ? acc + cur : acc, "");
}