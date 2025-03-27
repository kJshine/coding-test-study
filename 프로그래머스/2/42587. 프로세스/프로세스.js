function solution(priorities, location) {
    const originLength = priorities.length;
    const mirror = Array.from({length: priorities.length}, (_, i) => i);
    
    while(priorities.length !== 0) {
        const shift = priorities.shift();
        const mShift = mirror.shift();
        
        if (priorities.filter(num => num > shift).length) {
            priorities.push(shift);
            mirror.push(mShift);
        } else if (mShift === location) {
            return originLength - priorities.length;
        }
    }
}