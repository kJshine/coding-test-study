function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    let num = 2;
    while (num <= denom) {
        if (denom % num === 0 && numer % num === 0) {
            numer /= num;
            denom /= num;
        } else {
            num++;
        }
    }
    return [numer, denom];
}
