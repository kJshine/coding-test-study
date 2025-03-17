function solution(arr) {
    const firstIndex = arr.indexOf(2);
    if (firstIndex === -1) return [-1];
    return arr.slice(firstIndex, arr.lastIndexOf(2) + 1)
}