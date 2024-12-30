function solution(my_string) {
    var answer = '';
    const length = my_string.length;
    for (let i = 0; i < length; i++) {
        answer += my_string[length-i-1];
    }
    return answer;
}