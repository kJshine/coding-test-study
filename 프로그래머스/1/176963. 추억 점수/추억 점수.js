function solution(name, yearning, photo) {
    const answer = [];
    const scores = {};
    for (let i = 0; i < name.length; i++) {
        scores[name[i]] = yearning[i];
    }
    
    const operator = (photo) => {
        return photo.reduce((acc, cur) => {
            if (scores[cur]) return acc + scores[cur];
            else return acc;
        }, 0);
    } 
    
    for (let i = 0; i < photo.length; i++) {
        answer.push(operator(photo[i]));
    }
    
    return answer;
}
