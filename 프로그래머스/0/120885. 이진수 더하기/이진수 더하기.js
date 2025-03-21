function solution(bin1, bin2) {
    return (convert(bin1) + convert(bin2)).toString(2);
    
    function convert(str) {
        return [...str].reverse().reduce((acc, cur, i) => {
            return acc + Math.pow(2, i) * cur;
        }, 0);
    }
}