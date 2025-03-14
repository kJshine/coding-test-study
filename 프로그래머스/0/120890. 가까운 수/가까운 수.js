function solution(array, n) {
    let smallestIndex = 0;
    const sorted = array.sort((a, b) => a - b)
    
    for (let i = 1; i < sorted.length; i++) {
        if (Math.abs(sorted[smallestIndex] - n) > Math.abs(sorted[i] - n)) {
            smallestIndex = i;
        }
    }
    
    return sorted[smallestIndex];
}