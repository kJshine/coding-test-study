function solution(k, tangerine) {
    // var answer = 0;
    // return answer;
    
    // 1. [1, 2, 3, 4, 5] 의 갯수 [1, 2, 2, 1, 2]
    // 2. 내림차순 [2, 2, 2, 1, 1]
    // 3. 여기에서 앞에서 부터 6개가 되는 index는 2 => 따라서 0,1,2 = 총 3
    
    // 1. 갯수를 stack에 추가
    // const stack = [];
    // const set = new Set(tangerine);
    let total = 0;
    // addStack(stack, set, tangerine);
    
    // 2. 내림차순 정렬
    // stack.sort((a, b) => b - a);
    
    // 3. 앞에서 부터 더함
    // for (let i = 0; i < stack.length; i++) {
    //     total += stack[i];
    //     if (total >= k) return i + 1; // 총 합이 k와 같거나 크면 해당 index + 1 출력
    // }
    
    // 그러나 여기서 시간초과 발생 : 앞에서부터 더하는 과정이 오래걸리는 것 같음
    // 그럼 뒤에서 부터 빼보자
    
    // total = stack.reduce((acc, cur) => acc + cur, 0);
    // for (let i = stack.length - 1; i >= 0; i--) {
    //     total -= stack[i];
    //     if (total === k) return i;
    //     if (total < k) return i + 1;
    // }
    
    // 똑같이 안됨. 원소의 크기가 커질 경우에 무조건 시간초과가 나옴
    // 원인은 addStack에서 발생
    
    // Map을 사용
    const countMap = new Map();
    tangerine.forEach(size => {
       countMap.set(size, (countMap.get(size) || 0) + 1); 
    });
    
    const counts = [...countMap.values()].sort((a, b) => b - a);
    
    for (let i = 0; i < counts.length; i++) {
        total += counts[i];
        if (total >= k) return i + 1; // 총 합이 k와 같거나 크면 해당 index + 1 출력
    }
}

function addStack(stack, set, tangerine) {
    for (const value of set) {
        stack.push(tangerine.filter((num) => value === num).length);
    }
}