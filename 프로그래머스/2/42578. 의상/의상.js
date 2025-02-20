function solution(clothes) {
    const types = {}
    
    for (const [name, type] of clothes) {
        types[type] = (types[type] || 0) + 1;
    }
    
    return Object.values(types).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}