function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        const arr2 = arr.slice(s, e + 1).filter(num => num > k).sort((a, b) => a - b);
        answer.push(arr2.length ? arr2[0] : -1);
    })
    return answer;
}