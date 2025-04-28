function solution(x) {
    const num = [...x+""].reduce((acc, cur) => acc + +cur, 0);
    return x % num === 0 ? true : false;
}