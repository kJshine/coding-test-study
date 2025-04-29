function solution(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    const arrS = [...s];
    
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (str === " ") {
            answer += " ";
        } else {
            const lowerStr = str.toLowerCase();
            let index = alphabet.indexOf(lowerStr);
            index = (index + n) % 26;
            answer += str === lowerStr ? alphabet[index] : alphabet[index].toUpperCase();
        }
    }
    
    return answer;
}