function solution(topping) {
    let answer = 0;
    
    const left = {};
    const right = {};
    let leftCount = 0;
    let rightCount = 0;
    
    for (const value of topping) {
        if (!right[value]) rightCount++;
        right[value] = (right[value] || 0) + 1;
    }
    
    for (let i = 0; i < topping.length; i++) {
        const value = topping[i];
        if (!left[value]) leftCount++;
        left[value] = (left[value] || 0) + 1;
        
        if (right[value] === 1) {
            delete right[value];
            rightCount--;
        } else {
            right[value] -= 1;
        }
        
        if (leftCount === rightCount) {
            answer++;
        }
        
        if (leftCount > rightCount) {
            break;
        }
    }
    
    return answer;
}