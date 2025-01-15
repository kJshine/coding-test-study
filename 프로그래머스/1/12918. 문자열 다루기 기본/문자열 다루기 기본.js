function solution(s) {
    if (s.length === 4 || s.length === 6) {
        const arr = s.match(/[0-9]/g);
        return arr !== null && s.length === arr.length;
    }
    return false;
}