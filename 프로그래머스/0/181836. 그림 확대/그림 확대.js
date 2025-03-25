function solution(picture, k) {
    const answer = [];
    
    for (let i = 0; i < picture.length; i++) {
        const map = [...picture[i]].map(str => str.repeat(k)).join("");
        for (let j = 0; j < k; j++) {
            answer.push(map);
        }
    }
    
    return answer;
}