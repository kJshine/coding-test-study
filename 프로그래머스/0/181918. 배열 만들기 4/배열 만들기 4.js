function solution(arr) {
    var stk = [];
    let i = 0
    while (i < arr.length) {
        if (!stk.length || stk.slice(-1) < arr[i]) {
            stk.push(arr[i]);
            i++
        } else {
            stk.splice(-1, 1);
        }
    }
    return stk;
}