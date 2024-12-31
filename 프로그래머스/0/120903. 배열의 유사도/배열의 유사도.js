function solution(s1, s2) {
    var answer = 0;
    for (const value1 of s1) {
        for (const value2 of s2) {
            if (value1 === value2) answer += 1;
        }
    }
    return answer;
}