function solution(s, skip, index) {
    const regex = new RegExp(`[${skip}]`, "g");
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.replace(regex, "");
    let answer = '';
    
    for (const str of s) {
        let replacedIndex = (alpha.indexOf(str) + index) % alpha.length;
        answer += alpha[replacedIndex];
    }
    
    return answer;
}