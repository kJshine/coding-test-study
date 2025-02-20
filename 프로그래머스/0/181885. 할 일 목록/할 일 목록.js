function solution(todo_list, finished) {
    let answer = [];
    todo_list.forEach((todo, index) => !finished[index] ? answer.push(todo) : null);
    return answer;
}