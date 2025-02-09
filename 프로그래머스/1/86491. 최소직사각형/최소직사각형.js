function solution(sizes) {
    let w = 0;
    let h = 0;
    
    // 1. 배열을 순회하여 큰 값, 작은값으로 필터링
    
    // 2. [10, 7], [12, 3], [15, 8], [14, 7], [15, 5]
    
    // 3. [0]의 가장 큰 값: 15, [1]의 가장 큰 값: 8
    
    // 4. 15 * 8 = 120
    sizes.forEach(arr => {
        const sorted = arr.sort((a, b) => b - a);
        if (w < sorted[0]) w = sorted[0]
        if (h < sorted[1]) h = sorted[1]
    })
    
    return w * h;
}