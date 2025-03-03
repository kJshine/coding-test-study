function solution(n) {
    return Array.from({length: n}, (_, idx1) => Array.from({length: n}, (_, idx2) => idx1 === idx2 ? 1 : 0));
}