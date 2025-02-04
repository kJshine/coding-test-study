function solution(d, budget) {
    let remainBudget = budget;
    let answer = 0;
    const sorted = d.sort((a, b) => a - b);
    
    sorted.forEach((budget, index) => {
       if (budget <= remainBudget) {
           remainBudget -= budget;
           answer++;
       }
    });
    
    return answer;
}