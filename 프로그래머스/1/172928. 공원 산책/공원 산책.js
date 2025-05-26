function solution(park, routes) {
    var answer = [];
    
    for (let i = 0; i < park.length; i++) {
        const arr = park[i].split("")
        if (arr.includes('S')) {
            const index = arr.indexOf('S');
            answer.push(i, index);
            break;
        }
    }
    
    for (const route of routes) {
        const [direction, number] = route.split(" ");
        let now = [...answer];
        let pass = true;
        let next = [];
        
        for (let i = 0; i < +number; i++) {
            next = moving(direction, now);
            if (next[0] < park.length && next[0] >= 0 && next[1] < park[0].length && next[1] >= 0) {
                if (park[next[0]][next[1]] !== 'X') {
                    now = next;
                } else {
                    next = now;
                    pass = false;
                }
            } else {
                pass = false;
                break;
            }
        }
        
        if (pass) answer = now;
    }
    
    return answer;
    
    function moving(direction, arr) {
        let [x, y] = arr;
        switch(direction) {
            case 'N': x--;
                break;
            case 'S': x++;
                break;
            case 'W': y--;
                break;
            case 'E': y++;
                break;
        }
        
        return [x, y];
    }
}