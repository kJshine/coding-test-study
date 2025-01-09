function solution(x1, x2, x3, x4) {
    function union(a, b) {
        return Boolean(a || b);
    }
    
    function intersection(a, b) {
        return Boolean(a && b);
    }
    
    return intersection(union(x1, x2), union(x3, x4));
}