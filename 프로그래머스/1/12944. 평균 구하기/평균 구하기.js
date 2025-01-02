function solution(arr) {
    var num = 0;
    arr.map((v) => num += v);
    return num / arr.length;
}