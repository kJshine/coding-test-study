function solution(my_string) {
    let answer = 0;
    for (let value of my_string) {
        if (Number(value)) answer += Number(value);
    }
    return answer;
}