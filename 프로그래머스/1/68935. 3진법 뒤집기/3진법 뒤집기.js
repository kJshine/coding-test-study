function solution(n) {
    const base3 = n.toString(3);
    const reversed = [...base3].reverse().join("");
    return parseInt(reversed, 3);
}