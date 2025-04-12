function solution(keymap, targets) {
    const obj = {};
    
    for (const map of keymap) {
        for (let i = 0; i< map.length; i++) {
            if (!obj[map[i]] || obj[map[i]] > i+1) {
                obj[map[i]] = i+1;
            }
        }
    }
    
    const answer = targets.map((str) => {
        const el = [...str].reduce((acc, cur) => acc + obj[cur], 0);
        return el || -1;
    });
    
    return answer;
}