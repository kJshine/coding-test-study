function solution(citations) {
    for (let i = citations.length; i >= 0; i--) {
        const arr = citations.filter(num => num >= i);
        if (arr.length >= i) return i;
    }
    return 0;
}