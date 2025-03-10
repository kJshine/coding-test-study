function solution(my_string, indices) {
    const sorted = indices.sort((a, b) => b - a);
    const answer = [...my_string];
    for (const index of sorted) {
        answer.splice(index, 1, "");
    }
    return answer.join("");
}