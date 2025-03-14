function solution(my_string) {
    const answer = my_string.split(/[a-zA-Z]/g);
    return answer.reduce((acc, cur) => acc + Number(cur), 0);
}