function solution(dots) {
    var answer = 0;
    const [a, b, c, d] = dots;
    
    if (inclination(a,b) === inclination(c, d) || inclination(a,c) === inclination(b, d) || inclination(a,d) === inclination(b, c)) {
        return 1;
    }
    
    function inclination(x, y) {
        return (x[1] - y[1]) / (x[0] - y[0]);
    }
    
    return 0;
}