function solution(numbers) {
    var answer = 0;
    numbers.sort(compareNumber);
    answer = numbers[0] * numbers[1];
    return answer;
}

function compareNumber(a, b) {
    return b - a;
}