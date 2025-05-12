function solution(board, moves) {
    let answer = 0, basket = [];
    const stack = Array.from({length: board.length}, () => []);
    board.reverse().forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) stack[i].push(arr[i]);
        }
    });
    
    moves.forEach(num => {
        const pick = stack[num-1].pop();
        if (Number(...basket.slice(-1)) === pick) {
            answer += 2;
            basket.pop();
        } else if (pick) {
            basket.push(pick);
        }
    })
    
    return answer;
}