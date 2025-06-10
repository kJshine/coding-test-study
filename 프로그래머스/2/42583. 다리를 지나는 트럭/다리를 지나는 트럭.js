function solution(bridge_length, weight, truck_weights) {
    let result = 0;
    const goings = [];
    let goingWeight = 0;
    
    while (goings.length !== 0 || truck_weights.length !== 0) {
        result++;
        for (let i = goings.length - 1; i >= 0; i--) {
            goings[i][1]--;
            if (goings[i][1] === 0) {
                const [goingTruck] = goings.splice(i, 1)[0];
                goingWeight -= goingTruck;
            }
        }
        
        const truck = truck_weights.slice(0, 1)[0];
        if (goingWeight + truck <= weight && bridge_length > goings.length) {
            const nowTruck = truck_weights.shift();
            goings.push([nowTruck, bridge_length]);
            goingWeight += truck;
        }
    }
    
    return result;
}