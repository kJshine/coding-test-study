function solution(arr, queries) {
    // 쿼리 조회
    queries.map((v, i) => {
        const str1 = arr[v[0]];
        const str2 = arr[v[1]];
        arr.splice(v[0], 1, str2);
        arr.splice(v[1], 1, str1);
    });
    return arr;
}