function solution(numlist, n) {
    const answer = numlist.sort((a, b) => {
        const valueA = Math.abs(n-a);
        const valueB = Math.abs(n-b);
        
        if (valueA === valueB) {
            return b - a;
        }
        return valueA - valueB;
    });
    return answer;
}