function solution(keyinput, board) {
    const [x, y] = board;
    return keyinput.reduce((acc, cur) => {
        if (cur === 'left' && acc[0] !== -Math.floor(x/2)) {
            --acc[0];
        } else if (cur === 'right' && acc[0] !== Math.floor(x/2)) {
            ++acc[0];
        } else if (cur === 'up' && acc[1] !== Math.floor(y/2)) {
            ++acc[1];
        } else if (cur === 'down' && acc[1] !== -Math.floor(y/2)) {
            --acc[1];
        }
        
        return acc;
    }, [0,0]);
}