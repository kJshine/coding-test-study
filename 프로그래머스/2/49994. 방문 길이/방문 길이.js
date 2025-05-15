function solution(dirs) {
    let nowLocation = [0, 0];
    const routes = [];
    
    for (const dir of dirs) {
        const [x, y] = move(nowLocation, dir);
        
        if (x > 5 || x < -5 || y > 5 || y < -5) {
            continue;
        }
        
        const route = [nowLocation, [x, y]];
        const hasRoute = routes.some(existingRoute => JSON.stringify(existingRoute) === JSON.stringify(route) || JSON.stringify(existingRoute.reverse()) === JSON.stringify(route));
        
        if (!hasRoute) {
            routes.push(route);
        }
        nowLocation = [x, y];
    }
    
    function move(location, dir) {
        let [x, y] = location;
        
        switch (dir) {
            case 'U': y++;
                break;
            case 'R': x++;
                break;
            case 'D': y--;
                break;
            case 'L': x--;
                break;
            default: 
                break;
        }
        
        return [x, y];
    }
    
    return routes.length;
}