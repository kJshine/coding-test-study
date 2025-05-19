function solution(survey, choices) {
    const category = ['RT', 'CF', 'JM', 'AN'];
    const record = category.reduce((acc, cur) => {
        const charList = cur.split("");
        for (const char of charList) {
            acc[char] = 0;
        }
        return acc;
    }, {});
    let answer = '';
    
    for (let i = 0; i < survey.length; i++) {
        const [a, b] = survey[i];
        const choice = choices[i];
        
        if (choice === 4) continue;
        else {
            const score = Math.abs(choice - 4);
            const recordCategory = choice - 4 > 0 ? b : a;
            record[recordCategory] = (record[recordCategory] || 0) + score;
        }
    }
    
    for (const cate of category) {
        const [a, b] = cate;
        const char = record[a] >= record[b] ? a : b;
        answer += char;
    }
    
    return answer;
}