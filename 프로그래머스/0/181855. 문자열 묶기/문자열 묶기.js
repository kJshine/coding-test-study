function solution(strArr) {
    const count = {}
    for (const str of strArr) {
        count[str.length] = (count[str.length] || 0) + 1;
    }
    return Object.values(count).sort((a, b) => b - a)[0];
}