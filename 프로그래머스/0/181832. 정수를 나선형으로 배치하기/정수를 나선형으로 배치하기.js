function solution(n) {
    let answer = Array.from({ length: n}, () => Array.from({length: n}, () => {
        return 0;
    }));
    let col = 0, row = 0;
    let direction = 'right';
    
    for (let i = 1; i <= n * n; i++) {
        answer[col][row] = i;
        
        if (direction === 'right') {
            if (row === n - 1 || answer[col][row+1] !== 0) {
                direction = changeDirection(direction);
                col += 1;
            } else {
                row += 1;
            }
        } else if (direction === 'down') {
            if (col === n - 1 || answer[col+1][row] !== 0) {
                direction = changeDirection(direction);
                row -= 1;
            } else {
                col += 1;
            }
        } else if (direction === 'left') {
            if (row === 0 || answer[col][row-1] !== 0) {
                direction = changeDirection(direction);
                col -= 1;
            } else {
                row -= 1;
            }
        } else if (direction === 'up') {
            if (answer[col-1][row] !== 0) {
                direction = changeDirection(direction);
                row += 1;
            } else {
                col -= 1;
            }
        }
    }
    
    function changeDirection(direct) {
        let result;
        
        switch (direct) {
            case 'right': result = 'down';
                break;
            case 'down': result = 'left';
                break;
            case 'left': result = 'up';
                break;
            case 'up': result = 'right';
                break;
            default: result = 'right';
                break;
        }
        return result;
    }
    
    return answer;
}