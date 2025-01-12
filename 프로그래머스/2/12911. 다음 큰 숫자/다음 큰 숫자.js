function solution(n) {
    var answer = n+1;
    while (equalOne(n) !== equalOne(answer)) answer++;
    return answer;
}
    
function equalOne(num) {
    return num.toString(2).match(/1/g).length;
}