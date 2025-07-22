function solution(k, dungeons) {
    let maxCount = 0;
    
    const dfs = (patigue, visited, count) => {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [needPatigue, usePatigue] = dungeons[i];
            if (!visited[i] && patigue >= needPatigue) {
                visited[i] = true;
                
                dfs(patigue - usePatigue, visited, count + 1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(k, Array(dungeons.length).fill(false), 0);
    
    return maxCount;
}