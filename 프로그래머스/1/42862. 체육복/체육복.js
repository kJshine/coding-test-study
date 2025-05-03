function solution(n, lost, reserve) {
    lost.forEach((num) => {
        if (reserve.includes(num)) {
            lost = lost.filter((value) => value !== num);
            reserve = reserve.filter((value) => value !== num);
        }
    })
    
    let lostNum = lost.length;
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    
    for (const value of lost) {
        const offsets = [0, -1, 1];
        for (const offset of offsets) {
            const target = value + offset;
            if (reserve.includes(target)) {
                lostNum--;
                reserve = reserve.filter((num) => target != num);
                break;
            }
        }
        if (!reserve.length) break;
    }
    
    return n - lostNum;
}