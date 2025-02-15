function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const initArray = new Array(want.length).fill(0);
        const sliced = discount.slice(i, i + 10);
        sliced.forEach(product => {
            const index = want.indexOf(product);
            if(index >= 0) initArray[index]++;
        });
        
        if(JSON.stringify(initArray) === JSON.stringify(number)) answer++;
    }
    return answer;
}