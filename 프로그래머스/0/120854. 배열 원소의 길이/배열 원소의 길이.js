function solution(strlist) {
    let answer = [];
    const iterator = strlist.values();
    for (const value of iterator) {
        answer.push(value.length);
    } 
    return answer;
}