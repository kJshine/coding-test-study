function solution(numbers, hand) {
    let answer = '';
    let left = 10, right = 12;
    for (const num of numbers) {
        if (num === 1 || num === 4 || num === 7) { // 1,4,7
            left = changeNum('L', num);
        } else if (num === 3 || num === 6 || num === 9) { // 3,6,9
            right = changeNum('R', num);
        } else {
            const key = num === 0 ? 11 : num;
            const distanceLeft = getDistance(left, key);
            const distanceRight = getDistance(right, key);
            
            if (distanceLeft === distanceRight) {
                if (hand === 'right') {
                    right = changeNum('R', key);
                } else {
                    left = changeNum('L', key);
                }
            } else if (distanceLeft > distanceRight) {
                right = changeNum('R', key);
            } else {
                left = changeNum('L', key);
            }
        }
    }
    
    function changeNum(direction, num) {
        answer += direction;
        return num;
    }
    
    function getDistance(now, num) {
        let result = 0;
        
        while(now !== num) {
            if (now < num) {
                if (now + 3 <= num) {
                    now += 3;
                } else {
                    now += 1;
                }
            } else {
                if (now - 3 >= num) {
                    now -= 3;
                } else {
                    now -= 1;
                }
            }
            result++;
        }
        
        return result;
    }
    
    return answer;
}