function solution(lottos, win_nums) {
    const rating = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    
    var answer = [];
    
    // 최대 등수
    const includedNum = lottos.filter(num => win_nums.includes(num)).length;
    const zeroNum = lottos.filter(num => num === 0).length;
    const highAnswer = includedNum + zeroNum;
    
    answer.push(rating[highAnswer]);
    
    // 최소 등수
    let lowAnswer = 0;
    lottos.forEach(num => {
        if (win_nums.includes(num)) {
            lowAnswer++;
        }
    })
    
    answer.push(rating[lowAnswer]);
    
    return answer;
}