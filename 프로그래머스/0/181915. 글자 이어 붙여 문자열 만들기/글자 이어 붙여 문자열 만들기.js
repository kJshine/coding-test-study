function solution(str, list) {
    var answer = '';
    for (let i = 0; i < list.length; i++) {
        answer += str.at(list[i]);
    }
    return answer;
}