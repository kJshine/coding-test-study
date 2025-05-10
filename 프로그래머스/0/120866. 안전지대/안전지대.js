function solution(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0 || row[j] === 2) continue;
            change(board[i-1], j);
            change(board[i], j);
            change(board[i+1], j);
        }
    }
    
    function change(row, col) {
        if (row) {
            for (let k = col-1; k < col+2; k++) {
                if (row[k] === 0) {
                    row[k] = 2;
                } else if (row[k] === 1) {
                    continue;
                }
            }
        }
    }
    
    return board.flat().filter(num => num === 0).length;
}