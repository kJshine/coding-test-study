function solution(k, scores) {
    let answer = [];
    let basket = [];
    
    scores.forEach((score) => {
        if (basket.length < k) {
            basket.push(score)
        } else {
            if (Math.min(...basket) < score) {
                basket.sort((a, b) => b - a).pop();
                basket.push(score);
            }
        }
        
        answer.push(Math.min(...basket));
    });
    
    return answer;
}