function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) {
        return 0;
    }
    
    const sorted = works.sort((a, b) => b - a);
    
    for (let i = 0; i < n; i++) {
        sorted[0]--;
        
        let j = 0;
        while (j < sorted.length - 1 && sorted[j] < sorted[j + 1]) {
            [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            j++;
        }
    }
    
    return sorted.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}