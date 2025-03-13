function solution(before, after) {
    return [...before].sort((a, b) => strCompare(a, b)).join("") === [...after].sort((a, b) => strCompare(a, b)).join("") ? 1 : 0;
}

function strCompare(a, b) {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
}