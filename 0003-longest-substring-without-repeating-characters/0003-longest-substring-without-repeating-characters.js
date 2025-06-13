/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const arr = [];
        arr.push(s[i]);
        for (let j = i + 1; j < s.length; j++) {
            if (!arr.includes(s[j])) {
                arr.push(s[j]);
            } else {
                break;
            }
        }
        answer = Math.max(answer, arr.length);
    }

    return answer;
};