function solution(price) {
    var answer = 0;
    const discount = 100000 <= price && price < 300000 ? 0.05 : 300000 <= price && price < 500000 ? 0.1 : 500000 <= price ? 0.2 : 0;
    answer = price * (1 - discount);
    return parseInt(answer);
}