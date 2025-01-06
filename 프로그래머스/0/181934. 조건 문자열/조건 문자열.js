function solution(ineq, eq, n, m) {
    const operator = eq !== "!" ? ineq + eq : ineq;
    
    function compare(operator) {
        switch(operator) {
            case ">": return n > m;
            case ">=": return n >= m;
            case "<": return n < m;
            case "<=": return n <= m;
        }   
    }
    
    return compare(operator) ? 1 : 0;
}