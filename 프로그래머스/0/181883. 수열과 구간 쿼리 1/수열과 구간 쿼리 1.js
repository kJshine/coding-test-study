function solution(arr, queries) {
    let answer = [...arr];
    queries.forEach(arr => {
        const [s, e] = arr;
        for (let j = s; j <= e; j++) answer[j]++
    });
    return answer;
}