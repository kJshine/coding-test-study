function solution(myStr) {
    const split = myStr.split(/[abc]/g);
    return split.filter(str => str).length ? split.filter(str => str) : ["EMPTY"];
}