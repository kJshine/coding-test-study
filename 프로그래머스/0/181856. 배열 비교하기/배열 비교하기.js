function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1
    } else {
        const res1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const res2 = arr2.reduce((acc, cur) => acc + cur, 0);
        return res1 === res2 ? 0 : res1 > res2 ? 1 : -1;
    }
}