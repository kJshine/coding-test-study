function solution(arr, query) {
    let answer = arr.slice();
    query.forEach((num, index1) => {
        if (index1 % 2 === 0) {
            answer = answer.filter((_, i) => i <= num);
        } else {
            answer = answer.filter((_, i) => i >= num);
        }
    })
    return answer;
}