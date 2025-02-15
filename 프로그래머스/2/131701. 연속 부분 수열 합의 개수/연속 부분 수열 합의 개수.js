function solution(elements) {
    // let sorted = elements.sort((a, b) => a - b);
    let sorted = elements;
    sorted = [...sorted, ...sorted];
    const set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        // 1 ~ 5 까지
        for (let j = 0; j < elements.length; j++) {
            // 1 ~ 5 까지
            const sliced = sorted.slice(j, j + i + 1);
            const add = sliced.reduce((acc, cur) => acc + cur, 0);
            set.add(add);
        }
    }
    return [...set].length
}