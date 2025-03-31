function solution(dots) {
    const sorted = dots.sort();
    console.log(sorted)
    return Math.abs(sorted[0][1] - sorted[1][1]) * Math.abs(sorted[0][0] - sorted[2][0]);
}